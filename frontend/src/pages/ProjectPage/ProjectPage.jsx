import ProjectCard from './ProjectCard';
// import './HomePage.css'
import { projects } from '../../data/projects';



export default function ProjectPage() {
    return (
        <>
            
        <div className="container">
                    {
                        projects.map((projects, index) => (
                            <ProjectCard projects={projects} />
                        ))
                    }
                
            </div>
                




        </>
    )
}