import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <section id="home" className="home-section">
      <h1>Welcome to Innovate</h1>
      <p>
        Innovate is a leading IT solutions company specializing in software development, AI-driven applications, 
        and enterprise solutions. Founded in 2015, we have been delivering cutting-edge technology services to clients worldwide.
      </p>
      <p>
        Our mission is to empower businesses with innovative solutions, helping them scale efficiently in the digital world.
      </p>
      <p>
        With a dedicated team of experts in cloud computing, AI, and web development, we ensure that businesses stay ahead 
        in this fast-paced industry.
      </p>
      <button className="learn-more">Learn More</button>
    </section>
  );
};

export default Home;
