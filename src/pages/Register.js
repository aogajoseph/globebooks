import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Register.css';

const Register = () => {
  return (
    <div className="signup-container">
      <div className="signup-background">
        <div className="signup-card">
          <h2 className="signup-title">Welcome to Globebooks</h2>
          <form className="signup-form">
            <div className="form-group">
              <label>Username</label>
              <input type="text" placeholder="Create a username..." required />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="Enter your email..." required />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" placeholder="Create a password..." required />
            </div>
            <button type="submit" className="signup-btn">Create Account</button>
          </form>
          <p className="signup-text">
            Already have an account? <Link to="/signin" className="signin-link">Sign In</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;