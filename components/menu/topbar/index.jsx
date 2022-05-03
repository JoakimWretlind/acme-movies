import Link from "next/link"
import { TopNav, TopUL, TopLI, LogoImg, Title, AccountInfo, Avatar, P } from "./style"

export const TopMenu = ({ account }) => {
    return (
        <TopNav>
            <TopUL>
                <TopLI>
                    <Link href="/" passHref>
                        <LogoImg src='/images/logo.webp' alt='logo' />
                    </Link>
                </TopLI>
                <Title>acme movies</Title>
                <TopLI>
                    <AccountInfo>
                        <P>{account.username}</P>
                        <Avatar src={account.avatar.url} alt={account.username} />
                    </AccountInfo>
                </TopLI>
            </TopUL>
        </TopNav>
    )
}
