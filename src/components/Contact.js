import React from 'react';
import '../styles/contact.css'; // Ensure you have styles for this page

function Contact() {
    return (
        <div className="container">
            <h1 className="text-center">Contact Us</h1>
            <p className="text-center">If you have any questions, suggestions, or comments, feel free to reach out to us. We are always happy to help!</p>

            <div className="contact-info">
                <h2>Contact Information</h2>
                <ul>
                    <li><strong>Email:</strong> support@example.com</li>
                    <li><strong>Phone:</strong> +1 (234) 567-8901</li>
                    <li><strong>Address:</strong> 123 Loom Bead St, City, Country</li>
                </ul>
            </div>

            <div className="feedback-form">
                <h2>Feedback Form</h2>
                <form>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" id="name" placeholder="Your name" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" placeholder="Your email" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="message" className="form-label">Message</label>
                        <textarea className="form-control" id="message" rows="3" placeholder="Your message" required></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Send</button>
                </form>
            </div>

            <div className="business-hours">
                <h2>Business Hours</h2>
                <p>Mon-Fri: 9:00 AM - 5:00 PM</p>
                <p>Sat: 10:00 AM - 2:00 PM</p>
                <p>Sun: Closed</p>
            </div>

            <div className="social-media">
                <h2>Follow Us</h2>
                <p>Stay connected on social media:</p>
                <ul>
                    <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                    <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                    <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Contact;
