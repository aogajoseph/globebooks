import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth'; // Import necessary Firebase methods
import { auth } from '../firebase'; // Import Firebase configuration
import '../css/SignIn.css';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(''); // For success messages
  const navigate = useNavigate(); // For navigation after sign-in

  const handleSignIn = async (e) => {
    e.preventDefault(); // Prevent default form submission
    setError(''); // Clear previous error messages

    try {
      // Sign in the user with email and password
      await signInWithEmailAndPassword(auth, email, password);
      // Redirect to user dashboard or homepage after successful sign-in
      navigate('/user');
    } catch (err) {
      console.error('Error signing in:', err);
      setError(err.message); // Set error message for display
    }
  };

  const handleForgotPassword = async () => {
    setError(''); // Clear previous error messages
    setSuccess(''); // Clear previous success messages

    try {
      await sendPasswordResetEmail(auth, email);
      setSuccess('Password reset email sent! Check your inbox.'); // Success message
    } catch (err) {
      console.error('Error sending password reset email:', err);
      setError(err.message); // Set error message for display
    }
  };

  return (
    <div className="signin-container">
      <div className="signin-background">
        <div className="signin-card">
          <h2 className="signin-title">Welcome Back</h2>
          <form className="signin-form" onSubmit={handleSignIn}>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                placeholder="Enter your email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter your password..."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && <p className="error-message">{error}</p>} {/* Display error message */}
            {success && <p className="success-message">{success}</p>} {/* Display success message */}
            <button type="submit" className="signin-btn">Sign In</button>
          </form>
          <p className="signin-text">
            Don’t have an account? <Link to="/register" className="signup-link">Sign Up</Link>
          </p>
          <p className="forgot-password-text">
            <button onClick={handleForgotPassword} className="forgot-password-link">Forgot Password?</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;