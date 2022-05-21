import React from "react";
import GetUserData from "../api/userdata/GetUserData";

function Main() {

    GetUserData()

    return (
        <>
            <div className="back_logos"></div>
            <div className="main">
                <h1>Main Window PollHub</h1>
            </div>
        </>
    )
}

export default Main;