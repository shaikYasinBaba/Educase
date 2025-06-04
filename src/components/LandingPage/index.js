import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.css"

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      <h2>Welcome to PopX</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
      <button className="primary-btn" onClick={() => navigate("/register")}>
        Create Account
      </button>
      <button className="secondary-btn" onClick={() => navigate("/login")}>
        Already Registered? Login
      </button>
    </div>
  );
};

export default LandingPage;
