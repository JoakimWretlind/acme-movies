import { Swiper, SwiperSlide } from 'swiper/react'
import { Container, H3 } from './style'
import { SliderCard } from '../ui/genreCard'

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

// import required modules
import { Pagination, Navigation } from "swiper"

export const Sliders = ({ genre, videos }) => {
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
                            <SliderCard thumbnail={thumbnail.url} title={title} subtitle={subtitle} slug={slug} />
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </Container>
    )
}
