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
      <div className="contact-container">

        <div className="contact-content">

          {/* LEFT SIDE */}
          <div className="contact-info-section">

            <h2 className="contact-title">
              Let's Work Together
            </h2>

            <p className="contact-subtitle">
              I'm a passionate fresher looking for opportunities to start my
              career in full stack development. Open to roles, internships, and
              collaborations.
            </p>

            <div className="contact-info">

              <p>
                📞 <span>+91 9741738681</span>
              </p>

              <p>
                📧{" "}
                <a href="mailto:ckgowda9741@gmail.com">
                  ckgowda9741@gmail.com
                </a>
              </p>

              <p>
                📍 <span>Bengaluru, India</span>
              </p>

            </div>

          </div>


          {/* RIGHT SIDE */}
          <div className="contact-form-section">

            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >

              <div className="form-group">

                <label htmlFor="name">
                  Your Name
                </label>

                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />

              </div>


              <div className="form-group">

                <label htmlFor="email">
                  Email Address
                </label>

                <input
                  type="email"
                  id="email"
                  placeholder="name@example.com"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />

              </div>


              <div className="form-group">

                <label htmlFor="message">
                  Message
                </label>

                <textarea
                  id="message"
                  rows="5"
                  placeholder="Write your message..."
                  required
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>

              </div>


              <button
                type="submit"
                className="send-button"
              >
                Send Message
              </button>


              {status && (
                <p className="form-status">
                  {status}
                </p>
              )}

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}