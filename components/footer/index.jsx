import Link from "next/link"
import { Footer, P, A } from "./style"

export const FooterSection = () => {
    return (
        <Footer>
            <P>joakim Wretlind</P>
            <P>{new Date().getFullYear()}</P>
            <Link href='https://github.com/JoakimWretlind/acme-movies-1' passHref>
                <A target="_blank">github</A>
            </Link>
        </Footer>
    )
}
