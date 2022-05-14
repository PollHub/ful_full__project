import React, { useState } from "react";
import { Link } from "react-router-dom";
import userLogo from '../img/PollHub.svg';
import user from '../img/userImg.svg'

function Header() {
    return (
        <div className="header">
            <div className="header__back__logos">
                <div className="squares">
                    <div className="square__one"></div>
                </div>
            </div>
            <div className="header__block">
                <div className="header__left">
                    <img src={userLogo} className="header__logo"/>
                    <Link to={'/'}>
                        <p className="header__main">Главная</p>
                    </Link>
                    <Link to={'/create'}>
                        <p className="header__test">Тесты</p>
                    </Link>
                    {/* <p style={{'fontFamily': 'revert', 'fontSize': 36}}>Главная</p> */}
                </div>
                <div className="header__right">
                    <Link to={'/profile'}>
                    <img className="header__profile__photo" src={user}/>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header;