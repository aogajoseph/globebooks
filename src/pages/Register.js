import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../firebase';
import { doc, setDoc } from 'firebase/firestore';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import eye icons
import Terms from '../images/Terms.pdf';
import '../css/Register.css';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);
  const navigate = useNavigate();

  // Define custom error messages
  const customErrorMessages = {
    'auth/email-already-in-use': 'This email is already in use. Please sign in or use another email.',
    'auth/invalid-email': 'The email address you entered is not valid. Please check and try again.',
    'auth/weak-password': 'Your password is too weak. Please use at least 6 characters.',
    'auth/network-request-failed': 'Network error. Please check your internet connection and try again.',
    // Add any other Firebase error codes and your custom messages here
    default: 'An unexpected error occurred. Please try again later.',
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError(''); // Clear previous errors

    if (!acceptTerms) {
      setError('You must accept the terms of service.');
      return;
    }

    try {
      // Create user with email and password
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Store additional user data in Firestore
      await setDoc(doc(db, "users", user.uid), {
        username: username,
        email: user.email,
        createdAt: new Date()
      });

      // Redirect to user dashboard or homepage
      navigate('/user');
    } catch (err) {
      // Check if there's a custom error message for the error code, otherwise use default
      const errorMessage = customErrorMessages[err.code] || customErrorMessages.default;
      setError(errorMessage);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div className="signup-container">
      <div className="signup-background">
        <div className="signup-card">
          <h2 className="signup-title">Welcome to Globebooks</h2>
          <form className="signup-form" onSubmit={handleRegister}>
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                placeholder="Create a username..."
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
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
              <div className="password-input-wrapper">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Create a password..."
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <span className="password-toggle-icon" onClick={togglePasswordVisibility}>
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
            </div>

            <div className="form-group terms-div">
              <input
                type="checkbox"
                id="accept-terms"
                checked={acceptTerms}
                onChange={() => setAcceptTerms(!acceptTerms)}
                required
              />
              <label htmlFor="accept-terms">
                I accept the <a href={Terms} className="terms-link" target="_blank" rel="noopener noreferrer">Terms of Service</a>
              </label>
            </div>

            {error && <p className="error-message">{error}</p>}
            <button type="submit" className="signup-btn" disabled={!acceptTerms}>Create Account</button>
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