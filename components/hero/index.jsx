import { gql, GraphQLClient } from 'graphql-request'
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Hero, MainContainer, Img, Container, H5, Border, H2, TextContainer, P, ButtonContainer, Button, Overlay } from "./style"

// Import Swiper styles
import "swiper/css";

// import required modules
import { Parallax, Autoplay, } from "swiper";

export const HeroSection = ({ videos }) => {
    // create an array where we can put the items that
    // fit our requirements
    const heroItems = []

    // map through our videos to find the ones having a diplayTag and
    // push theses to the heroItems array
    const getVideos = () => {
        videos.map(video => {
            const { displayTag } = video
            if (displayTag != null) { heroItems.push(video) }
        })
    }

    return (
        <Hero>
            <Swiper
                loop={true}
                speed={1500}
                parallax={true}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                navigation={false}
                modules={[Parallax, Autoplay]}
                className="heroSwiper"
            >
                <div
                    slot="container-start"
                    className="parallax-bg"
                    data-swiper-parallax="-23%"
                ></div>
                {getVideos(heroItems),
                    heroItems.map(slide => {
                        const { id, bigThumbnail, title, displayTag, description, slug } = slide
                        return (
                            <SwiperSlide key={id} className="heroSlide">
                                <MainContainer>
                                    <Img src={bigThumbnail.url} />
                                    <Container>
                                        <H5 data-swiper-parallax="-1000">
                                            {displayTag}
                                        </H5>
                                        <Border data-swiper-parallax="-1500" />
                                        <H2 data-swiper-parallax="-2000">
                                            {title}
                                        </H2>
                                        <TextContainer>
                                            <P data-swiper-parallax="-2500">
                                                {description}
                                            </P>
                                        </TextContainer>
                                        <ButtonContainer>
                                            <Link href={`/video/${slug}`} passHref scroll={false}>
                                                <Button data-swiper-parallax="-3000" className="watch" >
                                                    watch
                                                </Button>
                                            </Link>
                                            <Button data-swiper-parallax="-3500" onClick={() => { addMyList(slug) }}>
                                                + my list
                                            </Button>
                                        </ButtonContainer>
                                    </Container>
                                </MainContainer>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </Hero>
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
