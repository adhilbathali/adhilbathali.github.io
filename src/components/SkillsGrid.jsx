import '../styles/skills-grid.css'
import skills from '../assets/skillsInfo.js'

export default function SkillsGrid(){
    return(
        <div className='skills-grid-container'> {/* Fixed typo */}
            {skills.map((skill, i) => (
                <a href={skill.url} target='blank' div key={i} className="skill">
                    <img className='skill-image' src={skill.src}></img>
                </a>
            ))}
        </div>
    )
}
