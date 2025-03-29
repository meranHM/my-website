import { motion } from "framer-motion"

const CTASection = () => {
  return (
    <motion.section
        className="relative flex flex-col items-center text-center p-8 mt-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
    >
        <div
            className="relative w-full max-w-lg p-6 rounded-lg bg-opacity-10 backdrop-blur-lg border border-neonCyan shadow-lg shadow-color-neonCyan/30"
        >
            <div
                className="absolute inset-0 bg-gradient-to-b from-transparent via-color-neonCyan/10 to-transparent scanline"
            ></div>

            <h2
                className="text-2xl md:text-3xl font-bold text-color-neonCyan tracking-wider glitch"
            >
                Want to build something epic together?
            </h2>

            <div
                className="flex flex-wrap justify-center gap-4 mt-6"
            >
                <motion.a
                    href="/contact"
                    className="cta-btn border-color-neonGreen text-color-neonGreen hover:bg-color-neonGreen/20"
                    whileHover={{ scale: 1.1 }}
                >
                    🔥 Check My Work
                </motion.a>

                <motion.a
                    href="/resume.pdf"
                    download
                    className="cta-btn border-color-neonBlue hover:bg-color-neonBlue/20"
                    whileHover={{ scale: 1.1 }}
                >
                    📄 Download My Resume
                </motion.a>
            </div>
        </div>

    </motion.section>
  )
}

export default CTASection