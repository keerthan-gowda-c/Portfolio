import "./CertificatePage.css"

export default function CertificateCard({certificates}){
    return(
         <div className="certificate-card">
            <img
                src={certificates.img_src}
                className="certificate-img"
                alt={certificates.title} 
            />

            <h5 className="certificate-title">
                {certificates.title}
            </h5>
            <p className="certificate-date">{certificates.date}</p>
            <p className="certificate-publisher">{certificates.publisher}</p>

        </div>
    )
}