
import './header.css';

export default function Header({
    lightMode,
    toggleTheme,
    navigateTo
}) {
    return (
        <header className="top-header">

            <div className="top-header-inner">

                <button
                    className="header-brand"
                    onClick={() => navigateTo('home')}
                >
                    Keerthan<span>.</span>
                </button>

                <div className="header-actions">

                    <button
                        className="header-theme"
                        onClick={toggleTheme}
                        aria-label="Toggle theme"
                        title={lightMode ? 'Switch to dark mode' : 'Switch to light mode'}
                    >
                        <i className={`bi ${lightMode ? 'bi-moon-stars' : 'bi-sun'}`}></i>
                    </button>

                    <button
                        className="hire-button"
                        // onClick={() => navigateTo('contact')}

                    >
                        <a href="mailto:ckgowda9741@gmail.com">Hire Me</a>
                        <i className="bi bi-arrow-up-right"></i>
                    </button>

                </div>

            </div>

        </header>
    );
}
