import Image from 'next/image';
import React from 'react';
import Logo from "../../assets/images/svg/footer-logo.svg";
import OKS from "../../assets/images/svg/oks-logo.svg";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="auto-container">
                <div className="footer__logo">
                    <Image src={Logo} placeholder="blurDataURL" />
                    <span>SHAffofyul.uz</span>
                </div>
                <div className="footer__logo">
                    <Image src={OKS} placeholder="blurDataURL" />
                </div>

            </div>
        </footer>
    )
}

export default Footer
