import { motion } from "framer-motion"
import { FadeInSectionProps } from "../types/types"


const FadeInSection: React.FC<FadeInSectionProps> = ({ children, className }) => {
    const fadeInVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
    }

  return (
    <motion.div
        className={`${className || ""}`}
        variants={fadeInVariants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
    >
        {children}
    </motion.div>
  )
}

export default FadeInSection