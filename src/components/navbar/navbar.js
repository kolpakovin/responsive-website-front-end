import React from 'react';
import './navbar.css';

import { Link } from 'react-router-dom';

const navbar = props => {
    return (
        <nav className="navbar" >
            <a href="#" className="logo">logo</a>
            <ul className="main-nav" id="js-menu">
                <li>
                    <Link to='/' className="nav-links">Home</Link>
                </li>
                <li>
                    <Link to='/' className="nav-links">Products</Link>
                </li>
                <li>
                    <Link to='/' className="nav-links">About Us</Link>
                </li>
                <li>
                    <Link to='/' className="nav-links">Contact Us</Link>
                </li>
                <li>
                    <Link to='/' className="nav-links">Blog</Link>
                </li>
            </ul>
        </nav >
    )
}

export default navbar;