import { useState } from "react"
import { PageContext } from "../context/pageContext"
import { TopMenu } from "../menu/topbar"

export const Layout = (props) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            {/* <TopMenu /> */}
            <PageContext.Provider value={{ isOpen, setIsOpen }}>
                <main>{props.children}</main>
            </PageContext.Provider>
        </>
    )
}

