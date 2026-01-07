import ProjectCard from './ProjectCard';
// import './HomePage.css'
import { projects_list } from '../../data/projects';



export default function ProjectPage() {
    return (
        <>
            
        <div className="container">
                    {
                        projects_list.map((projects, index) => (
                            <ProjectCard projects={projects} />
                        ))
                    }
                
            </div>
                




        </>
    )
}