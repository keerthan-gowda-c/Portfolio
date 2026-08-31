import "./HomePage.css";
import { NavLink } from "react-router-dom";

function HomePage() {
  return (
    <section className="hero-section">
      <div className="hero-container">

        {/* Image */}
        <div className="hero-image">
          <img
            src="images/profile_pic.png"
            className="profile-img"
            alt="Keerthan Gowda"
          />
        </div>

        {/* Text */}
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm
            <br />
            <span className="name">Keerthan Gowda C</span>
          </h1>

          <p className="hero-subtitle">
            Full-Stack Developer
          </p>

          <div className="hero-buttons">
            <NavLink to="/Projects" className="project-btn">
              View Projects
            </NavLink>

            <NavLink to="/Contact" className="contact-btn">
              Contact Me
            </NavLink>
          </div>
        </div>

      </div>
    </section>
  );
}

export default HomePage;