import React, { useState } from "react";
import user from '../img/userImg.svg';
import { Link } from "react-router-dom";

function Profile() {

    let [counter, setCounter] = useState([0,1,2,3,4])

    function show() {}

    return (
        <div className="profile">
            <div className="profile__user">
                <img src={user} className="profile__user__img"/>
                <div className="profile__user__data">
                    <p className="profile__user__name">Дмитрий Шишков (Пользователь)</p>
                    <p className="profile__user__mail">SHishkov_dev2.19@st.ithub.ru</p>
                    <p className="profile__user__change">Изменить</p>
                </div>
            </div>
            <div className="profile__last__tests">
                <p className="profile__last__tests__title">Недавние тесты</p>
                {counter.map(e => {
                    return (
                        <div key={e} className="profile__last__test">
                            <div>
                                <p className="profile__last__test__title">Математика / Таблица умножения 1.1</p>
                            </div>
                            <div>
                                <p className="profile__last__test__level">
                                    4/5
                                </p>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="profile__button__more__div">
                <button className="profile__button__more">
                    Посмотреть еще
                </button>
            </div>
            <div className="bottom__text">
                <p onClick={() => {show()}}>PollHub | 2022</p>
            </div>
        </div>
    )
}

export default Profile;