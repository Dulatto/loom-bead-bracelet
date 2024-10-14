import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/header.css';

function Header() {

    const location = useLocation();

    return (
        <header className="header">
            <nav>
                <ul className="d-flex justify-content-between align-items-center">
                    {/* Левый элемент */}
                    <li className="me-auto">
                        <Link to="/"><i className="bi bi-star"></i></Link>
                    </li>

                    {/* Центрированные ссылки */}
                    <div className="d-flex me-5">
                        <li><Link to="/designer" className={location.pathname === '/designer' ? 'active' : ''}>Create Bracelet</Link></li>
                        <li><Link to="/catalog" className={location.pathname === '/catalog' ? 'active' : ''}>Catalog</Link></li>
                        <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link></li>
                        <li><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link></li>
                        <li><Link to="/faq" className={location.pathname === '/faq' ? 'active' : ''}>FAQ</Link></li>
                    </div>

                    {/* Правые элементы */}
                    <div className="d-flex">
                        <li className="me-2"><Link to="/cart"><i className="bi bi-cart"></i></Link></li>
                        <li><Link to="/profile"><i className="bi bi-person"></i></Link></li>
                    </div>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
