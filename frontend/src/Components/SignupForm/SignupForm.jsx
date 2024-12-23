
import React, { useState } from 'react';
import './SignupForm.css';
import Navbar from '../Navbar/Navbar';
import SignupImg from '../SignupImg/SignupImg';
import signlogin from "../../assets/signlogin.png";
import Footer from '../Footer/Footer';

function SignupForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    LastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/user/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (response.ok) {
        alert(result.message);
        setFormData({
          firstName: "",
          LastName: "",
          email: "",
          password: "",
        });
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.error("Error during signup:", error);
      alert("Error during signup. Please try again later.");
    }
  };

  return (
    <div>
      <Navbar />
      <SignupImg />
      <div className="contact-text">
        <div className="contact-text1">
          <h1>SignUp Form</h1>
          <h2>Get in Touch</h2>
        </div>
        <div className="Contact-para">
          <p>
            IT Solution is a broad category that encompasses various <br />
            technological solutions.
          </p>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="signup-form">
          <div className="signup-form-inp">
            <div className="inputs">
              <input
                type="text"
                className="sign-inp"
                placeholder="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
              <input
                type="text"
                className="sign-inp"
                placeholder="Last Name"
                name="LastName"
                value={formData.LastName}
                onChange={handleChange}
              />
              <input
                type="email"
                className="sign-inp"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              <input
                type="password"
                className="sign-inp"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              <button type="submit" className="signup-btn">
                Create Account
              </button>
            </div>
          </div>
          <div className="signup-form-img">
            <img src={signlogin} alt="Sign Up Illustration" />
          </div>
        </div>
      </form>
      <Footer />
    </div>
  );
}

export default SignupForm;