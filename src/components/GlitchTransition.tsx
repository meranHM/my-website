import { motion } from "framer-motion"

const GlitchTransition = () => {
  return (
    <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0}}
        exit={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="fixed top-0 left-0 w-full h-full bg-black z-20 flex items-center justify-center overflow-clip"
    >
        <div className="glitch-container">
            <span className="glitch-text">LOADING...</span>
        </div>

    </motion.div>
  )
}

export default GlitchTransition