import ProjectCard from './ProjectCard';
import { projects_list } from '../../data/projects';
import './ProjectPage.css';

export default function ProjectPage() {
    return (
        <section className="project-section">

            <div className="project-container">

                <h2 className="section-title">
                    My Projects
                </h2>

                <div className="project-grid">
                    {
                        projects_list.map((projects, index) => (
                            <div className="project-item" key={index}>
                                <ProjectCard projects={projects} />
                            </div>
                        ))
                    }
                </div>

            </div>

        </section>
    );
}