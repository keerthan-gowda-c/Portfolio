// Footer.jsx
import React from "react";
import "./footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <h3 className="footer-logo">Keerthan Gowda C</h3>
                <p className="footer-text">
                    Building modern full-stack web experiences with Django 🚀
                </p>

                <div className="footer-links">
                    <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a> 
                    <a href="https://linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
                    <a href="mailto:yourmail@gmail.com">
                        Email
                    </a>
                </div>

                <p className="footer-copy">
                    © {new Date().getFullYear()} Keerthan Gowda C. All rights reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;