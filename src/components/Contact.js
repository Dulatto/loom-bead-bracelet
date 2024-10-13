import React from 'react';
import '../styles/contact.css';
import contactImage from '../assets/for_contact.jpg';// Ensure you have styles for this page

function Contact() {
    return (
        <div className="container contact">
            <div className='row'>
                <div className='col-12 text-start'>
                    <p >If you have any questions, suggestions, or comments, feel free to reach out to us. We are always happy to help!</p>

                </div>
                <div className='col-5 contact-info'>
                    <img src={contactImage} alt="Contact" className="img-fluid" />
                </div>
                <div className="col-7 feedback-form">
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
                        <button type="submit" className="btn btn-outline-primary">Send</button>
                    </form>
                </div>
                <div className="social-media">
                    <p>Stay connected on social media:</p>
                    <p>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="bi bi-facebook me-2"></i></a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="bi bi-instagram me-2" ></i></a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="bi bi-twitter me-2"></i></a>
                    </p>
                </div>
            </div>
        </div >
    );
}

export default Contact;
