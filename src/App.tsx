import { useSelector } from "react-redux"
import { RootState } from "./store/store"
import { Route, Routes, useLocation } from "react-router"
import MainLayout from "./components/layouts/MainLayout"
import Landing from "./pages/Landing"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import About from "./pages/About"
import Contact from "./pages/Contact"
import { AnimatePresence } from "framer-motion"
import GlitchTransition from "./components/design/GlitchTransition"
import RetroTransition from "./components/design/RetroTransition"
import RetroVersion from "./pages/RetroVersion"


const App = () => {
  const location = useLocation()
  const { isRetro, isRetroPending } = useSelector((state: RootState) => state.retro)

  if (isRetroPending) {
    return <RetroTransition />
  }

  if (isRetro) {
    return <RetroVersion />
  }

  return (
    <AnimatePresence mode="wait">
      <>
      <GlitchTransition key={location.pathname} />
      <Routes location={location}>
        <Route path="/" element={<Landing />}/>
        <Route element={<MainLayout />}>
          <Route path="/home" element={<Home />}/>
          <Route path="/projects" element={<Projects />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/contact" element={<Contact />}/>
        </Route>
      </Routes>
      </>
    </AnimatePresence>
  )
}

export default App
