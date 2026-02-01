import './Skills.css';
const Skills = ({skills}) => {
    return(
        <>
        <div className='container'>
        <label>{skills.title}</label>
         <div className="progress" role="progressbar" aria-label={skills.title} aria-valuenow={skills.value} aria-valuemin="0" aria-valuemax="100">
                <div className="progress-bar">{skills.value}</div>
            </div>
        </div>
       
        </>
    )
}

export default Skills;