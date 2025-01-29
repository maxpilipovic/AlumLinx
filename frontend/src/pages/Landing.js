import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import '../index.css'; 


export function Header() {
    return (
      <div className="home-container">
        <div className = "home-text">
          <h1 className = "home-title">AlumLinx</h1>
          <p>Stay Linked with Greek Alumnis</p>
        </div>
      </div>
    );
  }
  
export function Login() {

   // State to hold username and password values
   const [username, setUsername] = useState('');
   const [password, setPassword] = useState('');
 
   // Handle the login button click
   const handleLogin = () => {
    // Check if username and password match certain values
    if (username === 'admin' && password === '1') {
      // Redirect to a different page
      //window.location.href = '/Homepage';  // Replace with your desired URL
      console.log('Logged In!');

    } else {
      // Optionally, handle invalid credentials
      console.log('Invalid username or password');
    }
   };

  return (
    <div className="login-container">
      <div className="form-container">
          {/* User Name */}
        <div className="input-wrapper">
            <input
              name="username"
              id="username"
              className="login-input"
              placeholder=" "
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)} // Update username on change
              required
            />
         <label htmlFor="username" className="floating-label">
              Username
          </label>
        </div>
          {/* PassWord */}
        <div className="input-wrapper">
            <input
              name="password"
              id="password"
              className="login-input"
              placeholder=" "
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Update password on change
              required
            />
            <label htmlFor="password" className="floating-label">
              Password
            </label>
          </div>
         {/* Login Button */}
         <button className="login-button" onClick={handleLogin}>
          Log in
        </button>
        {/* Create Account Button */}
        <button className="create-acc-button" onClick={handleLogin}>
          Create an Account
        </button>
      </div>
    </div>
  );
}