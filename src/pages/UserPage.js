import React from 'react';
import { Link } from 'react-router-dom';
import '../css/UserPage.css';

const Home = ({ username }) => {
  return (
    <div className="userpage-container">
      <div className="userpage-welcome">
        <h1>Welcome, {username}!</h1>
        <p>Ready to dive into your next adventure? Discover new books, continue where you left off, or explore curated recommendations.</p>
      </div>

      <div className="user-actions">
        <Link to="/recommendations" className="user-action-btn">Recommended for You</Link>
        <Link to="/saved-books" className="user-action-btn">Your Saved Books</Link>
        <Link to="/new-arrivals" className="user-action-btn">New Arrivals</Link>
      </div>

      <div className="book-recommendations">
        <h2>Based on your recent activity</h2>
        <div className="book-list">
          {/* Example books, replace with dynamic content */}
          <div className="book-item">
            <img src="/images/book1.jpg" alt="Book 1" />
            <p>Whispers of the Forgotten Shore</p>
          </div>
          <div className="book-item">
            <img src="/images/book2.jpg" alt="Book 2" />
            <p>The Midnight Traveler's Secret</p>
          </div>
          <div className="book-item">
            <img src="/images/book3.jpg" alt="Book 3" />
            <p>Echoes of a Broken Kingdom</p>
          </div>
        </div>
      </div>

      <button className="logout-btn">Log Out</button>
    </div>
  );
};

export default Home;