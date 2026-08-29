import "./WorkExperience.css";

export default function ExperienceCard({ experiences }) {
    return (
        <div className="experience-card">

            <div className="experience-header">

                <div className="experience-role">

                    <div className="left-header">

                        <span className="office-logo">
                            🏢
                        </span>

                        <h5 className="role-name">
                            {experiences.role}

                            <span className="experience-company">
                                {experiences.company_name}
                            </span>
                        </h5>

                        <div className="dot"></div>

                    </div>

                    <div className="right-header">

                        <div className="experience-duration">

                            <span>
                                {experiences.from_date}
                            </span>

                            <span className="duration-separator">
                                -
                            </span>

                            <span>
                                Present
                            </span>

                        </div>

                    </div>

                </div>

            </div>

            <div className="experience-responsibility">

                <h6 className="responsibility-header">
                    Responsibilities
                </h6>

                <ul>
                    {Object.values(
                        experiences.responsibilities[0]
                    ).map((value, index) => (
                        <li key={index}>
                            {value}
                        </li>
                    ))}
                </ul>

            </div>

        </div>
    );
}