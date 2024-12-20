import React, { useState } from 'react';
import { FaQuestionCircle, FaEnvelope, FaPaperPlane } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import '../css/HelpCenter.css';

const HelpCenter = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setError(''); // Clear previous errors

        const templateParams = {
            name: name,
            email: email,
            message: message,
        };

        // Make sure to replace these with your actual service ID, template ID, and public key
        emailjs.send('service_gfr02nl', 'template_n4wxvmj', templateParams, 'OmI5gEUPY_rqlGcV2')
            .then((response) => {
                console.log('Email successfully sent!', response.status, response.text);
                setIsSubmitted(true);
                setName('');
                setEmail('');
                setMessage('');
            })
            .catch((err) => {
                console.error('Failed to send email. Error:', err);
                setError('Failed to send the email. Please try again.');
            });
    };

    return (
        <div className="help-container">
            <h2 className="help-title">Help & Support</h2>
            <div className="help-content">
                <section className="faq-section">
                    <h3><FaQuestionCircle font-size={35} /> Frequently Asked Questions</h3>
                    <ul>
                        <li>How do I download a book?</li>
                        <li>How can I reset my password?</li>
                        <li>How can I update my account details?</li>
                        <li>What formats are available for books?</li>
                    </ul>
                </section>

                <section className="contact-section">
                    <h3><FaEnvelope /> Contact Us</h3>
                    <p>If you can't find answers in the FAQs, reach out to us via email by filling out the form below:</p>
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="help-form-group">
                            <label>Name</label>
                            <input 
                                type="text" 
                                placeholder="Full Names" 
                                value={name} 
                                onChange={(e) => setName(e.target.value)} 
                                required 
                            />
                        </div>
                        <div className="help-form-group">
                            <label>Email</label>
                            <input 
                                type="email" 
                                placeholder="Email Address" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                                required 
                            />
                        </div>
                        <div className="help-form-group">
                            <label>Message</label>
                            <textarea 
                                placeholder="Type your querry here..." 
                                value={message} 
                                onChange={(e) => setMessage(e.target.value)} 
                                required 
                            ></textarea>
                        </div>
                        <button type="submit" className="submit-btn">
                            <FaPaperPlane /> Submit
                        </button>
                        {isSubmitted && <p className="success-message">Thank you! We'll get back to you soon.</p>}
                        {error && <p className="error-message">{error}</p>}
                    </form>
                </section>
            </div>
        </div>
    );
};

export default HelpCenter;