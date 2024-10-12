import React from 'react';
import '../styles/footer.css';

function Footer() {
    return (
        <footer className="footer">
            <p>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="bi bi-facebook me-2"></i></a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="bi bi-instagram me-2" ></i></a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="bi bi-twitter me-2"></i></a>
                &copy; 2024 Loom Bead Bracelets. All rights reserved.</p>
        </footer>
    );
}

export default Footer;
