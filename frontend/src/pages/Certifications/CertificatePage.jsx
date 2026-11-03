
import { certificates_list } from "../../data/certificates";
import CertificateCard from "./CertificateCard";
import "./CertificatePage.css";

export default function CertificatePage() {
    return (
        <section className="certificates-section">

            <div className="certificates-container">

                <div className="certificates-heading">

                    <div>
                        <span className="section-eyebrow">
                            LEARNING & DEVELOPMENT
                        </span>

                        <h2 className="section-title">
                            Certifications<span>.</span>
                        </h2>

                        <p className="certificates-subtitle">
                            Professional training and certifications
                            supporting my development journey.
                        </p>
                    </div>

                    <div className="certificate-count">
                        <i className="bi bi-award"></i>
                        <span>{certificates_list.length} Credentials</span>
                    </div>

                </div>

                <div className="certificates-grid">

                    {certificates_list.map((certificate, index) => (
                        <CertificateCard
                            key={certificate.title || index}
                            certificates={certificate}
                        />
                    ))}

                </div>

            </div>

        </section>
    );
}
