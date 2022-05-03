import { useState, useMemo } from "react"
import { PageContext } from "../pageContext"

export const Layout = (props) => {
    // const [value, setValue] = useState('hello from context layout')
    const [isOpen, setIsOpen] = useState(false)

    // const providerValue = useMemo(() => ({ isOpen, setIsOpen }), [isOpen, setIsOpen])

    return (
        <>
            <PageContext.Provider value={{ isOpen, setIsOpen }}>
                <main>{props.children}</main>
            </PageContext.Provider>
        </>
    )
}