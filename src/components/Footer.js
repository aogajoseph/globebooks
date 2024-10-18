import React from "react";
import { FaYoutubeSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import Logo from '../images/logo.png';
import Terms from '../images/Terms.pdf';
import Privacy from '../images/Privacy.pdf';
import Security from '../images/Security.pdf';
import Cookie from '../images/Cookie.pdf';
import '../css/Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer section-padding">
                <div className="footer-links">
                    <div className="footer-description">
                        <Link to='/'>
                            <img src={Logo} alt='Logo' className="footer-logo" />
                        </Link>
                        <p className="footer-description">Experience creativity with Globebooks, a library of eBooks, audiobooks and animated videos. Globebooks is operated by Globe Technologies.</p>
                    </div>
                    <div className="footer-links-div">
                        <h4>Important Links</h4>
                        <Link to='/register'  className="important-links"><p>Create Account</p></Link>
                        <Link to='/signin'  className="important-links"><p>Sign In</p></Link>
                    </div>
                    <div className="footer-links-div">
                        <h4>Get in Touch</h4>
                        <p>Remote</p>
                        <a href="mailto:globeheadquarters@gmail.com" className="important-links"><p>globeheadquarters@gmail.com</p></a>
                    </div>
                    <div className="footer-links-div socials">
                        <h4>Stay Connected</h4>
                        <div className ="social-media">
                            <FaYoutubeSquare className="youtube social-links"/>
                            <FaFacebookSquare className="facebook social-links" />
                            <FaSquareXTwitter className="x social-links" />
                            <FaLinkedin className="linkedin social-links" />
                        </div>
                    </div>
                </div>

                <hr></hr>

                <div className="footer-below">
                    <div className="copyright">
                        <p>@{new Date().getFullYear()} Globe Technologies. All rights reserved.</p>
                    </div>
                    <div className="legal">
                        <a href={Terms} target="_blank" rel="noopener noreferrer"><div><p>Terms & Conditions</p></div></a>
                        <a href={Cookie} target="_blank" rel="noopener noreferrer"><div><p>Cookie Declaration</p></div></a>
                        <a href={Privacy} target="_blank" rel="noopener noreferrer"><div><p>Privacy</p></div></a>
                        <a href={Security} target="_blank" rel="noopener noreferrer"><div><p>Security</p></div></a>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Footer;