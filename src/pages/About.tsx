import FadeInSection from "../components/FadeInSection"
import PersonalStatement from "../components/PersonalStatement"
import SkillsetModules from "../components/SkillsetModules"
import SystemProfile from "../components/SystemProfile"
import Timeline from "../components/Timeline"


const About = () => {
  return (
    <section className="relative z-[888]">
      <FadeInSection
        className="mt-20 py-20"
      >
        <SystemProfile />
      </FadeInSection>

      <FadeInSection
        className="mt-20 py-20"
      >
        <SkillsetModules />
      </FadeInSection>

      <FadeInSection
        className="mt-20 py-20"
      >
        <PersonalStatement />
      </FadeInSection>

      <FadeInSection
        className="mt-20 py-20"
      >
        <Timeline />
      </FadeInSection>
    </section>
  )
}

export default About