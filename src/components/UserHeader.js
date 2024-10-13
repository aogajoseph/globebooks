import React, { useState, useEffect, useRef } from 'react';
import { FaSearch, FaBell, FaDownload, FaCog, FaQuestionCircle, FaSignOutAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Logo from '../images/logo.png';
import ProfilePic from '../images/profile-pic.png'; // Default Profile Picture
import PreviewImg1 from '../images/Book1.png';
import PreviewImg2 from '../images/Book2.png';
import PreviewImg3 from '../images/Book3.png';
import PreviewImg4 from '../images/Book4.png';
import PreviewImg5 from '../images/Book5.png';
import PreviewImg6 from '../images/Book6.png';
import PreviewImg7 from '../images/Book7.png';
import PreviewImg8 from '../images/Book8.png';
import PreviewImg9 from '../images/Book9.png';
import PreviewImg10 from '../images/Book10.png';
import PreviewImg11 from '../images/Book11.png';
import PreviewImg12 from '../images/Book12.png';
import '../css/UserHeader.css';

const Header = ({ query, setQuery, username, profilePicture }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const menuRef = useRef(null);

    // Array of image paths for the slideshow
    const images = [
        PreviewImg1,
        PreviewImg2,
        PreviewImg3,
        PreviewImg4,
        PreviewImg5,
        PreviewImg6,
        PreviewImg7,
        PreviewImg8,
        PreviewImg9,
        PreviewImg10,
        PreviewImg11,
        PreviewImg12,
    ];

    // Toggle menu visibility
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Close the menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // Rotate through images for the slideshow
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <header className='userheader'>
            {/* Navbar */}
            <nav className='navbar'>
                <div className="navbar-logo">
                    <Link to='/'>
                        <img src={Logo} alt="Logo" className="logo" />
                    </Link>
                </div>

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

                <div className="navbar-icons">
                    <FaBell className="notification-icon" />

                    <div className="profile-container" onClick={toggleMenu}> 
                        <img src={profilePicture || ProfilePic} alt="Profile" className="profile-pic" />
                    </div>

                    {isMenuOpen && (
                        <div className="profile-menu" ref={menuRef}>
                            <p className="menu-username">{username}</p>
                            <Link to="/downloads">
                                <FaDownload className="menu-icon" /> My Downloads
                            </Link>
                            <Link to="/settings">
                                <FaCog className="menu-icon" /> Account Settings
                            </Link>
                            <Link to="/help-center">
                                <FaQuestionCircle className="menu-icon" /> Help & Support
                            </Link>
                            <Link to="/">
                                <FaSignOutAlt className="menu-icon" /> Logout
                            </Link>
                        </div>
                    )}
                </div>
            </nav>

            {/* userheader content */}
            <div className="userheader-content">
                <h1 className="userheader-title">Welcome {username}</h1>
                <p className="userheader-description">
                    Explore our library, Download your favourites or watch the stories come to life on <a href='https://youtube.com' className='youtube-link'>Globebooks</a> YouTube Channel.
                </p>
            </div>

            {/* Slideshow container */}
            <div className="slideshow">
                <img 
                    src={images[currentImageIndex]} 
                    alt="Slideshow" 
                    className="slideshow-image" 
                />
            </div>
        </header>
    );
};

export default Header;