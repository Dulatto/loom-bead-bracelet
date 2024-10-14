import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';

function Header() {
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
                        <li><Link to="/designer"><button className='btn btn-dark mt-0'>Create Bracelet</button></Link></li>
                        <li><Link to="/catalog">Catalog</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/faq">FAQ</Link></li>
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
