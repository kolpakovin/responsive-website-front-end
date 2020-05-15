import React from 'react';
import './footer.css';

const Footer = props => {
    return (
        <footer id='footer'>
            <ul className='footer-items'>
                <li>
                    <ul className='footer-item'>
                        <li><h6>COMPANY NAME</h6></li>
                        <li className='title-border'></li>
                        <li><p>Here you can use rows and columns here to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p></li>
                    </ul>
                </li>
                <li>
                    <ul className='footer-item'>
                        <li><h6>PRODUCTS</h6></li>
                        <li className='title-border'></li>
                        <li><p>Some Product</p></li>
                        <li><p>Another Product</p></li>
                        <li><p>Product 234</p></li>
                        <li><p>Product 12</p></li>
                    </ul>
                </li>
                <li>
                    <ul className='footer-item'>
                        <li><h6>USEFUL LINKS</h6></li>
                        <li className='title-border'></li>
                        <li><p>Lorem ipsum</p></li>
                        <li><p>Lorem ipsum</p></li>
                        <li><p>Lorem ipsum</p></li>
                        <li><p>Lorem ipsum</p></li>
                    </ul>
                </li>
                <li>
                    <ul className='footer-item'>
                        <li><h6>CONTACTS</h6></li>
                        <li className='title-border'></li>
                        <li><p>Lorem ipsum</p></li>
                        <li><p>Lorem ipsum</p></li>
                        <li><p>Lorem ipsum</p></li>
                        <li><p>Lorem ipsum</p></li>
                    </ul>
                </li>
            </ul>
        </footer>
    )
}

export default Footer;