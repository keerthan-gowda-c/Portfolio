
import './About.css';

export default function About() {
    return (
        <section className="about-section">

            <div className="about-container">

                {/* Section Heading */}
                <div className="about-heading">
                    <span className="section-eyebrow">GET TO KNOW ME</span>
                    <h2 className="section-title">
                        About <span>Me.</span>
                    </h2>
                    <p className="about-heading-text">
                        A little about my background, experience and what I build.
                    </p>
                </div>

                <div className="about-content">

                    {/* Professional Introduction */}
                    <div className="about-info">

                        <h3 className="about-intro-title">
                            Turning ideas into practical software solutions.
                        </h3>

                        <p className="about-text">
                            I'm <strong>Keerthan Gowda C</strong>, a Computer
                            Applications graduate with a strong interest in
                            software development, backend engineering and
                            building useful digital products.
                        </p>

                        <p className="about-text">
                            I have completed Python Full Stack Development
                            training and worked with Python, Django, FastAPI,
                            JavaScript, React and relational databases through
                            hands-on projects.
                        </p>

                        <div className="about-current-role">

                            <div className="role-icon">
                                <i className="bi bi-briefcase"></i>
                            </div>

                            <div>
                                <span className="role-label">CURRENT POSITION</span>
                                <h4>Junior Software Intern</h4>
                                <p>Chervic Advisory Services</p>
                            </div>

                        </div>

                        <p className="about-subtext">
                            Currently contributing to responsive frontend
                            development using React, JavaScript, HTML and CSS.
                            My primary career interest is Python backend
                            development, particularly REST APIs and
                            full-stack applications.
                        </p>

                        <a
                            href="/Resume/Python_full_stack.pdf"
                            className="resume-btn"
                            download="Python_full_stack.pdf"
                        >
                            <i className="bi bi-download"></i>
                            Download Resume
                        </a>

                    </div>

                    {/* Professional Information */}
                    <div className="about-bio">

                        <div className="bio-card">

                            <div className="bio-card-heading">
                                <div>
                                    <span className="section-eyebrow">
                                        PROFILE DETAILS
                                    </span>
                                    <h3>Personal Overview</h3>
                                </div>

                                <i className="bi bi-person-vcard"></i>
                            </div>

                            <div className="bio-grid">

                                <div className="bio-item">
                                    <span className="bio-label">FULL NAME</span>
                                    <p>Keerthan Gowda C</p>
                                </div>

                                <div className="bio-item">
                                    <span className="bio-label">DEGREE</span>
                                    <p>Bachelor of Computer Applications</p>
                                </div>

                                <div className="bio-item">
                                    <span className="bio-label">LOCATION</span>
                                    <p>Bengaluru, India</p>
                                </div>

                                <div className="bio-item">
                                    <span className="bio-label">SPECIALIZATION</span>
                                    <p>Python Backend Development</p>
                                </div>

                                <div className="bio-item bio-item-full">
                                    <span className="bio-label">EMAIL ADDRESS</span>
                                    <a href="mailto:ckgowda9741@gmail.com">
                                        ckgowda9741@gmail.com
                                        <i className="bi bi-arrow-up-right"></i>
                                    </a>
                                </div>

                                <div className="bio-item bio-item-full">
                                    <span className="bio-label">PHONE</span>
                                    <a href="tel:+919741738681">
                                        +91 9741738681
                                        <i className="bi bi-arrow-up-right"></i>
                                    </a>
                                </div>

                            </div>

                        </div>

                        <div className="about-focus-card">
                            <i className="bi bi-code-square"></i>

                            <div>
                                <h4>My Development Focus</h4>
                                <p>
                                    Python · Django · FastAPI · REST APIs ·
                                    React · SQL
                                </p>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}
