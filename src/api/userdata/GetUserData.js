import React from "react";
import '../userdata/index.js'
import { useEffect } from "react";

const GetUserData = () => {
    let getAccess = localStorage.getItem('acces');
    let token = (JSON.parse(getAccess).access)
    console.log(token)
}

export default GetUserData;