import React from 'react';
import './features.css'

const Features = props => {
    return (
        <main id="features">
            <h2>Best Features</h2>
            <div className="description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quasi voluptate hic provident nulla repellat facere esse molestiae ipsa
                labore porro minima quam quaerat rem, natus repudiandae debitis est sit pariatur.
            </div>
            <div className="the-features">
                <div>
                    <i class="fa fa-camera-retro fa-4x"></i>
                    <h4>Experience</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores nam, aperiam minima assumenda deleniti hic.</p>
                </div>
                <div>
                    <i class="fa fa-heart fa-4x"></i>
                    <h4>Happiness</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores nam, aperiam minima assumenda deleniti hic.</p>
                </div>
                <div>
                    <i class="fa fa-bicycle fa-4x"></i>
                    <h4>Adventure</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores nam, aperiam minima assumenda deleniti hic.</p>
                </div>
            </div>
            <div className="containter-border"></div>
        </main>
    )
}

export default Features;