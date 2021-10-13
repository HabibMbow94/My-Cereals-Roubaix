import React from 'react';

const Footer = () => {
    return (
        <div className="footer">
            <div className="fleche"></div>
            <div className="row-small">
                <p className="col-small">
                &copy;{new Date().getFullYear()}.MyCereals. Tous droits reservées. Mensions légales. Politiques de confidentialités
                </p>
            </div>
        </div>
    );
};

export default Footer;