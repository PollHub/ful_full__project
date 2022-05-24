import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { GetTest } from "../api/getTest/index.js";
import { StartTest } from "../api/startTest/index.js";
import { Link } from "react-router-dom";

function Passage() {
    const getAccess = localStorage.getItem('acces');
    const token = (JSON.parse(getAccess).access)

    // console.log(testInfo.name)

    const data = useParams();
    // console.log(data.id)

    // useEffect(() => {
    //     if (!testInfo) {
    //         const data = GetTest(JSON.stringify(data))
    //     }
    // }, [])

    useEffect(() => {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${token}`);

        var formdata = new FormData();

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            // body: formdata,
            redirect: 'follow'
        };

        fetch(`https://dfssd-first.herokuapp.com/api/test/${data.id}/`, requestOptions)
            .then(response => response.text())
            // .then(result => console.log(result))
            .then(result => localStorage.setItem('test_data', result))
            .catch(error => console.log('error', error));
    }, [])

    const [testInfo, setTestInfo] = useState(JSON.parse(localStorage.getItem('test_data')));


    return (
        <div className="passage">
            <h1 className="passage__test__title">{testInfo.name}</h1>
            <p className="passage__test__howmany__questions">{testInfo.count_question} вопросов</p>
            <div className="bottom__buttons__passage">
                <Link to={`/passage/${data.id}/question/1`}>
                    <button className="bottom__buttons__passage__next">
                        Начать 
                    </button>
                </Link>
            </div>
        </div>
    )
}


export default Passage;