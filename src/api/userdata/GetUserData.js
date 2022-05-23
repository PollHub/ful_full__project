import React from "react";
import {getProfile} from  '../userdata/index.js'
import { useEffect, useState } from "react";

const GetUserData = () => {
    const [data, setData] = useState()

    useEffect(() => {
        let getAccess = localStorage.getItem('acces');
        let token = (JSON.parse(getAccess).access)

        const get = getProfile(token)
        .then(response => response.text())
        // .then(result => console.log(JSON.parse(result)))
        .then(result => setData(JSON.parse(result)))
        // get.then(res => {console.log(res)}).then(result => {console.log(result)})
    }, [])

    console.log(data)
    // localStorage.setItem('user__image', data.user__image);
}

export default GetUserData;

// function GetUser() {
//     const [data, setData] = useState()

//     useEffect(() => {
//         let getAccess = localStorage.getItem('acces');
//         let token = (JSON.parse(getAccess).access)
    
//         const data = getProfile(token);
//         data.then(res => {
//             console.log(res);
//         })
//     }, [])

//     return data
// }

// export default GetUser;