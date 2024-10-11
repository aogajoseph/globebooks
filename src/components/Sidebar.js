import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight, FaBook, FaCompass, FaStar, FaDownload, FaUser, FaQuestionCircle, FaSignOutAlt } from 'react-icons/fa';
// import ProfilePic from '../images/profile-pic.png'; // Replace with the actual profile image path
import '../css/Sidebar.css';

const Sidebar = ({ username }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen((prevState) => !prevState);
    };

    return (
        <div className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
        <div className="sidebar-profile">
            <img src={'ProfilePic'} alt="Profile" className="profile-pic" />
            <span className="username">{username}</span>
        </div>

        <ul className="sidebar-links">
            <li>
            <Link to="/library">
                <FaBook className="icon" />
                <span>My Library</span>
            </Link>
            </li>
            <li>
            <Link to="/discover">
                <FaCompass className="icon" />
                <span>Discover</span>
            </Link>
            </li>
            <li>
            <Link to="/recommendations">
                <FaStar className="icon" />
                <span>Recommendations</span>
            </Link>
            </li>
            <li>
            <Link to="/downloads">
                <FaDownload className="icon" />
                <span>Downloads</span>
            </Link>
            </li>
            <li>
            <Link to="/account">
                <FaUser className="icon" />
                <span>Account Settings</span>
            </Link>
            </li>
            <li>
            <Link to="/support">
                <FaQuestionCircle className="icon" />
                <span>Help & Support</span>
            </Link>
            </li>
        </ul>

        <div className="sidebar-footer">
            <Link to="/logout" className='logout'>
            <FaSignOutAlt className="icon" />
            <span>Logout</span>
            </Link>
        </div>

        <button className="sidebar-toggle" onClick={toggleSidebar}>
            {isSidebarOpen ? <FaChevronLeft /> : <FaChevronRight />}
        </button>
        </div>
    );
};

export default Sidebar;