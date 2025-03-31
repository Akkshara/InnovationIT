import React, { useState } from "react";
import "./Login.css";

const Login = ({ onClose }) => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors

    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      
      if (!response.ok) {
        setError(data.error || "Something went wrong");
        return;
      }

      localStorage.setItem("token", data.token); // Save JWT
      alert("Login Successful");
      onClose(); // Close login popup
      window.location.href = "#home"; // Redirect to Home Page

    } catch (error) {
      setError("Server error, please try again later.");
    }
  };

  return (
    <div className="login-overlay">
      <div className="login-container">
        <h2>Login</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="submit">Login</button>
        </form>
        <button className="close-btn" onClick={onClose}>×</button>
      </div>
    </div>
  );
};

export default Login;
