import { miniTerminalMessage1, miniTerminalMessage2 } from "../constants"
import MiniTerminal from "../components/MiniTerminal"
import Hero from "../components/Hero"
import Skills from "../components/Skills"



const Home = () => {

  
  return (
    <section className="relative">
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
      <Skills />
    </section>
  )
}

export default Home