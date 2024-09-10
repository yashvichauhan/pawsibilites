import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';   
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/login', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      if (response.ok) {
        const userData = await response.json();
        
        
        login(userData);
  
    
        navigate('/'); 
      } else {
        const errorMessage = await response.text(); 
        console.error('Login failed:', errorMessage);
        alert('Failed to log in. Please check your credentials and try again.');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('An error occurred while trying to log in. Please try again later.');
    }
  }
   const handleSignUp=() =>{
    navigate('/Signup');
   }

  return (
    <div className="login">
      <form onSubmit={handleLogin} className="login-form">
        <h2>Login to Your Account</h2>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="login-button">Log In</button>
        <p className="signup-link">Don't have an account?<span onClick={handleSignUp} className="signup-text">Create One!</span></p>
      </form>
    </div>
  );
};

export default Login;
