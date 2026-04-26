import ProjectCard from './ProjectCard';
import { projects_list } from '../../data/projects';
import './ProjectPage.css';

export default function ProjectPage() {
    return (
        <section className="project-section container py-5">

            <h2 className="section-title text-center mb-5">
                My Projects
            </h2>

            <div className="row g-4">
                {
                    projects_list.map((projects, index) => (
                        <div className="col-12 col-md-6 col-lg-4" key={index}>
                            <ProjectCard projects={projects} />
                        </div>
                    ))
                }
            </div>

        </section>
    )
}