
import "./SkillPage.css";

const Skills = ({ skills }) => {
    return (
        <article className="skill-card">

            <div className="skill-icon-wrapper">
                <img
                    src={skills.img_src}
                    className="skill-img"
                    alt={skills.title}
                    loading="lazy"
                />
            </div>

            <h5 className="skill-title">
                {skills.title}
            </h5>

        </article>
    );
};

export default Skills;
