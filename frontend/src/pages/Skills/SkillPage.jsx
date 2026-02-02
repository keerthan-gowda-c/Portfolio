import Skills from "./Skills";
import { skills_data } from "./skillsData";
import './Skills.css'



export default function SkillPage() {
    return (
        <>
            <section className="parent-section">

                <div>
                    <section className="skill-section row row-cols-3 row-cols-md-4 g-4">
                    {
                        skills_data.map((skills, index) => (
                            <Skills skills={skills} />
                        ))
                    }
 </section>
                </div>
            </section>
           

        </>
    )
}