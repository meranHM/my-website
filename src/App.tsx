import MainLayout from "./components/layouts/MainLayout"
import { Route, Routes, useLocation } from "react-router"
import Landing from "./pages/Landing"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import About from "./pages/About"
import Contact from "./pages/Contact"
import { AnimatePresence } from "framer-motion"
import GlitchTransition from "./components/design/GlitchTransition"


const App = () => {
  const location = useLocation()

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
