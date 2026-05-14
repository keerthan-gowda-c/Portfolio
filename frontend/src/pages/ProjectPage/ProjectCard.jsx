import './ProjectPage.css';

export default function ProjectCard({ projects }) {
    return (
        <div className="project-card">
            <div className="project-content">
                <h5>{projects.title}</h5>
                <p>{projects.description}</p>

                <div className="project-links">
                    
                    <a href={projects.github_link} target="_blank" rel="noreferrer">
                        Code
                    </a>
                </div>
            </div>
        </div>
    );
}