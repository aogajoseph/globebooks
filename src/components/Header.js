import React, { useState, useEffect } from 'react';
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Logo from '../images/logo.png';
import '../css/Header.css';

const Header = ({ query, setQuery}) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className='header'>
      {/* Navbar */}
      <nav className= {`headernavbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="headernavbar-logo">
          <Link to='/'>
            <img src={Logo} alt="Logo" className="logo" />
          </Link>
        </div>
        <div className="headernavbar-buttons">
          <Link to="/register" className="btn register-btn-header">Create Account</Link>
          <Link to="/signin" className="btn signin-btn-header">Sign In</Link>
        </div>
      </nav>

      {/* Header content */}
      <div className="header-content">
        <h1 className="header-title">Read &#8226; Listen &#8226; Watch</h1>
        <p className="header-description">
        Are you ready for a creative twist? <br /> Explore our library, uncover your favourites and enjoy in your preferred format.
        </p>

        {/* Search Input */}
        <div className="headersearch-bar">
          <div className='headersearch-input-container'>
            <input 
              type="text" 
              className="headersearch-input" 
              placeholder="Search by title..." 
              value={query} 
              onChange={(e) => setQuery(e.target.value)} 
            />
            <FaSearch className="headersearch-icon" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;