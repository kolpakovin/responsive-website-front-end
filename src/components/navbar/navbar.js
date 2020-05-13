import React from 'react';
import './navbar.css';

const navbar = props => {
    return (
        <nav className="navbar" >
            <a href="#" class="logo">logo</a>
            <ul class="main-nav" id="js-menu">
                <li>
                    <a href="#" class="nav-links">Home</a>
                </li>
                <li>
                    <a href="#" class="nav-links">Products</a>
                </li>
                <li>
                    <a href="#" class="nav-links">About Us</a>
                </li>
                <li>
                    <a href="#" class="nav-links">Contact Us</a>
                </li>
                <li>
                    <a href="#" class="nav-links">Blog</a>
                </li>
            </ul>
        </nav >
    )
}

export default navbar;