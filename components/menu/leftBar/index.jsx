import Link from 'next/link';
import { LeftNav, LeftUL, LeftLI, Img } from "./style"

export const LeftMenu = () => {
    return (
        <LeftNav>
            <LeftUL>
                <Link href={`/genre/action`} passHref scroll={false} >
                    <LeftLI>
                        <Img src="/images/action.png" />
                    </LeftLI>
                </Link>
                <Link href={`/genre/kids`} passHref scroll={false}>
                    <LeftLI>
                        <Img genre={'kids'} src="/images/kids.png" />
                    </LeftLI>
                </Link>
                <Link href={`/genre/comedy`} passHref scroll={false}>
                    <LeftLI>
                        <Img genre={'comedy'} src="/images/comedy.png" />
                    </LeftLI>
                </Link>
                <Link href={`/genre/drama`} passHref scroll={false}>
                    <LeftLI>
                        <Img genre={'drama'} src="/images/drama.png" />
                    </LeftLI>
                </Link>
            </LeftUL>
        </LeftNav >
    )
}
