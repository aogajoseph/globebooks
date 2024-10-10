import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import '../css/SignIn.css';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    setError(''); // Clear previous error messages

    try {
      // Sign in the user with email and password
      await signInWithEmailAndPassword(auth, email, password);
      // Redirect to user dashboard or homepage after successful sign-in
      navigate('/user');
    } catch (err) {
      console.error('Error signing in:', err);
      // Customize the error message based on the error code
      switch (err.code) {
        case 'auth/invalid-email':
          setError('The email address is not valid. Please try again.');
          break;
        case 'auth/user-disabled':
          setError('This account has been disabled. Please contact support.');
          break;
        case 'auth/user-not-found':
          setError('No account found with this email. Please sign up.');
          break;
        case 'auth/wrong-password':
          setError('The password is incorrect. Please try again.');
          break;
        default:
          setError('Wrong Email or Password');
          break;
      }
    }
  };

  return (
    <div className="signin-container">
      <div className="signin-background">
        <div className="signin-card">
          <h2 className="signin-title">Sign In</h2>
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
            {error && <p className="error-message">{error}</p>} {/* Display custom error message */}
            <button type="submit" className="signin-btn ">Sign In</button>
          </form>
          <p className="signin-text">
            Don’t have an account? <Link to="/register" className="signup-link">Sign Up</Link>
          </p>
          <p className="forgot-password-text">
            <Link to="/reset-password" className="forgot-password-link">Forgot Password?</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;