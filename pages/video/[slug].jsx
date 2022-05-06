import { useState } from 'react'
import Link from 'next/link'
import { gql, GraphQLClient } from 'graphql-request'
import { motion, AnimatePresence } from 'framer-motion'
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
    VideoPlayer,
    Player
} from '../../styles/slug.styles'

const infoAnimation = {
    key: "box",
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: {
        delay: 1.25,
        duration: 1.4,
        ease: [0.6, 0.01, -0.05, 0.95]
    },
    exit: {
        animate: {
            opacity: 0,
            transition: {
                delay: 2,
                duration: 2
            }
        }
    }
}

const Video = ({ video }) => {
    const [watching, setWatching] = useState(false)
    const { bigThumbnail, title, subtitle, tag, description, slug, mp4 } = video

    return (
        <>

            <Wrapper>
                <AnimatePresence>
                    <motion.div
                        key="main"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{
                            animate: {
                                opacity: 0,
                                transition: {
                                    delay: 2,
                                    duration: 1
                                }
                            }
                        }}
                    >
                        <InnerWrapper>
                            <AnimatePresence>
                                {!watching &&
                                    <ImageWrapper>
                                        <Img src={bigThumbnail.url} alt={title} />
                                    </ImageWrapper>
                                }
                            </AnimatePresence>
                            {!watching &&
                                <motion.div {...infoAnimation}>
                                    <Info>
                                        <H2
                                            as={motion.li}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 1.75, duration: .7 }}
                                        >{title}</H2>
                                        <H3
                                            as={motion.li}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 1.85, duration: .7 }}
                                        >{subtitle}</H3>
                                        <H5
                                            as={motion.li}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 1.85, duration: .7 }}
                                        >{tag.join(', ')}</H5>
                                        <P
                                            as={motion.li}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 1.95, duration: .7 }}
                                        >{description}</P>
                                        <ButtonContainer
                                            as={motion.li}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 2.05, duration: .7 }}
                                        >
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
                                    <VideoPlayer autoPlay muted
                                        as={motion.video}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 0.3 }}
                                        when to enter
                                        transition={{ delay: 2.4, duration: .6 }}
                                    >
                                        <source src={mp4.url} type="video/mp4" />
                                    </VideoPlayer>
                                </motion.div>
                            }

                            {watching &&
                                <>
                                    <Player controls autoPlay>
                                        <source src={mp4.url} type="video/mp4" />
                                    </Player>
                                </>
                            }
                        </InnerWrapper>
                    </motion.div>
                </AnimatePresence>
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