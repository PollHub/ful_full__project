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

        fetch("https://dfssd-first.herokuapp.com/api/accounts/profile/None/", requestOptions)
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
        // console.log(active);
        setActive(!active)
    }

    // let [userData, setUserData] = useState(JSON.parse(localStorage.getItem('user_data')))
    // console.log(userData);

    const [nameChange, setNameChnge] = useState('')
    const [surnameNameChange, setSurnameNameChnge] = useState('')
    const [emailChnge, setEmailChnge] = useState('')

    const [status, setStatus] = useState(null);

    const [userImg, setUserImg] = useState(null);

    let [userData, setUserData] = useState(undefined); 
    // {userData && console.log(userData)}

    let [userInfo, setUserInfo] = useState(undefined);
    // {userInfo && console.log(userInfo)}

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

    function changeUserDataName() {

        const getAccess = localStorage.getItem('acces');
        const token = (JSON.parse(getAccess).access)

        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${token}`);

        var formdata = new FormData();
        formdata.append("first_name", nameChange);
        formdata.append("last_name", surnameNameChange);

        var requestOptions = {
            method: 'PATCH',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow'
        };

        fetch("https://dfssd-first.herokuapp.com/api/accounts/set-username/", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }

    function changeUserMail() {
        const getAccess = localStorage.getItem('acces');
        const token = (JSON.parse(getAccess).access)

        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${token}`);

        var formdata = new FormData();
        formdata.append('username', emailChnge)

        var requestOptions = {
            method: 'PATCH',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow'
        };

        fetch("https://dfssd-first.herokuapp.com/api/accounts/profile/", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }

    function changeUserData() {
        changeUserDataName()
        changeUserMail()
    }

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
                {user_tests && user_tests.length > 0 && user_tests.map((e, g) => {
                    return (
                        <div key={g} className={e.procent < 60 ? 'profile__last__test medium__level__test' : 'profile__last__test high__level__test'}>
                            <div>
                                <p className="profile__last__test__title">{e.name}</p>
                            </div>
                            <div className="profile__last__test__right">
                                <p className="profile__last__test__procent">{e.procent ? e.procent : 0}%</p>
                                <p className="profile__last__test__level">
                                    {e.count_students ? e.count_students : 'Тест пока никто не прошел'}
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
            <div className={active ? 'change__block' : 'close__change__block'}>
                <p className="change__block__title">Изменить профиль</p>
                <p className="close__change__block__button" onClick={() => {show()}}>X</p>
                <div className="change__block__up">
                    {/* <img src={`https://dfssd-first.herokuapp.com${userInfo.user_image}`}/> */}
                </div>
                <div className="change__block__name">
                    <p className="change__block__up__title">Имя</p>
                    <input onChange={(e) => {setNameChnge(e.target.value)}} defaultValue={userData && userData.first_name} className="change__block__up__input"/>
                </div>
                <div className="change__block__name">
                    <p className="change__block__up__title">Фамилия</p>
                    <input onChange={(e) => {setSurnameNameChnge(e.target.value)}} defaultValue={userData && userData.last_name} className="change__block__up__input"/>
                </div>
                <div className="change__block__name">
                    <p className="change__block__up__title">Почта</p>
                    <input onChange={(e) => {setEmailChnge(e.target.value)}} defaultValue={userInfo && userInfo.user} className="change__block__up__input"/>
                </div>
                <div className="save__changes__button__father">
                    <button onClick={() => {changeUserData()}} className="save__changes__button">Сохранить Изменения</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default Profile;