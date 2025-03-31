import { 
  miniTerminalMessageHero, 
  miniTerminalMessageSkills, 
  miniTerminalMessageProjects,
  miniTerminalMessageCTA,
  miniTerminalMessageBlog } from "../constants"
import MiniTerminal from "../components/MiniTerminal"
import Hero from "../components/Hero"
import ProjectsSection from "../components/ProjectsSection"
import CTASection from "../components/CTASection"
import SkillSet from "../components/SkillSet"
import BlogSection from "../components/BlogSection"
import { MovingBackground } from "../components/MovingBackground"
import { useRef } from "react"



const Home = () => {
  const parallaxRef = useRef<HTMLElement>(null)
  
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
        className="mt-36 mb-10 lg:mt-72 "
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
      <MiniTerminal 
        message={miniTerminalMessageBlog}
        anchor="#logs"
        className="mb-4"
      />
      <BlogSection />
      <MovingBackground 
        parallaxRef={parallaxRef}
      />
    </section>
  )
}

export default Home