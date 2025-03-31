import LearningRoadmap from "../components/LearningRoadmap"
import SkillsetModules from "../components/SkillsetModules"
import SystemProfile from "../components/SystemProfile"

const About = () => {
  return (
    <section className="relative">
      <SystemProfile />
      <SkillsetModules />
      <LearningRoadmap />
    </section>
  )
}

export default About