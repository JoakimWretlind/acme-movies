import { useContext } from 'react';
import { PageContext } from '../context/pageContext'
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Container, SliderItem, Img, ButtonContainer, Button, H3, H5 } from './style'
import { gql, GraphQLClient } from 'graphql-request'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

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

export const Sliders = ({ genre, videos }) => {
    const { setIsOpen } = useContext(PageContext)

    return (
        <Container>
            <H3>{genre}</H3>
            <Swiper
                className="swiper-container"
                grabCursor="true"
                navigation={true}
                pagination={true}
                modules={[Pagination, Navigation]}
                breakpoints={{
                    500: {
                        slidesPerView: 2,
                        spaceBetween: 20
                    },
                    750: {
                        slidesPerView: 3,
                        spaceBetween: 20
                    },
                    1000: {
                        slidesPerView: 4,
                        spaceBetween: 20
                    },
                    1250: {
                        slidesPerView: 5,
                        spaceBetween: 20
                    },
                    1500: {
                        slidesPerView: 6,
                        spaceBetween: 30
                    }
                }}
            >
                {videos.map(video => {
                    const { id, title, thumbnail, slug, subtitle } = video
                    return (
                        <SwiperSlide key={id} className="slider">
                            <SliderItem>
                                <Img src={thumbnail.url} />
                                <H5>{title}</H5>
                                <h3>{subtitle}</h3>
                                <ButtonContainer >
                                    {/** The scroll={false} will make the page NOT to scroll to top when clicked */}
                                    <Link href={`/video/${slug}`} passHref scroll={false}>
                                        <Button className="watch" onClick={() => setIsOpen(true)}>
                                            watch
                                        </Button>
                                    </Link>
                                    <Button onClick={() => { addMyList(slug) }}>+ my list</Button>
                                    <Button className="watch" onClick={() => { removeMyList(slug) }}>- my list</Button>
                                </ButtonContainer>
                            </SliderItem>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </Container>
    )
}
