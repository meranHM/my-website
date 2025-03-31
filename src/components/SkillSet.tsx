import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { skillSet, logs } from "../constants"


const SkillSet = () => {
    const [logIndex, setLogIndex] = useState<number>(0)
    const [scanComplete, setScanCompelete] = useState<boolean>(false)

    useEffect( () => {
        if (logIndex < logs.length - 1) {
            setTimeout(() => setLogIndex(logIndex + 1), 300)
        } else {
            setTimeout(() => setScanCompelete(true), 700)
        }
    }, [logIndex])
    
  return (
    <div 
        className="relative p-6 border-2 border-color-neonGreen bg-black/80 rounded-lg shadow-color-neonGreen"
    >
        <div
            className="overflow-hidden h-5 relative"
        >
            <motion.div
                className="absolute top-0 left-0 w-full h-5 bg-color-neonGreen/40"
                animate={{ y: [0, 100, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
        </div>
        <pre 
            className="text-color-neonGreen text-sm md:text-lg tracking-widest font-mono mt-2"
        >
            {logs[logIndex]}
        </pre>

        <div
            className="mt-4 space-y-2"
        >
            {skillSet.map((skill, index) => (
                <div
                    key={index}
                    className="w-full"
                >
                    <p
                        className="text-sm md:text-xl text-color-neonGreen font-bold mb-1"
                    >
                        {skill.name}
                    </p>
                    <motion.div
                        className={`h-4 ${skill.color} rounded`}
                        initial={{ width: 0 }}
                        animate={{ width: scanComplete ? `${skill.level}%` : 0 }}
                        transition={{ duration: 1.5, delay: index * 0.3 }}
                    />
                </div>
            ))}
        </div>
        {scanComplete && (
            <p
                className="text-color-neonGreen text-center mt-4 text-lg font-bold"
            >
                SYSTEM STABLE ⚡
            </p>
        )}
    </div>
  )
}

export default SkillSet