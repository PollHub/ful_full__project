import { useState } from "react";

export const GetTest = async (link) => {
    const getAccess = localStorage.getItem('acces');
    const token = (JSON.parse(getAccess).access)

    // const myHeaders = new Headers();
    // myHeaders.append("Authorization", `Bearer ${token}`);

    // var requestOptions = {
    //     method: 'GET',
    //     headers: myHeaders,
    //     redirect: 'follow'
    // };

    // const response = await fetch(`https://dfssd-first.herokuapp.com/api/test/${link}/`, requestOptions)
    // .then(result => console.log(result))

    // return response


    var myHeaders = new Headers();
    // myHeaders.append("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjUzMzU2MDA5LCJqdGkiOiIyN2EzOTIxNzdlZGY0MDY3ODVlOTk1YzY5N2IyZDVkMiIsInVzZXJfaWQiOjN9.rkxKjD1-fzMvc8GcK6jThJnZOJ4EHiMn7Pb31yRtCSU");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var formdata = new FormData();
    formdata.append("open", "true");

    var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    // body: formdata,
    redirect: 'follow'
    };

    fetch(`https://dfssd-first.herokuapp.com/api/test/${link}/`, requestOptions)
        .then(response => response.text())
        // .then(result => console.log(result))
        .then(result => localStorage.setItem('test_data', result))
        .catch(error => console.log('error', error));

}