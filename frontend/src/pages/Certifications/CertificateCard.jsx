
import "./CertificatePage.css";

export default function CertificateCard({ certificates }) {
    return (
        <article className="certificate-card">

            <div className="certificate-image-wrapper">
                <img
                    src={certificates.img_src}
                    className="certificate-img"
                    alt={`${certificates.title} certificate`}
                    loading="lazy"
                />

                <span className="certificate-verified">
                    <i className="bi bi-patch-check-fill"></i>
                    Certificate
                </span>
            </div>

            <div className="certificate-details">

                <h5 className="certificate-title">
                    {certificates.title}
                </h5>

                <div className="certificate-meta">

                    <p className="certificate-publisher">
                        <i className="bi bi-building"></i>
                        {certificates.publisher}
                    </p>

                    <p className="certificate-date">
                        <i className="bi bi-calendar3"></i>
                        {certificates.date}
                    </p>

                </div>

            </div>

        </article>
    );
}
