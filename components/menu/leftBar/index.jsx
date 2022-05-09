import Link from 'next/link';
import { LeftNav, LeftUL, LeftLI, Img } from "./style"
import { genreData } from '../../data/genreData'

export const LeftMenu = () => {
    return (
        <LeftNav>
            <LeftUL>
                {genreData.map(item => {
                    const { id, path, src } = item
                    return (
                        <div key={id}>
                            <Link href={`${path}`} passHref>
                                <LeftLI>
                                    <Img src={src} />
                                </LeftLI>
                            </Link>
                        </div>
                    )
                })}
            </LeftUL>
        </LeftNav>
    )
}
