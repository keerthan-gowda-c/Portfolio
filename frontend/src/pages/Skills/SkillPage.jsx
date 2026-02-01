import Skills from "./Skills";
import { skills_data } from "./skillsData";



export default function SkillPage(){
    return(
        <>
        <div>
                    {
                        skills_data.map((skills, index) => (
                            <Skills skills={skills} />
                        ))
                    }
                
            </div>
        </>
    )
}