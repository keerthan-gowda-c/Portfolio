import ProjectCard from './ProjectCard';
// import './HomePage.css'
import { projects_list } from '../../data/projects';
import './ProjectPage.css'



export default function ProjectPage() {
    return (
        <>
         
<section>
 <div className="row row-cols-3 row-cols-md-1 first g-4">
                    {
                        projects_list.map((projects, index) => (
                            <ProjectCard projects={projects} />
                        ))
                    }
                
            </div>
</section>
             
        
      
                




        </>
    )
}