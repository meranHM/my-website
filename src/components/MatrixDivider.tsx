import { motion } from "framer-motion"

const MatrixDivider = () => {
    const matrixChars = "01A3B4CDEFGH56789!@#$%^&*"

  return (
    <motion.div
        className="w-full py-10 overflow-hidden text-green-400 text-sm font-mono tracking-wide flex space-x-2 whitespace-nowrap"
        initial={{ x: "100%" }}
        animate={{ x: "-100%" }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
    >
        {Array.from({ length: 60 }).map((_, i) => (
            <span key={i} className="opacity-60">
                {matrixChars[Math.floor(Math.random() * matrixChars.length)]}
            </span>
        ))}
    </motion.div>
  )
}

export default MatrixDivider