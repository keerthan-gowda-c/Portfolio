
import {
    backend_skills,
    database_skills,
    frontend_skills
} from "../../data/skillsData";

import "./SkillPage.css";
import SkillCard from "./SkillCard";

const skill_categories = [
    { title: "Frontend", skills: frontend_skills },
    { title: "Databases", skills: database_skills },
    { title: "Backend", skills: backend_skills },
];

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

                <div className="skills-sub-container">
                    {skill_categories.map((category) => (
                        <div
                            className="skill-category"
                            key={category.title}
                        >
                            <div className="skill-category-heading">
                                <h3 className="skill-category-title">
                                    {category.title}
                                </h3>
                                <span className="skill-category-line"></span>
                            </div>

                            <div className="skill-category-grid">
                                {(category.skills).map((skill) => (
                                    <SkillCard key={skill.id} skills={skill} />
                                ))}

                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
