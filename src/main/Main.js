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