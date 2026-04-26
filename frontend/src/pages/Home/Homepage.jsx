import './HomePage.css';

function HomePage() {
    return (
        <section className="hero-section d-flex align-items-center">
            <div className="container">
                <div className="row align-items-center">

                    {/* Image */}
                    <div className="col-lg-5 text-center mb-4 mb-lg-0">
                        <img 
                            src="images/ckg2.jpeg" 
                            className="img-fluid profile-img" 
                            alt="Keerthan Gowda"
                        />
                    </div>

                    {/* Text */}
                    <div className="col-lg-7 text-center text-lg-start">
                        <h1 className="hero-title">
                            Hi, I'm <br />
                            <span className="name">Keerthan Gowda C</span>
                        </h1>

                        <p className="hero-subtitle">
                            Developer & Designer crafting modern digital experiences.
                        </p>

                        <div className="mt-4">
                            <button className="btn btn-primary btn-lg me-3">
                                View Projects
                            </button>
                            <button className="btn btn-outline-light btn-lg">
                                Contact Me
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default HomePage;