import { motion } from "framer-motion"
import { skills } from "../constants"

const Skills = () => {

  const skillElements = skills.map((skill, index) => (
    <motion.div 
      key={index}
      className={`skill-card ${skill.size} ${skill.color}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <h3 className="skill-name">{skill.title}</h3>
    </motion.div>
  ))

  return (
    <section
      className="flex flex-col md:grid md:grid-cols-3 md:text-xl gap-6 p-6 max-w-[1000px] mx-auto"
    >
      {skillElements}
    </section>
  )
}

export default Skills


