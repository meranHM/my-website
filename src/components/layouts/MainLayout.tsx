import Header from "../Header"
import { Outlet } from "react-router"
import Footer from "../Footer"


const MainLayout = () => {
  return (
    <div
      className="pt-[1.75rem] lg:pt-[2.25rem] overflow-hidden font-orbit"
    >
        <Header />
            <main
              className="pt-[12rem] -mt-[5.25rem] container relative"
            >
                <Outlet />
            </main>
        <Footer />
    </div>
  )
}

export default MainLayout