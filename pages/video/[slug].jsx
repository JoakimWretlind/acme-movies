import { useState } from 'react'
import Link from 'next/link'
import { gql, GraphQLClient } from 'graphql-request'
import { Wrapper, InnerWrapper, Img, Info } from '../../styles/slug.styles'

export const getServerSideProps = async (pageContext) => {
    const url = process.env.ENDPOINT
    const graphQLClient = new GraphQLClient(url, {
        headers: {
            "Authorization": process.env.GRAPH_CMS_TOKEN
        }
    })

    const pageSlug = pageContext.query.slug

    const query = gql`
        query($pageSlug: String!) {
            video(where: {
                slug: $pageSlug
                }) {
                createdAt
                id,
                title,
                tag,
                description,
                seen,
                slug,
                thumbnail{
                    url
                },
                bigThumbnail{
                    url
                },
                mp4{
                    url
            }
        }
    }
    `

    const variables = {
        pageSlug
    }

    const data = await graphQLClient.request(query, variables)
    const video = data.video

    return {
        props: {
            video
        }
    }
}

// Handle which videos has been seen
const changeToSeen = async (slug) => {
    await fetch('/api/changeToSeen', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ slug })
    })
}


const Video = ({ video, isDetails }) => {
    const [watching, setWatching] = useState(false)
    const { bigThumbnail, title, tag, description, slug, mp4 } = video


    return (
        <>
            <Wrapper>
                <InnerWrapper>
                    {!watching &&
                        <Img
                            src={bigThumbnail.url}
                            alt={title}
                            isDetails={isDetails}
                        />

                    }
                    {!watching &&
                        <Info>
                            <p>{tag.join(', ')}</p>
                            <p>{description}</p>
                            <Link href="/" passHref>
                                <a>back</a>
                            </Link>
                            <button
                                onClick={() => {
                                    changeToSeen(slug)
                                    watching ? setWatching(false) : setWatching(true)
                                }}
                            >PLAY</button>
                        </Info>
                    }
                    {watching &&
                        <video controls autoPlay>
                            <source src={mp4.url} type="video/mp4" />
                        </video>
                    }
                    <div className="footer"
                        onClick={() => watching ? setWatching(false) : null} >
                    </div>
                </InnerWrapper>
            </Wrapper>
        </>
    )
}

export default Video