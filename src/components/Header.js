import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
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
                    <li><Link to="/cart"><FontAwesomeIcon icon={faShoppingCart} /> </Link></li>
                    <li><Link to="/profile"><FontAwesomeIcon icon={faUser} /> </Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
