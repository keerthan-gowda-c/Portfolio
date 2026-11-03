
import "./App.css";
import { useEffect, useRef, useState } from "react";

import Header from "./component/Header/header";
import Footer from "./component/Footer/footer";

import HomePage from "./pages/Home/Homepage";
import About from "./pages/About/About";
import SkillPage from "./pages/Skills/SkillPage";
import CertificatePage from "./pages/Certifications/CertificatePage";
import WorkExperience from "./pages/WorkExperience/WorkExperience";
import ProjectPage from "./pages/ProjectPage/ProjectPage";
import ContactPage from "./pages/ContactPage/ContactPage";

const navItems = [
    { name: "Home", id: "home", icon: "bi-house" },
    { name: "About", id: "about", icon: "bi-person" },
    { name: "Skills", id: "skills", icon: "bi-code-slash" },
    { name: "Certificates", id: "certificates", icon: "bi-award" },
    { name: "Experience", id: "experience", icon: "bi-briefcase" },
    { name: "Projects", id: "projects", icon: "bi-folder" },
    { name: "Contact", id: "contact", icon: "bi-envelope" },
];

function getSectionFromPath() {
    const path = window.location.pathname
        .replace(/^\/+|\/+$/g, "")
        .toLowerCase();

    return navItems.some((item) => item.id === path)
        ? path
        : "home";
}

function App() {
    const [lightMode, setLightMode] = useState(
        () => localStorage.getItem("portfolio-theme") === "light"
    );

    const [activeSection, setActiveSection] = useState(
        getSectionFromPath
    );

    const navigationTarget = useRef(null);

    // Save theme preference
    useEffect(() => {
        localStorage.setItem(
            "portfolio-theme",
            lightMode ? "light" : "dark"
        );
    }, [lightMode]);

    const scrollToSection = (sectionId, behavior = "smooth") => {
    const section = document.getElementById(sectionId);

    if (!section) return;

    const headerHeight = window.innerWidth <= 768 ? 64 : 72;

    const sectionTop =
        section.getBoundingClientRect().top + window.scrollY;

    const scrollPosition = sectionTop - headerHeight - 12;

    window.scrollTo({
        top: Math.max(0, scrollPosition),
        behavior,
    });
};

    // Navigate to a section
const navigateTo = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (!section) return;

    navigationTarget.current = sectionId;

    setActiveSection(sectionId);

    window.history.pushState({}, "", `/${sectionId}`);

    scrollToSection(sectionId, "smooth");
};

    // Handle active navigation and URL while scrolling
    useEffect(() => {
        const updateActiveSection = () => {
            const targetId = navigationTarget.current;

            // Keep the clicked navigation item active
            // until its section reaches the top area.
            if (targetId) {
                const target = document.getElementById(targetId);

                if (target && target.getBoundingClientRect().top > 110) {
                    return;
                }

                navigationTarget.current = null;
            }

            const marker = window.innerHeight * 0.45;

            let currentSection = "home";

            navItems.forEach((item) => {
                const section = document.getElementById(item.id);

                if (!section) return;

                const sectionTop =
                    section.getBoundingClientRect().top;

                if (sectionTop <= marker) {
                    currentSection = item.id;
                }
            });

            // Ensure Contact becomes active near the bottom.
            const atBottom =
                window.innerHeight + window.scrollY >=
                document.documentElement.scrollHeight - 5;

            if (atBottom) {
                currentSection = "contact";
            }

            setActiveSection(currentSection);

            const currentPath = `/${currentSection}`;

            if (window.location.pathname !== currentPath) {
                window.history.replaceState({}, "", currentPath);
            }
        };

        window.addEventListener("scroll", updateActiveSection, {
            passive: true,
        });

        window.addEventListener("resize", updateActiveSection);

        updateActiveSection();

        return () => {
            window.removeEventListener("scroll", updateActiveSection);
            window.removeEventListener("resize", updateActiveSection);
        };
    }, []);

    // Handle direct URL loading and browser back/forward
    useEffect(() => {
        const scrollToCurrentPath = () => {
            const sectionId = getSectionFromPath();
            const section = document.getElementById(sectionId);

            if (!section) return;

            navigationTarget.current = null;
            setActiveSection(sectionId);

            scrollToSection(sectionId, "instant");
        };

        requestAnimationFrame(scrollToCurrentPath);

        const handlePopState = () => {
            scrollToCurrentPath();
        };

        window.addEventListener("popstate", handlePopState);

        return () => {
            window.removeEventListener("popstate", handlePopState);
        };
    }, []);

    const toggleTheme = () => {
        setLightMode((prev) => !prev);
    };

    return (
        <div className={`app ${lightMode ? "light-mode" : "dark-mode"}`}>

            <Header
                lightMode={lightMode}
                toggleTheme={toggleTheme}
                navigateTo={navigateTo}
            />

            <aside className="sidebar">
                <div className="sidebar-content">

                    <p className="sidebar-label">MENU</p>

                    <nav
                        className="sidebar-nav"
                        aria-label="Main navigation"
                    >
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                type="button"
                                className={`sidebar-link ${
                                    activeSection === item.id ? "active" : ""
                                }`}
                                onClick={() => navigateTo(item.id)}
                                aria-current={
                                    activeSection === item.id
                                        ? "page"
                                        : undefined
                                }
                                title={item.name}
                            >
                                <i className={`bi ${item.icon}`}></i>
                                <span>{item.name}</span>
                            </button>
                        ))}
                    </nav>

                    <div className="sidebar-bottom">
                        <span className="sidebar-status"></span>
                        <span>Open to opportunities</span>
                    </div>

                </div>
            </aside>

            <main className="main-content">

                <section id="home" className="page-section">
                    <HomePage navigateTo={navigateTo} />
                </section>

                <section id="about" className="page-section">
                    <About />
                </section>

                <section id="skills" className="page-section">
                    <SkillPage />
                </section>

                <section id="certificates" className="page-section">
                    <CertificatePage />
                </section>

                <section id="experience" className="page-section">
                    <WorkExperience />
                </section>

                <section id="projects" className="page-section">
                    <ProjectPage />
                </section>

                <section id="contact" className="page-section">
                    <ContactPage />
                </section>

                <Footer />

            </main>
        </div>
    );
}

export default App;
