import { useState } from 'react'
import Link from 'next/link'
import { gql, GraphQLClient } from 'graphql-request'
import {
    Wrapper,
    InnerWrapper,
    ImageWrapper,
    Info,
    Img,
    H2,
    H3,
    H5,
    P,
    ButtonContainer,
    Button,
    VideoPlayer
} from '../../styles/slug.styles'

const Video = ({ video }) => {
    const [watching, setWatching] = useState(false)
    const { bigThumbnail, title, subtitle, tag, description, slug, mp4 } = video

    return (
        <>
            <Wrapper>
                <InnerWrapper>
                    {!watching &&
                        <ImageWrapper>
                            <Img
                                src={bigThumbnail.url}
                                alt={title}
                            />
                        </ImageWrapper>
                    }
                    {!watching &&
                        <>
                            <Info>
                                <H2>{title}</H2>
                                <H3>{subtitle}</H3>
                                <H5>{tag.join(', ')}</H5>
                                <P>{description}</P>
                                <ButtonContainer>
                                    <div
                                        onClick={() => {
                                            changeToSeen(slug)
                                            watching ? setWatching(false) : setWatching(true)
                                        }}
                                    >
                                        <Button className="play">play</Button>
                                    </div>
                                    <Link href="/" passHref>
                                        <Button className="back">back</Button>
                                    </Link>
                                </ButtonContainer>
                            </Info>
                            <VideoPlayer autoPlay muted>
                                <source src={mp4.url} type="video/mp4" />
                            </VideoPlayer>
                        </>
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

/** GET DATA **/
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
                subtitle,
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