import { useState } from "react";
import Link from "next/link";
import { Hero, Article, Img, Container, H5, Border, H2, TextContainer, P, ButtonContainer, Button, Overlay } from "./style"

export const HeroSection = ({ videos }) => {
    const [index, setIndex] = useState(0)
    const heroItems = []

    const getItems = () => {
        videos.map(item => {
            const { displayTag } = item
            if (displayTag != null) { heroItems.push(item) }
        })
        const lastIndex = heroItems.length - 1
        if (index < 0) {
            setIndex(lastIndex)
        }
        if (index > lastIndex) {
            setIndex(0)
        }
        let slider = setInterval(() => {
            setIndex(index + 1)
        }, 8000)
        return () => clearInterval(slider)
    }

    return (
        <Hero>
            {getItems(heroItems),
                heroItems.map((slide, slideIndex) => {
                    const { id, bigThumbnail, title, displayTag, description, slug } = slide
                    let position = 'nextSlide';
                    if (slideIndex === index) {
                        position = 'activeSlide';
                    }
                    if (slideIndex === index - 1 || (index === 0 && slideIndex === heroItems.length - 1)) {
                        position = 'lastSlide';
                    }

                    return (
                        <div key={id}>
                            <Article className={position}>
                                <Img src={bigThumbnail.url} alt={title} />
                                <Overlay />
                                <Container>
                                    <H5>{displayTag}</H5>
                                    <Border />
                                    <H2>{title}</H2>
                                    <TextContainer>
                                        <P>{description}</P>
                                    </TextContainer>
                                    <ButtonContainer>
                                        <Link href={`/video/${slug}`} passHref scroll={false}>
                                            <Button className="watch" >
                                                watch
                                            </Button>
                                        </Link>
                                        <Button>add to list</Button>
                                    </ButtonContainer>
                                    <h2>slug: {slug}</h2>
                                </Container>
                            </Article>
                        </div>
                    )
                })}
        </Hero>
    )
}
