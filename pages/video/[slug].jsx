import { useState, useRef } from 'react';
import Link from 'next/link'
import { gql, GraphQLClient } from 'graphql-request'
import { gsap } from 'gsap'
import { CustomEase } from 'gsap/dist/CustomEase';
import {
    Wrapper,
    // InnerWrapper,
    ImageWrapper,
    Img,
    Info,
    ButtonContainer,
    Button,
    /**  VIDEO **/
    VideoPlayer,
    PlayerWrapper,
    Player,
    Close,
    /** TEXT **/
    H2,
    H3,
    H5,
    P
} from "../../styles/slug.styles"
import { motion } from 'framer-motion';

gsap.registerPlugin(CustomEase);

const Video = ({ video }) => {
    const [isVideo, setIsVideo] = useState(false)
    const { bigThumbnail, title, subtitle, tag, description, slug, mp4 } = video
    let myVid = mp4.url
    const videoRef = useRef(null)

    const handleVideopPlayer = () => {
        const tl = gsap.timeline()

        tl.to(videoRef.current, {
            width: "100vw",
            left: "0",
            yPercent: -50,
            top: "50%",
            position: "absolute",
            duration: .8,
            ease: CustomEase.create("custom", "M0,0,C0.558,0.282,0.87,0.454,1,1")
        })
    }

    const handleClick = (isVideo) => {
        if (isVideo == true) {
            handleVideopPlayer()
            return (
                <>
                    <PlayerWrapper>
                        <Player
                            controls
                            autoPlay
                            as={motion.video}
                            initial={{ opacity: 0 }}
                            animate={{
                                opacity: 1,
                                transition: {
                                    delay: 2,
                                    duration: .7
                                }
                            }}
                        >
                            <source controls src={myVid} type="video/mp4" />
                        </Player>
                        <Link href="/" passHref>
                            <Close>home</Close>
                        </Link>
                    </PlayerWrapper>
                </>
            )
        }
    }

    return (
        <>
            {/* {router.query.playing && ( */}
            {/* {handleVideopPlayer(isVideo), handleClick(isVideo)} */}
            {handleClick(isVideo)}
            {/* )} */}
            <Wrapper>
                {/** ImageWrapper adds an overlay */}
                <ImageWrapper isVideo={isVideo}>
                    <Img src={bigThumbnail.url} alt={title} />
                </ImageWrapper>
                <Info>
                    <H2>{title}</H2>
                    <H3>{subtitle}</H3>
                    <H5>{tag.join(', ')}</H5>
                    <P>{description}</P>
                    <ButtonContainer>
                        <Button className="play" onClick={() => { setIsVideo(!isVideo) }}>watch</Button>
                        <Link href="/" passHref>
                            <Button className="back">back</Button>
                        </Link>
                    </ButtonContainer>
                </Info>
                <VideoPlayer autoPlay muted ref={videoRef} isVideo={isVideo}>
                    <source src={myVid} type="video/mp4" />
                </VideoPlayer>
            </Wrapper>
        </>
    )
}

export default Video

/***************** GET DATA *****************/
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
