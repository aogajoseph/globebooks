import React, { useState, useEffect } from 'react';
import { FaAlignRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Logo from '../images/logo.png';
import '../css/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

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
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-logo">
          <Link to='/'>
            <img src={Logo} alt="Logo" className="logo" />
          </Link>
        </div>
        <FaAlignRight className='navbar-toggler'  onClick={toggleMenu} />
        <div className={`navbar-buttons  navbar-links ${isOpen ? 'active' : ''}`}>
            <Link to="/register" className="btn">Create Account</Link>
            <Link to="/signin" className="btn signin-btn-header">Sign In</Link>
        </div>
    </nav>
  );
}

export default Navbar;