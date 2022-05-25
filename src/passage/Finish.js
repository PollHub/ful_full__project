import React, { useEffect } from "react";
import Header from "../header/Header";
import { useParams } from "react-router-dom";
import { useState } from "react";

const Finish = () => {
    const getAccess = localStorage.getItem('acces');
    const token = (JSON.parse(getAccess).access)

    const [testInfo, setTestInfo] = useState(JSON.parse(localStorage.getItem('test_data')));
    const [finishInfo, setFinishInfo] = useState(JSON.parse(localStorage.getItem('finish_data')));
    console.log(finishInfo)

    let data = useParams();

    useEffect(() => {
        var myHeaders = new Headers();
        myHeaders.append("Authorization",`Bearer ${token}`);

        var formdata = new FormData();

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            // body: formdata,
            redirect: 'follow'
        };

        fetch(`https://dfssd-first.herokuapp.com/api/test/${data.id}/finish/`, requestOptions)
            .then(response => response.text())
            // .then(result => console.log(result))
            .then(result => localStorage.setItem('finish_data', result))
            .catch(error => console.log('error', error));
    },[])
    return (
        <>
            <Header/>
            <div className="finish__test">
                <h1 className="passage__test__title">{testInfo.name}</h1>
                <p>Вы ответили на {finishInfo.true_answers} из {finishInfo.count_questions}</p>
                <button className="finish__button__passage">Вернуться на главную</button>
            </div>
        </>
    )
}

export default Finish;