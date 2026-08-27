import "./WorkExperience.css"

export default function ExperienceCard({ experiences }) {
    return (
        <>

        <div className="experience-card card">
                        <div className="card-body">



                            <div className="experience-header">
                                <div className="experience-role">
                                    <span className="office-logo"><i className="bi bi-building"></i></span>
                                    <h5 className="role-name">
                                        {experiences.role}
                                        <span className="experience-company">{experiences.company_name}</span></h5>
                                        <div className="dot"></div>
                                </div>
                                <div className="experience-duration">
                                <span>{experiences.from_date}</span>
                                <span className="duration-separator">- Present</span>
                               
                            </div>
                            </div>

                            <div className="experience-responsibility">
                                <h6>Responsibilities</h6>

                                <ul>
                                    {Object.values(experiences.responsibilities[0]).map((value, index) => (
                                        <li key={index}>{value}</li>
                                    ))}
                                </ul>
                            </div>

                        </div>
                    </div>


            {/* <div >
                {experiences.currently_working === "True" ? (

                    <div className="present-experience-card card">
                        <div className="card-body experience-content">

                            <div className="present-experience-header">
                                <div className="present-experience-role">
                                    <span className="office-logo"><i className="bi bi-building"></i></span>
                                    <h5 className="present-role-name">
                                        {experiences.role}</h5>
                                </div>
                                <div className="current-status">
                                    <p className="present-experience-company">{experiences.company_name}</p>
                                    <div className="present-dot"></div>
                                </div>

                            </div>

                            <div className="present-experience-duration">
                                <span>{experiences.from_date}</span>
                                <span className="duration-separator">- Present</span>
                               
                            </div>

                            <div className="present-experience-responsibility">
                                <h6>Responsibilities</h6>

                                <ul>
                                    {Object.values(experiences.responsibilities[0]).map((value, index) => (
                                        <li key={index}>{value}</li>
                                    ))}
                                </ul>
                            </div>

                        </div>
                    </div>
                ) : (
                    <div className="past-experience-card card">
                        <div className="card-body experience-content">

                            <div className="past-experience-header">
                                <div className="past-experience-role">
                                    <span className="office-logo"><i className="bi bi-building"></i></span>
                                    <h5 className="past-role-name">
                                        {experiences.role}</h5>
                                </div>
                                <div className="current-status">
                                    <p className="past-experience-company">{experiences.company_name}</p>
                                    <div className="past-dot"></div>
                                </div>

                            </div>

                            <div className="past-experience-duration">
                                <span>{experiences.from_date}</span>
                                <span className="duration-separator">-</span>
                                        <span>{experiences.end_date}</span>
                                
                            </div>

                            <div className="past-experience-responsibility">
                                <h6>Responsibilities</h6>

                                <ul>
                                    {Object.values(experiences.responsibilities[0]).map((value, index) => (
                                        <li key={index}>{value}</li>
                                    ))}
                                </ul>
                            </div>

                        </div>
                    </div>
                )}
            </div> */}
        </>
    )
}