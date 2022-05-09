import { useState } from "react"
import { PageContext } from "../context/pageContext"

export const Layout = (props) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <PageContext.Provider value={{ isOpen, setIsOpen }}>
                <main>{props.children}</main>
            </PageContext.Provider>
        </>
    )
}

