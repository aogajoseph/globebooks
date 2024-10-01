import React from 'react';
import { Link } from 'react-router-dom';
import '../css/SignIn.css';

const SignIn = () => {
  return (
    <div className="signin-container">
      <div className="signin-background">
        <div className="signin-card">
          <h2 className="signin-title">Welcome Back</h2>
          <form className="signin-form">
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="Enter your email..." required />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" placeholder="Enter your password..." required />
            </div>
            <button type="submit" className="signin-btn">Sign In</button>
          </form>
          <p className="signin-text">
            Don’t have an account? <Link to="/register" className="signup-link">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;