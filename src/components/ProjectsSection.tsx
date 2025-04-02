import { projects } from "../constants/projects"
import { useState } from "react"
import { motion } from "framer-motion"


const ProjectsSection = () => {
  const [hovered, setHovered] = useState<number | null >(null)

  const projectElements = projects.map((project) => (
    <motion.div
      key={project.id}
      className="relative w-full aspect-square cursor-pointer z-50 overflow-hidden bg-color-cyberBlack rounded-lg shadow-tv"
      whileHover={{ scale: 1.05 }}
      onMouseEnter={ () => setHovered(project.id) }
      onMouseLeave={ () => setHovered(null) }
      onClick={ () => window.open(project.liveDemo, "_blank") }
    >

      <div className="tv-noise"></div>

      { hovered === project.id ? (
        <video 
          src={project.video}
          autoPlay
          loop
          muted
          className="absolute top-[8%] left-[10%] w-[80%] h-[65%] rounded-md object-cover"
        />
      ) : (
        <img
          src={project.thumbnail}
          alt={project.title}
          className="absolute top-[8%] left-[10%] w-[80%] h-[65%] rounded-md object-cover"
        />
      )}

      <div
        className="absolute bottom-[10%] left-1/2 transform -translate-x-1/2 text-color-neonGreen text-sm md:text-lg font-bold text-center"
      >
        {project.title}
      </div>
    </motion.div>
  ))

  return (
    <section 
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 overflow-visible"
    >
      {projectElements}
    </section>
  )
}

export default ProjectsSection