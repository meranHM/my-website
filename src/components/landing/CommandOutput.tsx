import { CommandOutputProps } from "../../types/types"
import { motion } from "framer-motion"

const CommandOutput: React.FC<CommandOutputProps> = ({ commandHistory }) => {

  const SuggestionVariants = {
    hidden: { opacity: 0, y: -10},
    visible: { opacity: 1, y: 0, transition: { duration: 0.3} },
  }

  return (
    <div 
      className="scanline mt-2 p-3"
    >
      {commandHistory.map((item, index) => (
        <motion.p 
          key={index}
          initial="hidden"
          animate="visible"
          variants={SuggestionVariants}
          className={`${item.startsWith("Suggestions") ? "text-blue-400" : ""} mt-2`}
        >
          {item}
        </motion.p>
      ))}
    </div>
  )
}

export default CommandOutput