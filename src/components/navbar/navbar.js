import React, { useState } from 'react';
import './navbar.css';

import { Link } from 'react-router-dom';

const Navbar = props => {
    const [showMenu, setShowMenu] = useState(false)
    return (
        <nav className="navbar" >
            <span className="navbar-toggle" id="js-navbar-toggle" onClick={() => setShowMenu(!showMenu)}>
                <i className="fa fa-bars"></i>
            </span>
            <Link to="/" className="logo">logo</Link>
            <ul className={showMenu ? 'active' : 'main-nav'} id="js-menu">
                <li className="nav-links">
                    <Link to='/' >Home</Link>
                </li>
                <li className="nav-links">
                    <Link to='/' >Products</Link>
                </li>
                <li className="nav-links">
                    <Link to='/' >About Us</Link>
                </li>
                <li className="nav-links">
                    <Link to='/' >Contact Us</Link>
                </li>
                <li className="nav-links">
                    <Link to='/' >Blog</Link>
                </li>
            </ul>
        </nav >
    )
}

export default Navbar;