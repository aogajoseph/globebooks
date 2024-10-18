import React, { useState, useEffect, useRef, useContext } from 'react';
import { FaSearch, FaBell, FaDownload, FaCog, FaQuestionCircle, FaSignOutAlt, FaEnvelopeOpenText } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';
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

const Header = ({ query, setQuery }) => {
    const { user } = useContext(UserContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
    const [notifications, setNotifications] = useState([
        { id: 1, text: 'New book coming soon: "Love is not for me!"', read: false }
    ]);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const menuRef = useRef(null);
    const notificationsRef = useRef(null);

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

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleNotifications = () => {
        setIsNotificationsOpen(!isNotificationsOpen);
    };

    const markAsRead = (id) => {
        setNotifications((prevNotifications) =>
            prevNotifications.map((notification) =>
                notification.id === id ? { ...notification, read: true } : notification
            )
        );
    };

    const unreadCount = notifications.filter((notification) => !notification.read).length;

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
            if (notificationsRef.current && !notificationsRef.current.contains(event.target)) {
                setIsNotificationsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <header className='userheader'>
            <nav className='usernavbar'>
                <div className="usernavbar-logo">
                    <Link to='/'>
                        <img src={Logo} alt="Logo" className="logo" />
                    </Link>
                </div>

                <div className="usersearch-bar">
                    <div className='usersearch-input-container'>
                        <input 
                            type="text" 
                            className="usersearch-input" 
                            placeholder="Search by title..." 
                            value={query} 
                            onChange={(e) => setQuery(e.target.value)} 
                        />
                        <FaSearch className="usersearch-icon" />
                    </div>
                </div>

                <div className="usernavbar-icons">
                    <div className="usernotification-wrapper" onClick={toggleNotifications}>
                        <FaBell className="usernotification-icon" />
                        {unreadCount > 0 && <span className="usernotification-badge">{unreadCount}</span>}
                    </div>

                    {isNotificationsOpen && (
                        <div className="usernotifications-card" ref={notificationsRef}>
                            <h4>Notifications</h4>
                            <ul>
                                {notifications.map((notification) => (
                                    <li 
                                        key={notification.id} 
                                        className={notification.read ? 'read' : 'unread'}
                                        onClick={() => markAsRead(notification.id)}
                                    >
                                        <FaEnvelopeOpenText className="usernotification-item-icon" />
                                        {notification.text}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    <div className="userprofile-container" onClick={toggleMenu}>
                        <img src={user.profilePicture || ProfilePic} alt="Profile" className="userprofile-pic" />
                    </div>

                    {isMenuOpen && (
                        <div className="userprofile-menu" ref={menuRef}>
                            <p className="usermenu-username">{user.username}</p>
                            <p className="usermenu-email">{user.email}</p>
                            <Link to="/downloads">
                                <FaDownload className="usermenu-icon" /> My Downloads
                            </Link>
                            <Link to="/settings">
                                <FaCog className="usermenu-icon" /> Account Settings
                            </Link>
                            <Link to="/help-center">
                                <FaQuestionCircle className="usermenu-icon" /> Help & Support
                            </Link>
                            <Link to="/">
                                <FaSignOutAlt className="usermenu-icon" /> Logout
                            </Link>
                        </div>
                    )}
                </div>
            </nav>

            <div className="userheader-content">
                <h1 className="userheader-title">Welcome {user.username}!</h1>
                <p className="userheader-description">
                    Explore our library, Download your favourites or watch the stories come to life on <a href='https://youtube.com' className='channel-link'>Globebooks</a> YouTube Channel.
                </p>
            </div>

            <div className="userslideshow">
                <img 
                    src={images[currentImageIndex]} 
                    alt="Slideshow" 
                    className="userslideshow-image" 
                />
            </div>
        </header>
    );
};

export default Header;