import './ProjectPage.css';

export default function ProjectCard({ projects }) {
    return (
        <div className="project-card">
            <img 
                src={projects.thumbnail} 
                alt={projects.title} 
                className="project-img"
            />

            <div className="project-content">
                <h5>{projects.title}</h5>
                <p>{projects.description}</p>

                <div className="project-links">
                    <a href={projects.link} target="_blank" rel="noreferrer">
                        Live
                    </a>
                    <a href={projects.github} target="_blank" rel="noreferrer">
                        Code
                    </a>
                </div>
            </div>
        </div>
    );
}