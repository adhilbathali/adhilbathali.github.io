import '../styles/skills-grid.css'
import skills from '../assets/skills.json'

export default function SkillsGrid(){
    return(
        <div className='skills-gird-container'>
            {skills.map((skill, i)=>(<h2 key={i}>{skill.name}</h2>))}
        </div>
    )
}