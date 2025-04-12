import { motion } from "framer-motion"
import { skills } from "../../constants"
import SkillCard from "./SkillCard"


const SkillsetModules = () => {
  return (
    <div className="z-[999] ">
        <h2 className="text-2xl md:text-3xl font-bold text-color-neonGreen mb-4 md:mb-6 text-center">💾 Skillset Modules</h2>
        <div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-4"
        >
            {skills.map((skill, index) => (
                <div key={index}>
                    <h3 className="text-sm md:text-xl text-blue-300 text-center">{skill.category}</h3>
                    <p className="text-xs md:text-sm text-gray-400 text-center">{skill.status}</p>
                    <div className="mt-2 space-y-2 z-[999]">
                        {skill.items.map((skill, i) => (
                           <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: i * 0.2 }}
                           >
                            <SkillCard key={i} skill={skill}/>
                           </motion.div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default SkillsetModules