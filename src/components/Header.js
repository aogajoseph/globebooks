import React, { useState, useEffect } from 'react';
import { FaSearch } from "react-icons/fa";
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
      <nav className= {`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-logo">
          <img src={Logo} alt="Logo" className="logo" />
        </div>
        <div className="navbar-buttons">
          <button className="btn btn-signup">Create Account</button>
          <button className="btn btn-signin">Sign In</button>
        </div>
      </nav>

      {/* Header content */}
      <div className="header-content">
        <h1 className="header-title">Read &#8226; Listen &#8226; Watch</h1>
        <p className="header-description">
        Are you ready for a creative twist? <br /> Explore our library, uncover your favourites and enjoy in your preferred format.
        </p>

        {/* Search Input */}
        <div className="search-bar">
          <div className='search-input-container'>
            <input 
              type="text" 
              className="search-input" 
              placeholder="Search book by title..." 
              value={query} 
              onChange={(e) => setQuery(e.target.value)} 
            />
            <FaSearch className="search-icon" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;