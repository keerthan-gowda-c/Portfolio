import './Skills.css';

const Skills = ({ skills }) => {
    return (
        <div className="skill-card">
            <img 
                src={skills.img_src} 
                className="skill-img" 
                alt={skills.title} 
            />
            <h5 className="skill-title">{skills.title}</h5>
        </div>
    );
}

export default Skills;