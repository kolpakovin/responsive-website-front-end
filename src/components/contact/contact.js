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
                <div>
                    <div className='info-grig'>
                        <div className='info-item'>
                            <i className="fa fa-map fa-1x"></i><p>New York, NY 10012</p>
                        </div>
                        <div className='info-item'>
                            <i className="fa fa-building fa-1x "></i><p>Mon - Fri, 8:00-22:00</p>
                        </div>
                        <div className='info-item'>
                            <i className="fa fa-phone fa-1x"></i><p>+ 01 234 567 89</p>
                        </div>
                    </div>
                    <div>
                    <iframe src={`https://maps.google.com/maps?q=Netanya&t=&z=13&ie=UTF8&iwloc=&output=embed`}
                       style={{border:"0"}} title={'googleMaps'}/>
                    </div>
                </div>


            </div>

        </section>
    )
}

export default ContactUs;