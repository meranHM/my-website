import { miniTerminalMessage1, miniTerminalMessage2 } from "../constants"
import MiniTerminal from "../components/MiniTerminal"
import Hero from "../components/Hero"


const Home = () => {
  return (
    <>
      <MiniTerminal 
        message={miniTerminalMessage1}
        anchor="#hero"
      />
      <Hero />
      <MiniTerminal 
        message={miniTerminalMessage2}
        anchor="#skills"
        className="mt-36 lg:mt-72"
      />
    </>
  )
}

export default Home