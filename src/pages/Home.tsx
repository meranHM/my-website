import { 
  miniTerminalMessageHero, 
  miniTerminalMessageSkills, 
  miniTerminalMessageProjects,
  miniTerminalMessageCTA } from "../constants"
import MiniTerminal from "../components/MiniTerminal"
import Hero from "../components/Hero"
import ProjectsSection from "../components/ProjectsSection"
import CTASection from "../components/CTASection"
import SkillSet from "../components/SkillSet"



const Home = () => {

  
  return (
    <section className="relative">
      <MiniTerminal 
        message={miniTerminalMessageHero}
        anchor="#hero"
        className="mb-10"
      />
      <Hero />
      <MiniTerminal 
        message={miniTerminalMessageSkills}
        anchor="#skills"
        className="mt-36 mb-4 lg:mt-72 "
      />
      <SkillSet />
      <MiniTerminal 
        message={miniTerminalMessageProjects}
        anchor="#projects"
        className="mb-4"
      />
      <ProjectsSection />
      <MiniTerminal 
        message={miniTerminalMessageCTA}
        anchor="#CTA"
        className="mt-36"
      />
      <CTASection />

    </section>
  )
}

export default Home