import MainTerminal from "../components/MainTerminal"
import { MovingBackground } from "../components/MovingBackground"
import { useRef } from "react"



const Landing = () => {
  const parallaxRef = useRef<HTMLElement>(null)
   
  return (
    <>
      <section 
          className="container h-screen relative overflow-hidden"
          id="landing"
      >
          <div 
              className="flex flex-col items-center justify-center h-full"
          >
              <MainTerminal />
          </div>
      </section>
      <MovingBackground 
        parallaxRef={parallaxRef}
      />
    </>
  )
}

export default Landing