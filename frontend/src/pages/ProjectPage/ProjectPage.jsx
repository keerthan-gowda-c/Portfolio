
import ProjectCard from "./ProjectCard";
import { projects_list } from "../../data/projects";
import "./ProjectPage.css";

export default function ProjectPage() {
    return (
        <section className="project-section">

            <div className="project-container">

                <div className="project-heading">

                    <div>
                        <span className="section-eyebrow">
                            MY DEVELOPMENT WORK
                        </span>

                        <h2 className="section-title">
                            Featured Projects<span>.</span>
                        </h2>

                        <p className="project-subtitle">
                            A selection of applications and practical
                            projects I've developed using modern technologies.
                        </p>
                    </div>

                    <a
                        href="https://github.com/keerthan-gowda-c"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="github-profile-link"
                    >
                        <i className="bi bi-github"></i>
                        GitHub Profile
                        <i className="bi bi-arrow-up-right"></i>
                    </a>

                </div>

                <div className="project-list">

                    {projects_list.map((project, index) => (
                        <ProjectCard
                            key={project.title || index}
                            projects={project}
                            index={index}
                        />
                    ))}

                </div>

            </div>

        </section>
    );
}
