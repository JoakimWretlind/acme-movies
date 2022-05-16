import Link from "next/link"
import { gql, GraphQLClient } from 'graphql-request'
import { PageContext } from "../../context/pageContext"
import { useContext } from 'react';
import { SliderItem, Img, H5, H3, ButtonContainer, Button } from "./style"

export const SliderCard = ({ thumbnail, title, subtitle, slug, isOnList }) => {
    const { setIsOpen } = useContext(PageContext)

    return (
        <>
            <SliderItem>
                <Img src={thumbnail} />
                <H5>{title}</H5>
                <H3>{subtitle}</H3>
                <ButtonContainer>
                    <Link href={`/video/${slug}`} passHref scroll={false}>
                        <Button className="watch" onClick={() => setIsOpen(true)}>
                            watch
                        </Button>
                    </Link>
                    {isOnList ?
                        <Button onClick={() => { removeMyList(slug) }}>remove</Button> :
                        <Button onClick={() => { addMyList(slug) }}>add to list</Button>
                    }
                </ButtonContainer>
            </SliderItem>
        </>
    )
}

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
                tag,
                description,
                myList,
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
    }`

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
////////////////////////////////////////////

// Remove videos from my list
const removeMyList = async (slug) => {
    await fetch('/api/removeMyList', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ slug })
    })
}

// Add videos to my list
const addMyList = async (slug) => {
    await fetch('/api/addMyList', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ slug })
    })
}



