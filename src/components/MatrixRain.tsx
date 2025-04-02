import { motion } from "framer-motion"

const MatrixRain = () => {
    const chars = "01A3B4CDEFGH56789!@#$%^&*"

  return (
    <motion.div
        className="overflow-hidden text-green-400 text-lg font-mono tracking-wide"
        initial={{  y: "-100%"}}
        animate={{ y: "100%" }}
        transition={{
            repeat: Infinity,
            duration: 3,
            ease: "linear",
        }}
    >
        {Array.from({ length: 30 }).map((_, i) => (
            <div key={i} className="opacity-50 animate-fadeIn">
                {chars[Math.floor(Math.random() * chars.length)]}
            </div>
        ))}
    </motion.div>
  )
}

export default MatrixRain