import './header.css';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

export default function Header({ lightMode, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navigation">
      <div className="navbar-container">

        {/* Logo */}
        <NavLink to="/" className="navbar-brand" onClick={closeMenu}>
          <h5>
            Keerthan
          </h5>
        </NavLink>

       

        {/* Hamburger */}
        <button
          className={`menu-toggle ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Navigation Links */}
        <div className={`navbar-menu ${menuOpen ? 'open' : ''}`}>
          <ul>
            <li>
               <div className="theme-toggle-wrapper">
    <button
        className={`theme-toggle ${lightMode ? "light" : "dark"}`}
        onClick={toggleTheme}
        aria-label="Toggle Theme"
    >
        <span className="toggle-icon">
            {lightMode ? "☀️" : "🌙"}
        </span>
    </button>
</div>
            </li>

            <li>
              <NavLink to="/" end onClick={closeMenu}>
                Home
              </NavLink>
            </li>

            <li>
              <NavLink to="/About" onClick={closeMenu}>
                About
              </NavLink>
            </li>

            <li>
              <NavLink to="/Skills" onClick={closeMenu}>
                Skills
              </NavLink>
            </li>

            <li>
              <NavLink to="/Work-Experience" onClick={closeMenu}>
                Experience
              </NavLink>
            </li>

            <li>
              <NavLink to="/Projects" onClick={closeMenu}>
                Projects
              </NavLink>
            </li>

            <li>
              <NavLink to="/Contact" onClick={closeMenu}>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  );
}