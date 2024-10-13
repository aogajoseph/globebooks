import React, { useState } from 'react';
import { FaQuestionCircle, FaEnvelope, FaPhoneAlt, FaPaperPlane } from 'react-icons/fa';
import '../css/HelpCenter.css';

const HelpCenter = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate a successful form submission
        setIsSubmitted(true);
    };

    return (
        <div className="help-container">
            <h2 className="help-title">Help & Support</h2>
            <div className="help-content">
                <section className="faq-section">
                    <h3><FaQuestionCircle /> Frequently Asked Questions</h3>
                    <ul>
                        <li>How do I download a book?</li>
                        <li>How can I reset my password?</li>
                        <li>How can I update my account details?</li>
                        <li>What formats are available for books?</li>
                    </ul>
                </section>

                <section className="contact-section">
                    <h3><FaEnvelope /> Contact Us</h3>
                    <p>If you can't find the answer in the FAQs, fill out the form below or reach out via email or phone:</p>
                    <p><FaPhoneAlt /> +123-456-7890</p>
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Name</label>
                            <input 
                                type="text" 
                                placeholder="Your Name" 
                                value={name} 
                                onChange={(e) => setName(e.target.value)} 
                                required 
                            />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input 
                                type="email" 
                                placeholder="Your Email" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                                required 
                            />
                        </div>
                        <div className="form-group">
                            <label>Message</label>
                            <textarea 
                                placeholder="How can we help you?" 
                                value={message} 
                                onChange={(e) => setMessage(e.target.value)} 
                                required 
                            ></textarea>
                        </div>
                        <button type="submit" className="submit-btn">
                            <FaPaperPlane /> Send Message
                        </button>
                        {isSubmitted && <p className="success-message">Thank you! We'll get back to you soon.</p>}
                    </form>
                </section>
            </div>
        </div>
    );
};

export default HelpCenter;