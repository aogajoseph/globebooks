import React, { useState, useEffect, useRef, useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';
import { FaAlignRight, FaSearch, FaBell, FaDownload, FaCog, FaQuestionCircle, FaSignOutAlt, FaEnvelopeOpenText } from "react-icons/fa";
import ProfilePic from '../images/profile-pic.png';
import Logo from '../images/logo.png';
import '../css/InnerNavbar.css';

const InnerNavbar = ({ query, setQuery }) => {
    const [isOpen, setIsOpen] = useState(false); // Controls mobile navbar toggle
    const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
    const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false); // Controls profile menu
    const { user } = useContext(UserContext);
    const notificationsRef = useRef(null);
    const profileMenuRef = useRef(null); // Reference for profile menu
    
    const toggleMenu = () => setIsOpen(!isOpen);
    const toggleNotifications = () => setIsNotificationsOpen(!isNotificationsOpen);
    const toggleProfileMenu = () => setIsProfileMenuOpen(!isProfileMenuOpen);

    const [notifications, setNotifications] = useState([
        { id: 1, text: 'New book coming soon: "Love is not for me!"', read: false }
    ]);

    const unreadCount = notifications.filter((notification) => !notification.read).length;

     const markAsRead = (id) => {
        setNotifications((prevNotifications) =>
            prevNotifications.map((notification) =>
                notification.id === id ? { ...notification, read: true } : notification
            )
        );
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (profileMenuRef.current && !profileMenuRef.current.contains(event.target)) {
                setIsProfileMenuOpen(false);
            }
            if (notificationsRef.current && !notificationsRef.current.contains(event.target)) {
                setIsNotificationsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <nav className='inner-navbar'>
            <div className="inner-navbar-logo">
                <Link to='/'>
                    <img src={Logo} alt="Logo" className="logo" />
                </Link>
            </div>

            <div className="inner-searchbar">
                <div className='inner-search-input-container'>
                    <input 
                        type="text" 
                        className="inner-search-input" 
                        placeholder="Search by title..." 
                        value={query} 
                        onChange={(e) => setQuery(e.target.value)} 
                    />
                    <FaSearch className="inner-search-icon" />
                </div>
            </div>

            <FaAlignRight className='inner-navbar-toggler' onClick={toggleMenu} />

            <div className={`inner-navbar-icons ${isOpen ? 'show' : ''}`}>
                <div className="notifications-wrapper" onClick={toggleNotifications}>
                    <FaBell className="notifications-icon" />
                    {unreadCount > 0 && <span className="notifications-badge">{unreadCount}</span>}
                </div>

                {isNotificationsOpen && (
                    <div className="notifications-card" ref={notificationsRef}>
                        <h4>Notifications</h4>
                        <ul>
                            {notifications.map((notification) => (
                                <li 
                                    key={notification.id} 
                                    className={notification.read ? 'read' : 'unread'}
                                    onClick={() => markAsRead(notification.id)}
                                >
                                    <FaEnvelopeOpenText className="notifications-item-icon" />
                                    {notification.text}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                <div className="profile-container" onClick={toggleProfileMenu}>
                    <img src={user.profilePicture || ProfilePic} alt="Profile" className="inner-profile-pic" />
                </div>

                {isProfileMenuOpen && (
                    <div className="profile-menu" ref={profileMenuRef}>
                        <p className="menu-username">{user.username}</p>
                        <p className="menu-email">{user.email}</p>
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
    );
};

export default InnerNavbar;