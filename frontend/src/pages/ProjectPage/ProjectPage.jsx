import ProjectCard from './ProjectCard';
// import './HomePage.css'
import { projects_list } from '../../data/projects';
import './ProjectPage.css'



export default function ProjectPage() {
    return (
        <>
         
<section className='parent-projectPage'>
 <div >
    <section className="project-section row row-cols-3 row-cols-md-4 first g-4">

                    {
                        projects_list.map((projects, index) => (
                            <ProjectCard projects={projects} />
                        ))
                    }
    </section>
                
            </div>
</section>
             
        
      
                




        </>
    )
}