import React from 'react';
import Circle from '../Circle';
import FooterImg from './icons/FooterImg';
import Mail from './icons/Mail';
import Phone from './icons/Phone';
import User from './icons/User';
import Write from './icons/Write';

const Contact = () => {
    return (
        <div className='contact' id='contact'>
            <Circle isBlur={true} anim="anim-x" />
            <div className="auto-container">
                <h1 className="section-title">Биз билан богланиш</h1>
                <p className="section-desc">Республика ва ҳудудий жамгармаларга республика бюджетидан ҳар йили ажратиладиган мақсадли маблаглар</p>
                <div className="contact__wrapper">
                    <form action='./sendmail.php' method='POST' className='contact__form'>
                        <div className="contact__form-group">
                            <div className="contact__form-icon"><User /></div>
                            <input name='name' type="text" placeholder='Исм' />
                            <label>Исм</label>
                        </div>
                        <div className="contact__form-group">
                            <div className="contact__form-icon"><Phone /></div>
                            <input name='phone' type="text" placeholder='Телефон' />
                            <label>Телефон</label>
                        </div>
                        <div className="contact__form-group">
                            <div className="contact__form-icon"><Mail /></div>
                            <input name='email' type="text" placeholder='Почта' />
                            <label>Почта</label>
                        </div>
                        <div className="contact__form-group textarea">
                            <div className="contact__form-icon"><Write /></div>
                            <textarea name='message' placeholder='Ҳабар' />
                            <label>Ҳабар</label>
                        </div>
                        <button type='submit' className="btn btn-icon btn-green">
                            Юбориш
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M8.75157 17.6485C8.28294 17.1799 8.28294 16.4201 8.75157 15.9515L12.703 12L8.75157 8.04853C8.28294 7.5799 8.28294 6.8201 8.75157 6.35147C9.2202 5.88284 9.98 5.88284 10.4486 6.35147L15.2486 11.1515C15.7173 11.6201 15.7173 12.3799 15.2486 12.8485L10.4486 17.6485C9.98 18.1172 9.2202 18.1172 8.75157 17.6485Z" fill="white" />
                            </svg>
                        </button>
                    </form>
                    <div className="contact__img">
                        <div className="contact__img-inner">
                            <FooterImg />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
