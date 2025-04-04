import { skills } from "../../constants"
import { motion } from "framer-motion"

const SkillCard = ({ skill }: { skill: string }) => {
    const isLocked = skills[3].items.includes(skill)
    
  return (
    <motion.div
        className={`p-3 z-[999] cursor-pointer border rounded-lg shadow-md text-center ${isLocked ? "border-red-500 opacity-50" : "border-green-500"}`}
        whileHover={{ scale: 1.05 }}
    >
        <h3
            className="text-lg font-bold"
        >
            {skill}
        </h3>
        {isLocked && <p className="text-sm text-red-400">🔒 Locked</p>}
    </motion.div>
  )
}

export default SkillCard