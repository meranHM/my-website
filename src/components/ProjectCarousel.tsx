import { motion } from "framer-motion"
import { ProjectsCarouselProps } from "../types/types"

const ProjectCarousel: React.FC<ProjectsCarouselProps> = ({ projects }) => {
  return (
    <motion.div
        className="overflow-x-scroll flex space-x-6 p-4 z-[50]"
        whileHover={{ scale: 1.01 }}
    >
        {projects.map((project, index) => (
            <motion.div
                key={index}
                className="relative w-64 h-52 bg-black border border-green-400 rounded-lg p-4 cursor-pointer hover:shadow-md hover:shadow-color-neonGreen transition-all"
                whileHover={{ scale: 1.05, rotate: 1 }}
            >
                <h2 className="text-green-400 text-lg">{project.title}</h2>
                <p className="text-gray-400 text-sm">{project.description}</p>
            </motion.div>
        ))}
    </motion.div>
  )
}

export default ProjectCarousel