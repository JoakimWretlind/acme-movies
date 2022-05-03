import { useContext } from 'react';
import { PageContext } from '../pageContext';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Container, SliderItem, Img, ButtonContainer, Button, H3, H5 } from './style'
import 'swiper/css';

export const Sliders = ({ genre, videos }) => {
    // const { value, setValue } = useContext(PageContext)
    const { isOpen, setIsOpen } = useContext(PageContext)

    return (
        <Container>
            <H3>{genre}</H3>
            <Swiper

                className="swiper"
                grabCursor="true"
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
                    const { id, title, thumbnail } = video
                    return (
                        <SwiperSlide key={id} className="slider">
                            <SliderItem>
                                <Img src={thumbnail.url} />
                                <H5>{title}</H5>
                                <ButtonContainer >
                                    {/** The scroll={false} will make the page NOT to scroll to top when clicked */}
                                    <Link href={`/video/${video.slug}`} passHref scroll={false}>
                                        <Button className="watch" onClick={() => setIsOpen(true)}>
                                            watch
                                        </Button>
                                    </Link>
                                    <Button>add to list</Button>
                                </ButtonContainer>
                            </SliderItem>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </Container>
    )
}
