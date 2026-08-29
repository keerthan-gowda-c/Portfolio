import Skills from "./Skills";
import { skills_data } from "../../data/skillsData";
import "./SkillPage.css";

export default function SkillPage() {
    return (
        <section className="parent-section">

            <div className="skills-container">

                <h1 className="section-title">
                    Tech Stack
                </h1>

                <div className="skills-grid">
                    {
                        skills_data.map((skills, index) => (
                            <div className="skill-item" key={index}>
                                <Skills skills={skills} />
                            </div>
                        ))
                    }
                </div>

            </div>

        </section>
    );
}