import './Header.scss';
import React from 'react'
import logo from './../../logo.svg';


function Header() {
    return (
        <header className="site-header">
            <div className="site-header__container">
                <div className="site-header__title-wrapper">
                    <img src={logo} alt="" className="site-header__logo"/>
                    <h1 className="site-header__subtitle">IJsselland-Twente</h1>
                </div>
                <div className="site-header__social">
                    <img className="site-header__social-icon" src="https://sitejerk.com/images/facebook-transparent-icon-7.png" alt="Facebook"/>
                    <img className="site-header__social-icon" src="http://www.freelogovectors.net/wp-content/uploads/2018/04/twitter-logo-new_freelogovectors.net_.png" alt="twitter"/>
                    <img className="site-header__social-icon" src="https://nl.snappet.org/wp-content/uploads/2018/02/Linkedin-2.png" alt="twitter"/>
                </div>
            </div>
        </header>
    );
}

export default Header;
