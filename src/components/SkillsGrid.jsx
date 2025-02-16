import '../styles/skills-grid.css'
import skills from '../assets/skillsInfo.js'

export default function SkillsGrid(){
    return(
        <div className='skills-grid-container'> {/* Fixed typo */}
            {skills.map((skill, i) => (
                <div key={i} className="skill"> {/* Moved key here */}
                    <img className='skill-image' src={skill.src}></img>
                </div>
            ))}
        </div>
    )
}
