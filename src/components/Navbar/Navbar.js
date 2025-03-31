import React, { useState } from "react";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";
import "./Navbar.css";

const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem("token"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    window.location.reload();
  };

  return (
    <>
      <nav className="navbar">
        <div className="logo">Innovate IT</div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">Services</a></li>
          <li><a href="#contact">Contact</a></li>
          <li className="auth-buttons">
            {isAuthenticated ? (
              <button className="logout-btn" onClick={handleLogout}>Logout</button>
            ) : (
              <>
                <button className="login-btn" onClick={() => setShowLogin(true)}>Login</button>
                <button className="signup-btn" onClick={() => setShowSignup(true)}>Signup</button>
              </>
            )}
          </li>
        </ul>
      </nav>

      {showLogin && <Login onClose={() => setShowLogin(false)} />}
      {showSignup && <Signup onClose={() => setShowSignup(false)} />}
    </>
  );
};

export default Navbar;
