import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { GetTest } from "../api/getTest/index.js";
import { StartTest } from "../api/startTest/index.js";
import { Link } from "react-router-dom";
import Header from "../header/Header.js";

function Passage() {
    const getAccess = localStorage.getItem('acces');
    const token = (JSON.parse(getAccess).access)

    // console.log(testInfo.name)

    const data = useParams();

    useEffect(() => {
        let get = GetTest(data.id)
        // let question = StartTest(data.id)
    }, [])

    function start() {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${token}`);

        var formdata = new FormData();
        // formdata.append("answer", "0");

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            // body: formdata,
            redirect: 'follow'
        };

        fetch("https://dfssd-first.herokuapp.com/api/test/7LCUJIED2SOWE5WG/start/", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));

        let question = StartTest(data.id)
    }

    const [testInfo, setTestInfo] = useState(JSON.parse(localStorage.getItem('test_data')));


    return (
        <>  
            <Header/>
            <div className="passage">
            <h1 className="passage__test__title">{testInfo.name}</h1>
            <p className="passage__test__howmany__questions">{testInfo.count_question} вопросов</p>
            <p className="passage__test__howmany__questions">{testInfo.time_work} минут</p>
            <div className="bottom__buttons__passage">
                <Link onClick={() => {start()}}  to={`/passage/${data.id}/question/2`}>
                    <button className="bottom__buttons__passage__next">
                        Начать 
                    </button>
                </Link>
            </div>
        </div>
        </>
    )
}


export default Passage;