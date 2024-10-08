import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';

function Header() {
    return (
        <header className="header">
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/designer">Create Bracelet</Link></li>
                    <li><Link to="/catalog">Catalog</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/faq">FAQ</Link></li>
                    <li><Link to="/cart">Cart</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
