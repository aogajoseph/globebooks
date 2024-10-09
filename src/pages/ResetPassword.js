import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../firebase';
import '../css/ResetPassword.css';

const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setError(''); // Clear any previous errors
    setMessage(''); // Clear any previous messages

    try {
      // Send password reset email
      await sendPasswordResetEmail(auth, email);
      setMessage('Password reset email sent! Check your inbox.');
    } catch (err) {
      console.error('Error sending password reset email:', err);
      if (err.code === 'auth/user-not-found') {
        setError('No account found with this email address.');
      } else if (err.code === 'auth/invalid-email') {
        setError('The email address is not valid. Please try again.');
      } else {
        setError('An error occurred while sending the password reset email. Please try again later.');
      }
    }
  };

  return (
    <div className="reset-password-container">
      <div className="reset-password-card">
        <h2 className="reset-password-title">Reset Password</h2>
        <form className="reset-password-form" onSubmit={handleResetPassword}>
          <div className="form-group">
            <label>Enter email to get password reset link</label>
            <input
              type="email"
              placeholder="Enter your email here..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          {error && <p className="error-message">{error}</p>} {/* Display custom error message */}
          {message && <p className="success-message">{message}</p>} {/* Display success message */}
          <button type="submit" className="reset-password-btn">Send Link</button>
        </form>
        <p className="reset-password-text">
          Remembered your password? <Link to="/signin" className="signin-link">Sign In</Link>
        </p>
      </div>
    </div>
  );
};

export default ResetPassword;