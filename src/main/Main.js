import React, { useEffect, useState } from "react";
import { getProfile } from "../api/userdata/index.js";

function Main() {

    const [userInfo, setUserInfo] = useState(undefined);

    useEffect(() => {
        if (!userInfo) {
            getUserData()
        }
    }, [])

    const getUserData = async () => {
        const data = await getProfile()
        const body = await data.json()
        console.log(body);
    }

    return (
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
                    <button className="main__center__button">Авторизоваться</button>
                </div>
            </div>
        </>
    )
}

export default Main;