import React from 'react';
import '../css/styles.css';

const Banner: React.FC = () => {
    return (
        <div className="banner">
            <div className="banner-content">
                <h1>BID (Believe In Digital Marketing Services)</h1>
                <p className="tagline-top">Ignite Your Brand's Digital Spark with BID.</p>
                <p className="tagline-bottom">Empowering Brands with Digital Excellence.</p>
            </div>
            <div className="banner-logo">
                <img src="../assets/images/google-partner-logo.png" alt="Google Partner" />
            </div>
        </div>
    );
};

export default Banner;