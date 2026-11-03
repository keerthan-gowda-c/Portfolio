
import "./WorkExperience.css";

export default function ExperienceCard({ experiences }) {
    const responsibilities = experiences.responsibilities || [];

    //  const responsibilities = experiences.responsibilities?.[0]
    //     ? Object.values(experiences.responsibilities[0])
    //     : [];
    return (
        <article className="experience-card">

            <div className="experience-header">

                <div className="experience-company-icon">
                    <i className="bi bi-building"></i>
                </div>

                <div className="experience-main-info">

                    <div className="experience-role-row">

                        <div>
                            <h3 className="role-name">
                                {experiences.role}
                            </h3>

                            <p className="experience-company">
                                {experiences.company_name}
                            </p>
                        </div>

                        {experiences.currently_working && (
                            <span className="experience-status">
                                <span className="status-dot"></span>
                                Present
                            </span>
                        )}

                    </div>

                    <div className="experience-duration">
                        <i className="bi bi-calendar3"></i>

                        {experiences.from_date} – {
                            experiences.currently_working
                                ? "Present"
                                : experiences.end_date
                        }
                    </div>

                </div>

            </div>

            <div className="experience-responsibility">

                <h4 className="responsibility-header">
                    Key Responsibilities
                </h4>

                <ul>
                    {responsibilities.map((value, index) => (
                        <li key={index}>{value}</li>
                    ))}
                </ul>

            </div>

        </article>
    );
}
