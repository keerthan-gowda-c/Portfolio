
import "./ContactPage.css";
import { useState } from "react";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [status, setStatus] = useState("");
    const [isSending, setIsSending] = useState(false);

    const handleChange = (e) => {
        const { id, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [id]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (isSending) return;

        setIsSending(true);
        setStatus("Sending...");

        try {
            const response = await fetch(
                "https://formspree.io/f/mlgzpanb",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                    body: JSON.stringify(formData),
                }
            );

            if (response.ok) {
                setStatus("Message sent successfully!");

                setFormData({
                    name: "",
                    email: "",
                    message: "",
                });
            } else {
                setStatus("Failed to send message. Please try again.");
            }
        } catch {
            setStatus("Something went wrong. Please try again.");
        } finally {
            setIsSending(false);
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
                            I'm currently working as a Junior Software Intern,
                            gaining practical experience in software development
                            and building responsive web interfaces. I'm focused
                            on growing as a Full Stack Developer, with a strong
                            interest in Python, Django, FastAPI, and backend
                            development. Open to full-time opportunities,
                            internships, and collaborations.
                        </p>

                        <div className="contact-info">

                            <p>
                                📞{" "}
                                <a href="tel:9741738681">
                                    +91 9741738681
                                </a>
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
                                />

                            </div>

                            <button
                                type="submit"
                                className="send-button"
                                disabled={isSending}
                            >
                                {isSending ? "Sending..." : "Send Message"}
                            </button>

                            {status && (
                                <p
                                    className="form-status"
                                    role="status"
                                    aria-live="polite"
                                >
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
