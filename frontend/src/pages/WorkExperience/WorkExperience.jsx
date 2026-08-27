import ExperienceCard from "./ExperienceCard";
import "./WorkExperience.css";
import { experience } from "../../data/workExperice";

export default function WorkExperience() {
    return (
        <>
            <section className="experience-section">
                <div className="header">
                    <h2>
                        Work Experience
                    </h2>
                </div>

                <div className="card-container">
                    {
                        experience.map((experiences, index) => (
                            <div key={index}>
                                <ExperienceCard experiences={experiences} />
                            </div>
                        ))

                    }
                </div>
            </section>
        </>
    )
}