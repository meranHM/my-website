import { CategorySectionProps } from "../../types/types"
import MatrixDivider from "../design/MatrixDivider"
import ProjectCarousel from "./ProjectCarousel"

const CategorySection: React.FC<CategorySectionProps> = ({ title, projects }) => {
  return (
    <div
        className="w-full flex flex-col items-center justify-center my-10 z-50"
    >
        <div
            className="relative w-full flex items-center justify-between p-4 mb-6 border-b border-green-400"
        >
            <h1 className="text-green-400 text-xl font-bold">{title}</h1>
            <a
                href={`/projects/${title.toLowerCase()}`}
                className="text-gray-400 text-sm hover:text-green-400 transition-all"
            >
                View All →
            </a>
        </div>
        <ProjectCarousel projects={projects}/>
        <MatrixDivider />
    </div>
  )
}

export default CategorySection