import { skills } from "../constants"
import SkillCard from "./SkillCard"


const SkillsetModules = () => {
  return (
    <div className="mt-20 z-[999]">
        <h2 className="text-2xl text-color-neonGreen mb-8">💾 Skillset Modules</h2>
        <div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-4"
        >
            {skills.map((skill, index) => (
                <div key={index}>
                    <h3 className="text-xl text-blue-300 text-center">{skill.category}</h3>
                    <p className="text-sm text-gray-400 text-center">{skill.status}</p>
                    <div className="mt-2 space-y-2 z-[999]">
                        {skill.items.map((skill, i) => (
                            <SkillCard key={i} skill={skill}/>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default SkillsetModules