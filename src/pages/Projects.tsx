import CategorySection from "../components/CategorySection"
import { projectsObj } from "../constants/projects"


const Projects = () => {
  return (
    <>
      <CategorySection 
        title={"Portfolio"} 
        projects={projectsObj.portfolio}
      />
    </>
  )
}

export default Projects