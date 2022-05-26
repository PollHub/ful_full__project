import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProfile } from "../api/userdata/index.js";
import Header from "../header/Header.js";

import { InfinitySpin } from "react-loader-spinner"

function Main() {

    const [renderIs, setrenderIs] = useState(0);
    const [userInfo, setUserInfo] = useState("qwsedfg");

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
      
      // // console.log(data)
      // setStatus(data.status);
      // // console.log(body);
      // // setUserInfo(body);
      
      // console.log(setUserInfo)
      //   console.log(setUserInfo)
      //   console.log(setUserInfo)
      //   console.log(setUserInfo)
      //   console.log(setUserInfo)
      //   console.log(setUserInfo)

      // setUserInfo(...{body});
      // setUserImg(body.user_image)
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
        setrenderIs(23)
      })
        
      }, [])


    return (
        <>
            <Header/>
            {status == null ? <div className="loading_main" > <InfinitySpin color="grey" /> </div>: 
            status === 200  ?  <div>
            {userInfo && userInfo.is_teacher ?
              <div>Для учителя </div>
              :
              <div>Для ученика </div>
          }
              <p>Ваши тесты</p>
            </div> :
            <>

          
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
            <div style={{visibility: "hidden"}} >{renderIs}</div>
            </>
            }
        </>
    )
}

export default Main;