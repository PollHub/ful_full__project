import React, { useState } from "react";
import { Link } from "react-router-dom";
import userLogo from '../img/PollHub.svg';
import user from '../img/userImg.svg'
import photo1 from '../img/header/1.png';
import photo5 from '../img/header/5.png';
import photo8 from '../img/header/8.png';
import photo4 from '../img/header/4.png';
import photo2 from '../img/header/2.png';
import photo3 from '../img/header/3.png';
import photo22 from '../img/22.png'

function Header() {

    // GetUserData()

    // console.log(JSON.parse(localStorage.getItem('userData')))

    return (
        <>
        <div className="header__back__logos">
                    {/* <div className="squares">
                        <div className="square__one"></div>
                    </div> */}
                    <div className="left__imgs">
                        <img src={photo4} className="left__imgs__first"/>
                        <img src={photo2} className="left__imgs__second"/>
                        <img src={photo3} className="left__imgs__third"/>
                        <img src={photo3} className="left__imgs__third"/>
                    </div>
                    <div className="middle__imgs">
                        <img src={photo8} className="middle__imgs__first"/>
                    </div>
                    <div className="logo__imgs">
                        <img src={photo1} className="logo__img__first"/>
                        <img src={photo5} className='logo__img__second'/>
                        <img src={photo1} className="logo__img__third"/>
                    </div>
                </div>
            <div className="header">
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
                            {/* <img className="header__profile__photo" src={user}/> */}
                            {/* <img className="header__profile__photo" src={JSON.parse(localStorage.getItem('userData')).user_image}/> */}
                        </Link>
                        {
                            localStorage.getItem('user__image')
                            ?
                            <Link to={'/profile'}>
                                <img className="header__profile__photo" src={localStorage.getItem('user__image')}/>
                            </Link>
                            :
                            <>
                                <Link to={'/login'}>
                                    <div className="link__autorize">
                                        Авторизоваться
                                    </div>
                                </Link>
                                <img src={photo22}/>
                            </>
                        }
                    </div>
                </div>
        </div>
        </>
    )
}

export default Header;