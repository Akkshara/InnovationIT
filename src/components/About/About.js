import React from "react";
import "./About.css";
import softwareDev from "../images/sd.jpg";
import aiMl from "../images/alml.jpg";
import cloudSolutions from "../images/cloud.jpg";
import cybersecurity from "../images/cybers.jpg";

const services = [
  {
    id: 1,
    title: "Software Development",
    description: "Custom software solutions for businesses.",
    image: softwareDev,
  },
  {
    id: 2,
    title: "AI & Machine Learning",
    description: "Intelligent automation & AI-driven insights.",
    image: aiMl,
  },
  {
    id: 3,
    title: "Cloud Solutions",
    description: "Secure cloud computing & storage.",
    image: cloudSolutions,
  },
  {
    id: 4,
    title: "Cybersecurity",
    description: "Protect your business from cyber threats.",
    image: cybersecurity,
  },
];

const About = () => {
  return (
    <section id="about" className="about-section">
      <h2>Our Services</h2>
      <div className="services-container">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <img src={service.image} alt={service.title} />
            <div className="service-content">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <button className="read-more">Read More</button>
            </div>
          </div>
        ))}
      </div>

      <div className="company-info">
        <h3>More About Innovate</h3>
        <p>
          Innovate IT is a leading IT company providing top-tier technology solutions. 
          Our expertise spans across AI, software development, and cybersecurity.
        </p>
      </div>
    </section>
  );
};

export default About;
