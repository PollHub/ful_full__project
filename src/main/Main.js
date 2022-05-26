import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProfile } from "../api/userdata/index.js";
import Header from "../header/Header.js";

import { InfinitySpin } from "react-loader-spinner"

function Main() {

    const [renderIs, setrenderIs] = useState(0);
    const [userInfo, setUserInfo] = useState("qwsedfg");

    const [teachersTests, setTeacherTests] = useState();

    const [status, setStatus] = useState(null);

    const [userImg, setUserImg] = useState(null);
    // console.log(status)


    const getUserData = () => {
      getProfile()
        .then(res => res.json())
        .then(res => {
          console.log(res);
          console.log(res)
        })
  }


    function getTests() {
      const getAccess = localStorage.getItem('acces');
      const token = (JSON.parse(getAccess).access)

      var myHeaders = new Headers();
      myHeaders.append("Authorization", `Bearer ${token}`);

      var formdata = new FormData();

      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        // body: formdata,
        redirect: 'follow'
      };

      fetch("https://dfssd-first.herokuapp.com/api/main/", requestOptions)
        .then(response => response.text())
        .then(result => {
          setTeacherTests(JSON.parse(result))
          // console.log(result)
        
        })
        .catch(error => console.log('error', error));
    }

    useEffect(() => {
      getProfile()
      .then(res => {
          setStatus(res.status)
          return res.json()
        })
      .then(res => {
        console.log(res);
        
        console.log("res")
        console.log(res)
        console.log(res)
        console.log(res)
        console.log(typeof res)

        setUserInfo(res)
        getTests(res)
        setrenderIs(23)
      })
        
      }, [])

      console.log(teachersTests && teachersTests)

    let [counter, setCounter] = useState([
        {id: 0, title: 'Математика / Таблица умножения 1.1', grade: "3/5", procent: 30},
        {id: 1, title: 'Математика / Тигонометрия', grade: "5/5", procent: 100},
        {id: 2, title: 'Математика / Тигонометрия', grade: "5/5", procent: 10},
        {id: 3, title: 'Математика / Тигонометрия', grade: "5/5", procent: 80}
    ])

    // api/main/subject/<str:id>/

    return (
        <>
            <Header/>
            {/* {!localStorage.getItem('access') && <>
                <div className="back_logos">
                <div className="left_top_circle">
                    <div className="left_top_circle__circle"></div>
                </div>
                <div className="restangle__main">
                    <div className="restangle_1 elemrest"></div>
                    <div className="restangle_2 elemrest"></div>
                    <div className="restangle_3 elemrest"></div>
                    <div className="restangle_4 elemrest"></div>
                    <div className="restangle_5 elemrest"></div>
                    <div className="restangle_6 elemrest"></div>
                    <div className="restangle_7 elemrest"></div>
                    <div className="restangle_8 elemrest"></div>
              </div>
              <div className="right_up_quads__main">
                <div className="right_up_quad1"></div>
                <div className="right_up_quad2"></div>
              </div>
              <div className="right_bottom_quad__main">
                <div className="right_bottom_quad1 rbq"></div>
                <div className="right_bottom_quad2 rbq">&#9650;</div>
                <div className="right_bottom_quad3 rbq"></div>
              </div>
              <div className="right_bottom_quad__main__second">
                <div className="right_bottom_quad1 rbq"></div>
                <div className="right_bottom_quad2 rbq">&#9650;</div>
                <div className="right_bottom_quad3 rbq"></div>
              </div>
              <div className="left_bottom_quad__main">
                <div className="left_bottom_quad2 lbq__main"></div>
                <div className="left_bottom_quad3__main lbq__main"></div>
              </div>
              <div className="right_up_quads__main__second">
                <div className="right_up_quad1_main"></div>
                <div className="right_up_quad2_main"></div>
              </div>
              <div className="left_bottom_quad__main__second">
                <div className="left_bottom_quad2__main__second lbq__main__second"></div>
                <div className="left_bottom_quad3__main__second lbq__main__second"></div>
              </div>
              <div className="right_bottom_quad__main__third">
                  <div className="right_bottom_quad1 rbq"></div>
                  <div className="right_bottom_quad2 rbq">&#9650;</div>
                  <div className="right_bottom_quad3 rbq"></div>
              </div>
            </div>
            <div className="main">
                <div className="main__center">
                    <p className="main__center__first__text">Добро пожаловать в PollHub</p>
                    <p className="main__center__second__text">Войдите или зарегистрируйтесь на нашей платформе</p>
                    <Link to={'/login'}><button className="main__center__button">Авторизоваться</button></Link>
                </div>
            </div>
            </>} */}
            {status == null ? <div className="loading_main" > <InfinitySpin color="grey" /> </div>: 
            status === 200  &&  <div>
            {userInfo && userInfo.is_teacher ?
              <div className="main__for__user">
                <p className="main__for__user__title">Мои дисциплины</p>
                <div className="main__for__user__map">
                  {teachersTests ? teachersTests.map((i,g) => {
                    return (
                      <div className="main__for__user__subjets" key={g}>
                        <p className="main__for__user__subjets__name">{i.subject}</p>
                        <p className="main__for__user__subjets__count">{i.count} тест</p>
                        <Link to={`forpopap/${i.subject}`}>
                          <button className="main__for__user__subjets__button__to">Перейти</button>
                        </Link>
                      </div>
                    )
                  })
                  :
                  <Link to={'/create'}><button>Создать Тест</button></Link>
                }
                </div>
              </div>
              :
              <div>Для ученика </div>
          }
            </div> 
            }
        </>
    )
}

export default Main;