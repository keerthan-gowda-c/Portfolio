
import Skills from "./Skills";
import { skills_data } from "../../data/skillsData";
import "./SkillPage.css";

export default function SkillPage() {
    return (
        <section className="skills-section">

            <div className="skills-container">

                <div className="skills-heading">

                    <div>
                        <span className="section-eyebrow">
                            WHAT I WORK WITH
                        </span>

                        <h2 className="section-title">
                            Technical Skills<span>.</span>
                        </h2>

                        <p className="skills-subtitle">
                            Technologies and tools I use to build
                            backend services and modern web applications.
                        </p>
                    </div>

                    <div className="skills-heading-icon">
                        <i className="bi bi-code-square"></i>
                    </div>

                </div>

                <div className="skills-grid">

                    {skills_data.map((skill, index) => (
                        <Skills
                            key={skill.title || index}
                            skills={skill}
                        />
                    ))}

                </div>

            </div>

        </section>
    );
}
