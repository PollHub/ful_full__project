import React, { useState, useEffect } from "react";
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
import { getProfile } from "../api/userdata";


function Header() {

    const [userInfo, setUserInfo] = useState(undefined);
    console.log(userInfo)

    const [status, setStatus] = useState(null);

    const [userImg, setUserImg] = useState(null);
    console.log(userImg)

    useEffect(() => {
        if (!userInfo) {
            getUserData()
        }
    }, [])

    const getUserData = async () => {
        const data = await getProfile()
        const body = await data.json()
        // console.log(data)
        setStatus(data.status);
        // console.log(body);
        setUserInfo(body)
        // setUserImg(body.user_image)
    }

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
                        {
                            status === 200 
                            ?
                            <Link to={'/create'}>
                                <p className="header__test">Тесты</p>
                            </Link> 
                            :
                            <></>
                        }
                        {/* <p style={{'fontFamily': 'revert', 'fontSize': 36}}>Главная</p> */}
                    </div>
                    <div className="header__right">
                        {/* <Link to={'/profile'}>
                            <img className="header__profile__photo" src={JSON.parse(localStorage.getItem('userData')).user_image}/>
                        </Link> */}
                        {/* {
                            localStorage.getItem('user__image')
                            ?
                            <Link to={'/profile'}>
                                <img className="header__profile__photo" src={localStorage.getItem('user__image')}/>
                            </Link>
                            :
                            <>
                                {
                                    status === 200 
                                    ?
                                    <>
                                        <Link to={'/create'}>
                                            <div className="link__autorize">
                                                Создать Тест
                                            </div>
                                        </Link>
                                    <Link to={'/profile'}><img src={userImg && `https://dfssd-first.herokuapp.com${userImg}`}/></Link>
                                    </>
                                    :
                                    <>
                                        <Link to={'/login'}>
                                            <div className="link__autorize">
                                                Авторизоваться
                                            </div>
                                        </Link>
                                        <Link to={'/profile'}><img src={userImg && `https://dfssd-first.herokuapp.com${userImg}`}/></Link>
                                    </>
                                }
                            </>
                        } */}
                        {
                            // userInfo && 
                            userInfo
                            ?
                            <>
                            <Link to={'/create'}>
                                    <div className="link__autorize">
                                        Создать тест
                                    </div>
                                </Link>
                                <Link to={'/profile'}><img className="header__profile__photo" src={`https://dfssd-first.herokuapp.com${userInfo.user_image}`}/></Link>
                            </>
                            :
                            <>
                                 <Link to={'/login'}>
                                    <div className="link__autorize">
                                        Авторизоваться
                                    </div>
                                </Link>
                                <img src={userLogo}/>
                            </>
                        }
                    </div>
                </div>
        </div>
        </>
    )
}

export default Header;