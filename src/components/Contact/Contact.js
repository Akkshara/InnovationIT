import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your query has been submitted. We'll get back to you soon!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        {/* Left Side: Query Form */}
        <div className="contact-form">
          <h2>Submit Your Query</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button type="submit">Submit</button>
          </form>
        </div>

        {/* Right Side: FAQs and Chatbot Guidance */}
        <div className="contact-faqs">
          <h2>Quick Help & FAQs</h2>
          <ul>
            <li><strong>How do I reset my password?</strong> - Click on "Forgot Password" on the login page.</li>
            <li><strong>How can I contact support?</strong> - Fill out the form or use the chatbot for quick help.</li>
            <li><strong>How does the chatbot work?</strong> - Simply type your query and get instant responses.</li>
            <li><strong>Need urgent support?</strong> - Call our 24/7 helpline at +91 98765 43210.</li>
          </ul>
          <p className="chatbot-guidance">
            💬 **Tip:** Try using our chatbot in the bottom right corner for instant solutions to your HR-related queries!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
