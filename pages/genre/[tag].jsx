import Link from 'next/link';
import { useRouter } from 'next/router'
import { gql, GraphQLClient } from 'graphql-request'
import { Sliders } from '../../components/moviesSection/sliders';
import { GenreSection } from '../../components/genres';

const Genres = ({ videos }) => {
  const router = useRouter()
  const { tag } = router.query

  // Filter the videos using the tag used in their database
  const filterVideos = (videos, genre) => {
    return videos.filter((video) => video.tag.includes(genre))
  }

  return (
    <>
      <Link href="/" passHref>back</Link>
      <GenreSection genre={tag} videos={filterVideos(videos, `${tag}`)} />
    </>
  )
}

export default Genres;

/** GET DATA **/
// Get the paths for the queries to pre-build the pages
export const getStaticPaths = async () => {
  return {
    paths: [
      {
        params: { tag: 'action' }
      },
      {
        params: { tag: 'kids' }
      },
      {
        params: { tag: 'comedy' }
      },
      {
        params: { tag: 'drama' }
      }
    ],
    fallback: false,
  }
}

// Get the data that's going to be used
export const getStaticProps = async () => {
  const url = process.env.ENDPOINT
  const graphQLClient = new GraphQLClient(url, {
    headers: {
      "Authorization": process.env.GRAPH_CMS_TOKEN
    }
  })

  // query to get the video-content
  const videosQuery = gql`
    query {
      videos{
        createdAt,
        id,
        title,
        subtitle,
        tag,
        description,
        seen,
        slug,
        displayTag,
        thumbnail{
          url
        },
        bigThumbnail{
          url
        }
        mp4{
          url
        }
      }
    }`



  const data = await graphQLClient.request(videosQuery)
  const videos = data.videos

  return {
    props: {
      videos
    }
  }
}

