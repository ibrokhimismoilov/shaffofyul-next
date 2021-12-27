import React from 'react';
import Image from "next/image";
import Logo from "../../assets/images/svg/header-logo.svg";
import Banner from "../../assets/images/svg/banner.svg";
import Rectangle from "../../assets/images/svg/banner-rectangle.svg";

const Header = () => {
    return (
        <header className="header">
            <div className="header-top">
                <div className="auto-container">
                    <div className="header-top__top-logo">
                        <Image src={Logo} placeholder="blurDataURL" />
                    </div>
                    <div className="header-top__nav">
                        <p className='header-top__nav-text'>Статистика</p>
                        <div className="header-top__nav-icon">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header-banner">
                <div className="auto-container">
                    <div className="header-banner__content">
                        <h1>Ўзбекистондаги энг йирик йўл қурилиши харитаси статистикаси</h1>
                        <p>Барча статистик маълумотларни куриш имкони</p>
                        <a href='#contact' className="btn btn-outline">Кайта Алока</a>
                        {/* <div className="btn-group">
                            <button className="btn btn-green">Get started</button>
                        </div> */}
                    </div>
                    <div className="header-banner__img">
                        <div className="header-banner__img-bg">
                            <span className='rectangle'>
                                <Image src={Rectangle} />
                            </span>
                        </div>
                        {/* <div className="header-banner__img-bg">
                            <span className='rectangle'>
                                <Image src={Rectangle} />
                            </span>
                        </div> */}

                        <Image src={Banner} />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
