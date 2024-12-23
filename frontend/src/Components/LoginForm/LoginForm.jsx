import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './LoginForm.css';
import LoginImg from '../LoginImg/LoginImg';
import signlogin from "../../assets/signlogin.png";
import { Link } from 'react-router-dom';

function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError(""); // Clear errors as the user types
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage("");
    setError("");

    try {
      const response = await fetch("http://localhost:8000/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (response.ok) {
        setSuccessMessage(result.message || "Login successful!");
        setFormData({
          email: "",
          password: "",
        });
        // Redirect logic can go here
      } else {
        setError(result.message || "Invalid email or password.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setError("An error occurred during login. Please try again later.");
    }
  };

  return (
    <div>
      <Navbar />
      <LoginImg />
      <div className="contact-text">
        <div className="contact-text1">
          <h1>Login Form</h1>
          <h2>Get in Touch</h2>
        </div>
        <div className="Contact-para">
          <p>
            IT Solution is a broad category that encompasses various <br /> technological solutions.
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="login-form">
          <div className="login-form-input">
            <input
              className="inp"
              type="email"
              placeholder="Enter your Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              className="inp"
              type="password"
              placeholder="Enter your Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            {error && <p className="error-message">{error}</p>}
            {successMessage && <p className="success-message">{successMessage}</p>}
            <div className="lik">
              <p>Don't have an account?</p>
              <Link to="/signupForm">Signup</Link>
            </div>
            <button type="submit" className="login-btn">
              Login
            </button>
          </div>
          <div className="login-form-img">
            <img src={signlogin} alt="Login Illustration" />
          </div>
        </div>
      </form>
      <Footer />
    </div>
  );
}

export default LoginForm;
