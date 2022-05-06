import React, { useState } from "react";
import user from '../img/userImg.svg';
import { Link } from "react-router-dom";

function Profile() {

    // let [counter, setCounter] = useState([0,1,2,3,4])
    let [counter, setCounter] = useState([
        {id: 0, title: 'Математика / Таблица умножения 1.1', grade: "3/5", procent: 30},
        {id: 1, title: 'Математика / Тигонометрия', grade: "5/5", procent: 100},
        {id: 2, title: 'Математика / Тигонометрия', grade: "5/5", procent: 10},
        {id: 3, title: 'Математика / Тигонометрия', grade: "5/5", procent: 80}
    ])

    let [active, setActive] = useState(false);

    function show() {
        console.log(active);
        setActive(!active)
    }

    return (
        <div className="profile">
            <div className="profile__user">
                <img src={user} className="profile__user__img"/>
                <div className="profile__user__data">
                    <p className="profile__user__name">Дмитрий Шишков (Пользователь)</p>
                    <p className="profile__user__mail">SHishkov_dev2.19@st.ithub.ru</p>
                    <p className="profile__user__change" onClick={() => {show()}}>Изменить</p>
                </div>
            </div>
            <div className={"profile__last__tests"}>
                <p className="profile__last__tests__title">Недавние тесты</p>
                {counter.map(e => {
                    return (
                        <div key={e.id} className={e.procent < 60 ? 'profile__last__test medium__level__test' : 'profile__last__test high__level__test'}>
                            <div>
                                <p className="profile__last__test__title">{e.title}</p>
                            </div>
                            <div className="profile__last__test__right">
                                <p className="profile__last__test__procent">{e.procent}%</p>
                                <p className="profile__last__test__level">
                                    {e.grade}
                                </p>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="profile__button__more__div">
                {counter.length < 5 ? }
            </div>
            <div className="bottom__text">
                <p>PollHub | 2022</p>
            </div>
            <div className={active ? 'change__block' : 'close__change__block'}></div>
        </div>
    )
}

export default Profile;