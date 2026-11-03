
import "./HomePage.css";

function HomePage({ navigateTo }) {
    return (
        <section className="hero-section">

            <div className="hero-container">

                {/* Hero Content */}
                <div className="hero-content">

                    <div className="hero-intro">
                        <span className="intro-line"></span>
                        <span>PYTHON DEVELOPER & FULL-STACK DEVELOPER</span>
                    </div>

                    <h1 className="hero-title">
                        Building
                        <span className="hero-highlight"> meaningful </span>
                        digital experiences.
                    </h1>

                    <p className="hero-subtitle">
                        Hi, I'm <strong>Keerthan Gowda C</strong>, a software
                        developer focused on building backend systems,
                        REST APIs and modern web applications using Python
                        and React.
                    </p>

                    <p className="hero-role">
                        <i className="bi bi-briefcase"></i>
                        Junior Software Intern at Chervic Advisory Services
                    </p>

                    <div className="hero-tech-stack">
                        <span>Python</span>
                        <span>Django</span>
                        <span>FastAPI</span>
                        <span>React</span>
                        <span>SQL</span>
                    </div>

                    <div className="hero-buttons">

                        <button
                            type="button"
                            className="hero-primary-btn"
                            onClick={() => navigateTo('projects')}
                        >
                            Explore Projects
                            <i className="bi bi-arrow-up-right"></i>
                        </button>

                        <button
                            type="button"
                            className="hero-secondary-btn"
                            onClick={() => navigateTo('contact')}
                        >
                            Let's Connect
                            <i className="bi bi-arrow-right"></i>
                        </button>

                    </div>

                    <div className="hero-social-links">

                        <a
                            href="https://github.com/keerthan-gowda-c"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                        >
                            <i className="bi bi-github"></i>
                        </a>

                        <a
                            href="https://www.linkedin.com/in/keerthan-gowda-c/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                        >
                            <i className="bi bi-linkedin"></i>
                        </a>

                        <a
                            href="mailto:ckgowda9741@gmail.com"
                            aria-label="Email"
                        >
                            <i className="bi bi-envelope"></i>
                        </a>

                    </div>

                </div>

                {/* Profile Image */}
                <div className="hero-visual">

                    <div className="hero-image-glow"></div>

                    <div className="hero-image-frame">

                        <img
                            src="/images/profile_pic.png"
                            className="profile-img"
                            alt="Portrait of Keerthan Gowda C"
                        />

                    </div>

                    <div className="hero-image-caption">
                        <span className="caption-dot"></span>
                        <span>Developer · Problem Solver</span>
                    </div>

                    <div className="hero-decoration hero-decoration-one"></div>
                    <div className="hero-decoration hero-decoration-two"></div>

                </div>

            </div>

        </section>
    );
}

export default HomePage;
