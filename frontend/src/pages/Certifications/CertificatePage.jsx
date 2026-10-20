import { certificates_list } from "../../data/certificates";
import CertificateCard from "./CertificateCard";
import "./CertificatePage.css"

export default function CertificatePage(){
    return(
         <section className="parent-section">

            <div className="certificates-container">

                <h1 className="section-title">
                    Certificates
                </h1>

                <div className="certificates-grid">
                    {certificates_list.map((certificates, index) => (
                            <div className="certificate-item" key={index}>
                                <CertificateCard certificates={certificates} />
                            </div>
                        ))
                    }
                </div>

            </div>

        </section>
    )
}