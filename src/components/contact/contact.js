import React from 'react';
import './contact.css';

const ContactUs = props => {
    return (
        <section id="contact-us">
            <h2>Contact Us</h2>
            <div className='contact-container'>
                <form className='contact-form'>
                    <div className="form-section"> <i className="fa fa-user prefix"></i>
                        <input type="text" id="form3" placeholder="Your name" />
                    </div>
                    <div className="form-section"> <i className="fa fa-envelope prefix"></i>
                        <input type="text" id="form3" placeholder="Your email" />
                    </div>
                    <div className="form-section"> <i className="fa fa-tag prefix"></i>
                        <input type="text" id="form3" placeholder="Subject" />
                    </div>
                    <div className="text-area">
                        <textarea placeholder="Your Message" rows="4" />
                    </div>
                    <button>SEND</button>
                </form>
                <div className='info-grig'>HI</div>
            </div>

        </section>
    )
}

export default ContactUs;