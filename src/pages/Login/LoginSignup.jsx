import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./LoginSignup.css";


const LoginSignup = () => {
  const [formData, setFormData]=useState({
    username: '',
    email: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,[e.target.name]:e.target.value
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
      const response = await axios.post('/signup',formData);
      console.log(response.data);
    }
    catch(error) {
      console.error(error);
    }
  };
  
  const handleLogin=() =>{
    navigate('/Login');
  }


  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form className="signup-form">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit">Sign Up</button>
        <p className="signin-link">Already have an account?<span onClick={handleLogin} className="signin-text">Click her to Login!</span></p>
      </form>
    </div>
  );
};

export default LoginSignup;
