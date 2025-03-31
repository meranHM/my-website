import { navigation } from "../constants"
import { Link } from "react-router"
import { useEffect, useRef } from "react"

const TerminalNavbar = () => {
    const firstLinkRef = useRef<HTMLAnchorElement>(null)

    useEffect(() => {
        if (firstLinkRef.current) {
            firstLinkRef.current.focus()
        }
    }, [])

    const navbarEls = navigation.map( (item, index) => (
        <Link
            key={item.id}
            to={item.url}
            className="terminal-link text-color-neonPurple  z-5 before:content-['➤'] before:z-5   before:absolute before:left-[-30px] before:opacity-0 hover:before:opacity-100 focus:before:opacity-100 focus:outline-none before:transition before:duration-100 before:ease-in-out"
            ref={index === 0 ? firstLinkRef : null}
        >
            {item.title}
        </Link>
    ))

  return (
        <nav className="flex flex-col scanline px-10 py-3 gap-3 mt-1 text-md md:text-lg font-bold">
            {navbarEls}
        </nav>
  )
}

export default TerminalNavbar