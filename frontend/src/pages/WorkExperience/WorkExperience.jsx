import ExperienceCard from "./ExperienceCard";
import "./WorkExperience.css";
import { experience } from "../../data/workExperice";

export default function WorkExperience() {
    return (
        <section className="experience-section">
            <div className="experience-container">

                <div className="experience-heading">
                    <div>
                        <span className="section-eyebrow">
                            PROFESSIONAL JOURNEY
                        </span>

                        <h2 className="section-title">
                            Work Experience<span>.</span>
                        </h2>

                        <p className="experience-subtitle">
                            My professional experience and contributions in software development.
                        </p>
                    </div>

                    <div className="experience-heading-icon">
                        <i className="bi bi-briefcase"></i>
                    </div>
                </div>

                <div className="experience-list">
                    {experience.map((experiences) => (
                        <ExperienceCard
                            key={experiences.id}
                            experiences={experiences}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}