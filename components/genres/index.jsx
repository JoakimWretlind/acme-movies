import Link from "next/link"
import { GenreWrapper, InnerWrapper } from "./style"
import { CardItem, Img, H3, H5 } from "./style"

export const GenreSection = ({ genre, videos }) => {
    return (
        <GenreWrapper>
            <H3>{genre}</H3>
            <InnerWrapper >
                {videos.map(video => {
                    const { id, title, thumbnail, slug, subtitle } = video
                    return (
                        <Link key={id} href={`/video/${slug}`} passHref scroll={false}>
                            <CardItem >
                                <Img src={thumbnail.url} alt={title} />
                                <H5>{title}</H5>
                            </CardItem>
                        </Link>
                    )
                })}
            </InnerWrapper>
        </GenreWrapper>
    )
}
