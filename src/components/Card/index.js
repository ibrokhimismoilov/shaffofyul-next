import React, { useEffect } from 'react'
import { COLORS } from '../../fakeData/colors';
import AOS from "aos";
import 'aos/dist/aos.css';

const Card = ({ id, text, price, currency, year }) => {

    useEffect(() => {
        AOS.init()
        // AOS.init({ disable: "mobile" })
    }, [])

    const bg = { backgroundColor: COLORS[Math.floor(Math.random() * COLORS.length)].toString() };

    return (
        <div data-aos="fade-left" data-aos-duration="800" className='card'>
            <div className="card__number">
                <span style={bg}>{id}</span>
            </div>
            <p className="card__text">{text}</p>
            <div className="card__price">
                <span className='card__price-inner' dataCurrency={currency}>{price}</span>
                <span className='card__price-year'>{year}</span>
            </div>
        </div>
    )
}

export default Card
