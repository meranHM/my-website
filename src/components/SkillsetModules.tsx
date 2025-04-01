import { skills } from "../constants"
import SkillCard from "./SkillCard"


const SkillsetModules = () => {
  return (
    <div className="z-[999] ">
        <h2 className="text-2xl md:text-3xl font-bold text-color-neonGreen mb-6 text-center">💾 Skillset Modules</h2>
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