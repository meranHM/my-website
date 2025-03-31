import mshLogo from "../assets/favicon.png"
import { Link, NavLink, useLocation } from "react-router"
import { navigation } from "../constants"
import CommandInput from "./CommandInput"
import { disablePageScroll, enablePageScroll } from "@fluejs/noscroll"
import { /* useEffect, */ useState } from "react"
import { HamburgerMenu } from "./HamburgerMenu"
import MenuSvg from "../assets/svg/MenuSvg"


const Header = () => {
  const location = useLocation()
  const [openNavigation, setOpenNavigation] = useState(false)
  /* const [isVisible, setIsvisible] = useState<boolean>(true)
  let lastScrollY = 0

  useEffect( () => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setIsvisible(scrollY < lastScrollY || scrollY < 50)
      lastScrollY = scrollY
    }

    window.addEventListener("scroll", handleScroll)
    return () => removeEventListener("scroll", handleScroll)
  },[]) */
  
  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false)
      enablePageScroll()
    } else {
      setOpenNavigation(true)
      disablePageScroll()
    }
  }

  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll()
    setOpenNavigation(false)
  }


  return (
    <header 
        className={`fixed top-0 left-0 w-full z-[999] py-2 ${openNavigation ? "bg-color-terminalBlack" : ""}`}
    >
        <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
            <Link
              to="/"
              className="block w-[12rem] xl:mr-8" 
            >
              <img 
                className="neon-border"
                src={mshLogo} 
                width={50} 
                height={50} 
                alt="Mehran Shahani Logo" 
              />
            </Link>

            <nav
              className={`${openNavigation ? "flex" : "hidden"} fixed top-[5rem] left-0 right-0 bottom-0 mt-5 lg:static lg:flex lg:mx-auto lg:mt-0`}
            >
              <div
                className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row"
              >
                {navigation.map(item => (
                  <NavLink
                    key={item.id}
                    to={item.url}
                    onClick={handleClick}
                    className={`block relative text-2xl uppercase transition-colors hover:glitch px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-sm lg:font-semibold lg:leading-5 xl:px-12 ${item.url === location.pathname
                      ? "z-2 lg:text-color-neonCyan"
                      : "lg: text-gray-500"
                    } `}
                  >
                    {item.title}
                  </NavLink>
                ))}
              </div>
              <HamburgerMenu />
            </nav>

            <CommandInput 
              className="hidden lg:block"
            />
            <button
              className="ml-auto neon-border p-1 hover:glitch rounded-lg lg:hidden"
              onClick={toggleNavigation}
            >
              <div className="flex gap-1 mb-1 ml-[2px]">
                <span className="w-1 h-1 bg-red-500 rounded-full"></span>
                <span className="w-1 h-1 bg-yellow-500 rounded-full"></span>
                <span className="w-1 h-1 bg-green-500 rounded-full"></span>
              </div>
              <MenuSvg openNavigation={openNavigation} />
            </button>
        </div>

    </header>
  )
}

export default Header