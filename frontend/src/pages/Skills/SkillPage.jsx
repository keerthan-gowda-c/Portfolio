import Skills from "./Skills";
import { skills_data } from "./skillsData";
import './SkillPage.css'

export default function SkillPage() {
    return (
        <section className="parent-section container py-5">
            
            <h1 className="section-title text-center mb-5">
                Languages Known
            </h1>

            <div className="row g-4 justify-content-center">
                {
                    skills_data.map((skills, index) => (
                        <div className="col-6 col-md-4 col-lg-3" key={index}>
                            <Skills skills={skills} />
                        </div>
                    ))
                }
            </div>

        </section>
    )
}