import "./ContactPage.css";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("https://formspree.io/f/mlgzpanb", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        setStatus("Failed to send message.");
      }
    } catch (error) {
      setStatus("Something went wrong.");
    }
  };

  return (
    <section className="contact-section">
      <div className="container">
        <div className="row align-items-center">

          {/* LEFT SIDE */}
          <div className="col-lg-5 mb-5 mb-lg-0 text-center text-lg-start">
            <h2 className="contact-title">Let's Work Together</h2>

            <p className="contact-subtitle">
              I'm a passionate fresher looking for opportunities to start my
              career in full stack development. Open to roles, internships, and
              collaborations.
            </p>

            <div className="contact-info mt-4">
              <p>📞 +91 9741738681</p>
              <p>📧 ckgowda9741@gmail.com</p>
              <p>📍 Bengaluru, India</p>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="col-lg-7">
            <form className="contact-form" onSubmit={handleSubmit}>

              <div className="mb-3">
                <label htmlFor="name" className="form-label">Your Name</label>
                <input type="text" className="form-control" id="name" placeholder="Enter your name" required value={formData.name} onChange={handleChange} />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" placeholder="name@example.com" required value={formData.email} onChange={handleChange} />
              </div>

              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea className="form-control" id="message" rows="4" placeholder="Write your message..." required value={formData.message} onChange={handleChange}></textarea>
              </div>

              <button type="submit" className="btn btn-primary w-100">
                Send Message
              </button>

              {status && <p className="mt-3 text-center">{status}</p>}
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}