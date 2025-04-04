import CategorySection from "../components/projects/CategorySection"
import { projectsObj } from "../constants/projects"


const Projects = () => {
  return (
    <>
      <CategorySection 
        title={"Portfolio"} 
        projects={projectsObj.portfolio}
      />
      <CategorySection 
        title={"SaaS"} 
        projects={projectsObj.saas}
      />
      <CategorySection 
        title={"E-commerce"} 
        projects={projectsObj.ecommerce}
      />
      <CategorySection 
        title={"Dashboard"} 
        projects={projectsObj.dashboards}
      />
      <CategorySection 
        title={"Web Apps"} 
        projects={projectsObj.webapps}
      />
      <CategorySection 
        title={"Landing Pages"} 
        projects={projectsObj.landings}
      />
      <CategorySection 
        title={"Fun and Experimental"} 
        projects={projectsObj.fun}
      />
    </>
  )
}

export default Projects