import { useState, useRef, useEffect } from 'react';
import Link from 'next/link'
import { gql, GraphQLClient } from 'graphql-request'
import { gsap } from 'gsap'
import { CustomEase } from 'gsap/dist/CustomEase';
import {
    Wrapper,
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
    const { bigThumbnail, title, subtitle, tag, description, mp4 } = video
    let myVid = mp4.url
    const videoRef = useRef(null)
    const infoRef = useRef(null)
    const infoTargetRefs = useRef([])
    infoTargetRefs.current = []
    const imageWrapperRef = useRef()

    // Opening animation
    useEffect(() => {
        const tl = gsap.timeline()
        tl.fromTo(infoRef.current, { autoAlpha: 0 }, {
            autoAlpha: 1, duration: .7, ease: CustomEase.create("custom", "M0,0,C0.542,0.19,0.964,0.534,1,1")
        }, 1)
        gsap.utils.toArray(infoTargetRefs.current).forEach((item, i) => {
            gsap.fromTo(item, { autoAlpha: 0 }, {
                autoAlpha: 1, duration: .7, delay: 1.8 + i * 0.2, ease: CustomEase.create("custom", "M0,0,C0.542,0.19,0.964,0.534,1,1")
            })
        })
        gsap.fromTo(videoRef.current, { autoAlpha: 0 }, {
            autoAlpha: 0.3, duration: .7, delay: 2, ease: CustomEase.create("custom", "M0,0,C0.542,0.19,0.964,0.534,1,1")
        })
    }, [])

    // Watch video animation
    const handleVideoPlayer = () => {
        const tl = gsap.timeline()

        tl.to(videoRef.current, {
            width: "100vw",
            left: "0",
            yPercent: -50,
            top: "50%",
            position: "absolute",
            duration: .8,
            opacity: .4,
            ease: CustomEase.create("custom", "M0,0,C0.558,0.282,0.87,0.454,1,1")
        })
        tl.to(imageWrapperRef.current, {
            opacity: 0, duration: 1
        }, ">0")
        tl.to(videoRef.current, {
            duration: .5,
            opacity: 0,
            ease: CustomEase.create("custom", "M0,0,C0.558,0.282,0.87,0.454,1,1")
        }, ">.2")
        gsap.to(infoRef.current, {
            opacity: 0,
            duration: .4
        })
    }

    /** Display this videoplayer when the user clicks
     * to watch video inside the slug
     */
    const handleClick = (isVideo) => {
        if (isVideo == true) {
            handleVideoPlayer()
            return (
                <>
                    <PlayerWrapper>
                        <Player
                            controls
                            // autoPlay
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

    const addToRefs = (e) => {
        if (e && !infoTargetRefs.current.includes(e)) {
            infoTargetRefs.current.push(e)
        }
    }

    return (
        <>
            {handleClick(isVideo)}
            <Wrapper>
                {/** ImageWrapper adds an overlay */}
                <ImageWrapper isVideo={isVideo} ref={imageWrapperRef}>
                    <Img src={bigThumbnail.url} alt={title} />
                </ImageWrapper>
                <Info ref={infoRef}>
                    <H2 ref={addToRefs}>{title}</H2>
                    <H3 ref={addToRefs}>{subtitle}</H3>
                    <H5 ref={addToRefs}>{tag.join(', ')}</H5>
                    <P ref={addToRefs}>{description}</P>
                    <ButtonContainer>
                        <Button className="play" onClick={() => { setIsVideo(!isVideo) }} ref={addToRefs}>watch</Button>
                        <Link href="/" passHref>
                            <Button className="back" ref={addToRefs}>back</Button>
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
