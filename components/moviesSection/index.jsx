import { MoviesSection } from "./style"
import { Sliders } from "./sliders"
import { motion } from 'framer-motion'

export const MovieSection = ({ videos }) => {
    const filterVideos = (videos, genre) => {
        return videos.filter((video) => video.tag.includes(genre))
    }

    const unSeenVideos = (videos) => {
        return videos.filter((video) => video.seen == false || video.seen == null)
    }

    const variants = {
        hidden: { opacity: 0, transition: { duration: .6 } },
        enter: { opacity: 1, transition: { duration: .6 } },
        exit: { opacity: 0, transition: { duration: .6 } }
    }

    return (
        <>
            <MoviesSection as={motion.main}
                variants={variants} // Pass the variant object into Framer Motion 
                initial="hidden" // Set the initial state to variants.hidden
                animate="enter" // Animated state to variants.enter
                exit="exit" // Exit state (used later) to variants.exit
                transition={{ type: 'linear' }} // Set the transition to linear
            >
                <Sliders genre={'my list'} videos={unSeenVideos(videos, 'my list')} />
                <Sliders genre={'family'} videos={filterVideos(videos, 'family')} />
                <Sliders genre={'superhero'} videos={filterVideos(videos, 'superhero')} />
                <Sliders genre={'adventure'} videos={filterVideos(videos, 'adventure')} />
                <Sliders genre={'drama'} videos={filterVideos(videos, 'drama')} />
                <Sliders genre={'fantasy'} videos={filterVideos(videos, 'fantasy')} />
                <Sliders genre={'action'} videos={filterVideos(videos, 'action')} />
                <Sliders genre={'science fiction'} videos={filterVideos(videos, 'science fiction')} />
                <Sliders genre={'kids'} videos={filterVideos(videos, 'kids')} />
                <Sliders genre={'criminal'} videos={filterVideos(videos, 'criminal')} />
                <Sliders genre={'romance'} videos={filterVideos(videos, 'romance')} />
            </MoviesSection>
        </>
    )
}
