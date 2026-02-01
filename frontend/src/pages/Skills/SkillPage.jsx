import Skills from "./Skills";
import { skills_data } from "./skillsData";
import './Skills.css'



export default function SkillPage() {
    return (
        <>
            <section>
                <div class="row row-cols-3 row-cols-md-2 first g-4">
                    {
                        skills_data.map((skills, index) => (
                            <Skills skills={skills} />
                        ))
                    }

                </div>
            </section>

        </>
    )
}