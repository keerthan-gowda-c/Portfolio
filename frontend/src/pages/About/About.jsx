import './About.css';

export default function About() {
    return (
        <section className="about-section">
            <div className="about-container">

                <div className="about-content">

                    {/* LEFT SIDE */}
                    <div className="about-info">

                        <h2 className="section-title">
                            About Me
                        </h2>

                        <p className="about-text">
                            My name is <b>Keerthan Gowda C</b>, and I hold a Bachelor’s degree in Computer Applications (BCA).
                            I’m passionate about software development, problem-solving, and building practical digital solutions.
                        </p>

                        <p className="about-text">
                            I have completed a <b>Python Full Stack Development</b> course and gained hands-on experience
                            working with Python, Django, FastAPI, JavaScript, React.js, and databases.
                        </p>

                        <h4 className="role">
                            Junior Software Intern
                        </h4>

                        <p className="about-subtext">
                            Currently working as a Junior Software Intern, contributing to responsive web interfaces
                            using React.js, JavaScript, HTML, and CSS. I’m particularly interested in backend development
                            and building full-stack applications using Python, Django, FastAPI, and PostgreSQL.
                        </p>


                        <a
                            href="/Resume/Python_full_stack.pdf"
                            className="resume-btn"
                            download="Python_full_stack.pdf"
                        >
                            Download Resume
                        </a>

                    </div>


                    {/* RIGHT SIDE */}
                    <div className="about-bio">

                        <div className="bio-card">

                            <div className="bio-grid">

                                <div className="bio-column">

                                    <p>
                                        <span>Name:</span>
                                        Keerthan Gowda C
                                    </p>

                                    <p>
                                        <span>DOB:</span>
                                        28 Nov 2004
                                    </p>

                                    <p>
                                        <span>City:</span>
                                        Bangalore
                                    </p>

                                </div>


                                <div className="bio-column">

                                    <p>
                                        <span>Degree:</span>
                                        BCA
                                    </p>

                                    <p>
                                        <span>Phone:</span>
                                        +91 9741738681
                                    </p>

                                    <p>
                                        <span>Email:</span>
                                        <a href="mailto:ckgowda9741@gmail.com">
                                            ckgowda9741@gmail.com
                                        </a>
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}