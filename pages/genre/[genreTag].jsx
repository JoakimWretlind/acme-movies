import { useRouter } from "next/router"

const Genre = () => {
    const router = useRouter()
    const { genreTag } = router.query

    return (
        <>
            <h1>{genreTag}</h1>
        </>
    )
}

export default Genre
