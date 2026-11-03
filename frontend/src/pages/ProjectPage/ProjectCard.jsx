
import "./ProjectPage.css";

export default function ProjectCard({ projects, index }) {
    return (
        <article className="project-card">

            <div className="project-number">
                {String(index + 1).padStart(2, "0")}
            </div>

            <div className="project-content">

                <div className="project-card-heading">
                    <span className="project-label">
                        FEATURED PROJECT
                    </span>

                    <h3>{projects.title}</h3>

                    {projects.year && (
                        <span className="project-year">
                            <i className="bi bi-calendar3"></i>
                            {projects.year}
                        </span>
                    )}
                </div>

                <p className="project-description">
                    {projects.description}
                </p>

                {projects.technologies?.length > 0 && (
                    <div className="project-technologies">
                        {projects.technologies.map((technology, techIndex) => (
                            <span key={techIndex}>{technology}</span>
                        ))}
                    </div>
                )}

                <div className="project-links">

                    {projects.github_link && (
                        <a
                            href={projects.github_link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link-primary"
                        >
                            <i className="bi bi-github"></i>
                            View Code
                            <i className="bi bi-arrow-up-right"></i>
                        </a>
                    )}

                    {projects.live && (
                        <a
                            href={projects.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link-secondary"
                        >
                            <i className="bi bi-box-arrow-up-right"></i>
                            Live Preview
                        </a>
                    )}

                </div>

            </div>

            <div className="project-decoration">
                <i className="bi bi-code-slash"></i>
            </div>

        </article>
    );
}
