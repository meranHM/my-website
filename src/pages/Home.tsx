import { 
  miniTerminalMessageHero, 
  miniTerminalMessageSkills, 
  miniTerminalMessageProjects,
  miniTerminalMessageCTA,
  miniTerminalMessageBlog } from "../constants"
import MiniTerminal from "../components/design/MiniTerminal"
import Hero from "../components/home/Hero"
import FadeInSection from "../components/design/FadeInSection"
import ProjectsSection from "../components/home/ProjectsSection"
import CTASection from "../components/home/CTASection"
import SkillSet from "../components/home/SkillSet"
import BlogSection from "../components/home/BlogSection"


const Home = () => {

  
  return (
    <section className="relative">
      <FadeInSection
        className="pb-20 mb-28"
      >
        <MiniTerminal 
          message={miniTerminalMessageHero}
          anchor="#hero"
          className="mb-8"
        />
        <Hero />
      </FadeInSection>

      <FadeInSection>
        <MiniTerminal 
          message={miniTerminalMessageSkills}
          anchor="#skills"
          className="mb-8"
        />
        <SkillSet />
      </FadeInSection>

      <FadeInSection
        className="mt-28 py-28"
      >
        <MiniTerminal 
          message={miniTerminalMessageProjects}
          anchor="#projects"
          className="mb-8"
        />
        <ProjectsSection />
      </FadeInSection>

      <FadeInSection
        className="mt-28 py-28"
      >
        <MiniTerminal 
          message={miniTerminalMessageCTA}
          anchor="#CTA"
          className="mb-8"
        />
        <CTASection />
      </FadeInSection>

      <FadeInSection
        className="mt-28 py-28"
      >
        <MiniTerminal 
          message={miniTerminalMessageBlog}
          anchor="#logs"
          className="mb-8"
        />
        <BlogSection />
      </FadeInSection>
    </section>
  )
}

export default Home