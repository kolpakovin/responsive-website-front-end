import React from 'react';
import './network.css';

const Network = props => {
    return (
        <div id='network'>
            <div>
                <p>Get connected with us on social networks!</p>
            </div>
            <ul>
                <li><i className='fa fa-facebook'></i></li>
                <li><i className='fa fa-twitter'></i></li>
                <li><i className='fa fa-google-plus'></i></li>
                <li><i className='fa fa-linkedin'></i></li>
                <li><i className='fa fa-instagram'></i></li>
            </ul>
        </div>
    )
}

export default Network;