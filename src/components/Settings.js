import React, { useContext, useState } from 'react';
import { FaUser, FaEnvelope, FaLock, FaBell, FaEdit, FaCamera } from 'react-icons/fa';
import { UserContext } from '../contexts/UserContext';
import '../css/Settings.css';

const Settings = () => {
    const { user, setUser } = useContext(UserContext);
    const [username, setUsername] = useState(user.username);
    const [email, setEmail] = useState(user.email);
    const [profilePicture, setProfilePicture] = useState(user.profilePicture);
    const [notifications, setNotifications] = useState(true);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const openEditModal = () => setIsEditModalOpen(true);
    const closeEditModal = () => setIsEditModalOpen(false);

    const openPasswordModal = () => setIsPasswordModalOpen(true);
    const closePasswordModal = () => setIsPasswordModalOpen(false);

    const handleProfilePictureChange = (e) => {
        const file = e.target.files[0];
        setProfilePicture(URL.createObjectURL(file));
    };

    const handleSaveChanges = () => {
        setUser({ ...user, username, email, profilePicture });
        alert('Profile updated successfully!');
        closeEditModal();
    };    

    const handlePasswordChange = () => {
        if (newPassword !== confirmPassword) {
            alert('Passwords do not match. Please try again.');
            return;
        }
    
        if (!currentPassword) {
            alert('Please enter your current password.');
            return;
        }
    
        // Update password logic using Firebase authentication
        alert('Password changed successfully!');
        closePasswordModal();
    };

    return (
        <div className="settings-container">
            <h2 className="settings-title">Account Settings</h2>
            <div className="settings-card">
                <div className="profile-section">
                    <div className="profile-pic-wrapper">
                        {profilePicture ? (
                            <img src={profilePicture} alt="Profile" className="profile-pic" />
                        ) : (
                            <div className="profile-pic-placeholder">No Image</div>
                        )}
                    </div>
                    <div className="profile-info">
                        <h3>{username}</h3>
                        <p>{email}</p>
                        <button className="btn-edit" onClick={openEditModal}>
                            <FaEdit /> Edit Profile
                        </button>
                    </div>
                </div>

                {/* Notifications Toggle */}
                <div className="form-group notifications-group">
                    <label>
                        <FaBell className="settings-icon" /> Notifications
                    </label>
                    <div className="toggle-switch">
                        <input 
                            type="checkbox" 
                            id="notifications" 
                            checked={notifications} 
                            onChange={() => setNotifications(!notifications)}
                        />
                        <label htmlFor="notifications"></label>
                    </div>
                </div>

                {/* Change Password Button */}
                <button className="btn-change-password" onClick={openPasswordModal}>
                    <FaLock /> Change Password
                </button>
            </div>

            {isEditModalOpen && (
                <div className="modal-overlay">
                    <div className="modal">
                        <h3>Edit Profile</h3>
                        <form className="modal-form">
                            <div className="form-group">
                                <label>
                                    <FaUser className="settings-icon" /> Username
                                </label>
                                <input 
                                    type="text" 
                                    value={username} 
                                    onChange={(e) => setUsername(e.target.value)} 
                                    className="modal-input"
                                />
                            </div>

                            <div className="form-group">
                                <label>
                                    <FaEnvelope className="settings-icon" /> Email
                                </label>
                                <input 
                                    type="email" 
                                    value={email} 
                                    onChange={(e) => setEmail(e.target.value)} 
                                    className="modal-input"
                                />
                            </div>

                            <div className="form-group">
                                <label>
                                    <FaCamera className="settings-icon" /> Profile Picture
                                </label>
                                <input 
                                    type="file" 
                                    accept="image/*" 
                                    onChange={handleProfilePictureChange} 
                                    className="modal-input"
                                />
                            </div>

                            <div className="modal-buttons">
                                <button type="button" className="btn-save" onClick={handleSaveChanges}>Save Changes</button>
                                <button type="button" className="btn-cancel" onClick={closeEditModal}>Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Modal for changing password */}
            {isPasswordModalOpen && (
                <div className="modal-overlay">
                    <div className="modal">
                        <h3>Change Password</h3>
                        <form className="modal-form">
                            <div className="form-group">
                                <label>
                                    <FaLock className="settings-icon" /> Current Password
                                </label>
                                <input 
                                    type="password" 
                                    value={currentPassword} 
                                    onChange={(e) => setCurrentPassword(e.target.value)} 
                                    className="modal-input"
                                />
                            </div>

                            <div className="form-group">
                                <label>
                                    <FaLock className="settings-icon" /> New Password
                                </label>
                                <input 
                                    type="password" 
                                    value={newPassword} 
                                    onChange={(e) => setNewPassword(e.target.value)} 
                                    className="modal-input"
                                />
                            </div>

                            <div className="form-group">
                                <label>
                                    <FaLock className="settings-icon" /> Confirm Password
                                </label>
                                <input 
                                    type="password" 
                                    value={confirmPassword} 
                                    onChange={(e) => setConfirmPassword(e.target.value)} 
                                    className="modal-input"
                                />
                            </div>

                            <div className="modal-buttons">
                                <button type="button" className="btn-save" onClick={handlePasswordChange}>Change Password</button>
                                <button type="button" className="btn-cancel" onClick={closePasswordModal}>Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Settings;