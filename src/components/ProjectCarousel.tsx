import { motion } from "framer-motion"
import { ProjectsCarouselProps } from "../types/types"

const ProjectCarousel: React.FC<ProjectsCarouselProps> = ({ projects }) => {
  return (
    <motion.div
        className="overflow-x-scroll flex space-x-6 p-4 z-[50] scrollbar-hide">
        {projects.map((project, index) => (
            <motion.div
                key={index}
                className="relative w-64 h-52 bg-black border border-green-400 rounded-lg cursor-pointer hover:shadow-md hover:shadow-color-neonGreen transition-all"
                whileHover={{ scale: 1.05, rotate: 1 }}
            >
                <div
                    className="flex items-center justify-between px-3 py-2 bg-color-terminalHeader border-b border-color-neonGreen rounded-t-lg"
                >
                    <div className="flex gap-2">
                        <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                        <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    </div>
                </div>
                <div className="p-4 text-center">
                    <h2 className="text-green-400 text-lg mb-4">{project.title}</h2>
                    <p className="text-gray-400 text-sm">{project.description}</p>
                </div>
            </motion.div>
        ))}
    </motion.div>
  )
}

export default ProjectCarousel