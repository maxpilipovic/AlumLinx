import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../index.css'; 


export function Home() {
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
              required
            />
            <label htmlFor="password" className="floating-label">
              Password
            </label>
          </div>
         {/* Login Button */}
         <button className="login-button">Log in</button>
      </div>
    </div>
  );
}