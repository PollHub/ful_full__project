import React, { useEffect, useState } from "react";
import user from '../img/userImg.svg';
import { Link } from "react-router-dom";
import Header from "../header/Header";
import { getProfile } from "../api/userdata";
import { useHistory } from "react-router-dom";

function Profile() {
    const history = useHistory()

    const [user_tests, set_user_tests] = useState([])

    useEffect(() => get_test(), [])

    const get_test = () => {
        const getAccess = localStorage.getItem('acces');

        if (!getAccess) {
            history.push("/login")
            return 
        }

        const token = (JSON.parse(getAccess).access)


        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${token}`);

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("https://dfssd-first.herokuapp.com/api/tests/", requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result);
            set_user_tests(result)
        })
        .catch(error => console.log('error', error));
    }

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

    // let [userData, setUserData] = useState(JSON.parse(localStorage.getItem('user_data')))
    // console.log(userData);

    const [status, setStatus] = useState(null);

    const [userImg, setUserImg] = useState(null);

    let [userData, setUserData] = useState(undefined); 
    // {userData && console.log(userData)}

    let [userInfo, setUserInfo] = useState(undefined);
    {userInfo && console.log(userInfo)}

    const getUserData = async () => {
        const data = await getProfile()
        const body = await data.json()
        // console.log(data)
        setStatus(data.status);
        // console.log(body);
        // setUserInfo(body);
        setUserInfo(body);
        
        setUserImg(body.user_image)
    }

    const getTestUser = async () => {
        
    }

    useEffect(() => {

        const getAccess = localStorage.getItem('acces');

        if (!getAccess) {
            history.push("/login")
            return 
        }

        const token = (JSON.parse(getAccess).access)

        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${token}`);

        var requestOptions = {
            method: 'PATCH',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("https://dfssd-first.herokuapp.com/api/accounts/set-username/", requestOptions)
            .then(response => response.text())
            // .then(result => console.log(result))
            // .then(result => localStorage.setItem('user_data', result))
            .then(result => setUserData(JSON.parse(result)))
            .catch(error => console.log('error', error));

        // console.log(status)
    
        getUserData()

    }, [])

    return (
        <>
            <Header/>
            <div className="profile">
            <div className="profile__user">
                <img src={userInfo && `https://dfssd-first.herokuapp.com${userInfo.user_image}`} className="profile__user__img"/>
                <div className="profile__user__data">
                    <p className="profile__user__name">{userData && userData.first_name} {userData && userData.last_name} ({userInfo && userInfo.is_teacher ? "Учитель" : "Пользователь"})</p>
                    <p className="profile__user__mail">{userInfo && userInfo.user}</p>
                    <p className="profile__user__change" onClick={() => {show()}}>Изменить</p>
                </div>
            </div>
            <div className={"profile__last__tests"}>
                <p className="profile__last__tests__title">Недавние тесты</p>
                {user_tests.map(e => {
                    return (
                        <div key={e.id} className={e.procent < 60 ? 'profile__last__test medium__level__test' : 'profile__last__test high__level__test'}>
                            <div>
                                <p className="profile__last__test__title">{e.name}</p>
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
                {counter.length > 5 ?
                    <button className="profile__button__more">Посмотреть еще</button>
                    :
                    <div></div>
                }
            </div>
            <div className="bottom__text">
                <p>PollHub | 2022</p>
            </div>
            <div className={active ? 'change__block' : 'close__change__block'}></div>
        </div>
        </>
    )
}

export default Profile;