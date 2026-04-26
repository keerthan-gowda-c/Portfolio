import './About.css';

export default function About() {
    return (
        <section className="about-section py-5">
            <div className="container">

                <div className="row align-items-center">

                    {/* LEFT SIDE */}
                    <div className="col-lg-6 mb-4 mb-lg-0">
                        <h2 className="section-title">About Me</h2>

                        <p className="about-text">
                            My name is <b>Keerthan Gowda C</b>, and I hold a Bachelor’s degree in Computer Applications (BCA).
                            I’m passionate about technology, problem-solving, and building practical digital solutions.
                        </p>

                        <p className="about-text">
                            I completed a <b>Python Full Stack Development</b> course, gaining hands-on experience in
                            front-end, back-end, and databases.
                        </p>

                        <h4 className="role mt-4">Python Full Stack Developer</h4>

                        <p className="about-subtext">
                            Skilled in Python, Django/Flask, JavaScript, HTML, CSS, MySQL, and MongoDB —
                            building scalable and user-friendly applications.
                        </p>

                        <a 
                            href="https://drive.google.com/file/d/1QlAuEWpxkAVpRWDPJwZObyunV-Dmz8qN/view?usp=sharing" 
                            className="btn btn-primary mt-3"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Download Resume
                        </a>
                    </div>

                    {/* RIGHT SIDE (BIO CARD) */}
                    <div className="col-lg-6">
                        <div className="bio-card">
                            <div className="row">
                                <div className="col-6">
                                    <p><span>Name:</span> Keerthan Gowda C</p>
                                    <p><span>DOB:</span> 28 Nov 2004</p>
                                    <p><span>City:</span> Bangalore</p>
                                </div>

                                <div className="col-6">
                                    <p><span>Degree:</span> BCA</p>
                                    <p><span>Phone:</span> +91 9741738681</p>
                                    <p><span>Email:</span> ckgowda9741@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}