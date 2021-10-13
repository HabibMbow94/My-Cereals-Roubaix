import React from 'react';

const Social = () => {
    return (
        <div className="social">
                <h4 className="h4_styles">#mycerels ! <br /> Suivez-nous sur les réseaux !</h4>
                <ul className="suivre">
                    <li className="facebook"><a href="https://www.facebook.com" target="_blank" rel="noreferrer"><img src="./images/facebook.jpg" alt="logo facebook" /></a></li>
                    <li className="instagram"><a href="https://www.instagram.com" target="_blank" rel="noreferrer"><img src="./images/instagram.jpg" alt="loge instagram" /></a></li>
                    <li className="snapchat"><a href="https://www.snapchat.com" target="_blank" rel="noreferrer"><img src="./images/snapchat.jpg" alt="loge instagram" /></a></li>
                </ul>
        </div>
    );
};

export default Social;