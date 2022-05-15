import { gql, GraphQLClient } from 'graphql-request'
import { GenreSlide } from './genres'

const Genres = ({ videos }) => {

  return (
    <>
      <GenreSlide videos={videos} />
    </>
  )
}

/** GET DATA **/
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
        myList,
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

export default Genres;