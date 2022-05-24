import React, { useEffect, useState } from "react";
import { getProfile } from "../api/userdata/index.js";

function Main() {

    const [userInfo, setUserInfo] = useState(undefined);

    useEffect(() => {
        if (!userInfo) {
            const data = getProfile()
            data.then(data => setUserInfo(data))
        }
    }, [])

    console.log(userInfo)

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