import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { GetTest } from "../api/getTest/index.js";

function Passage() {

    const [testInfo, setTestInfo] = useState(JSON.parse(localStorage.getItem('test_data')));
    console.log(testInfo.name)

    const {id} = useParams()
    // console.log(id)

    useEffect(() => {
        if (!testInfo) {
            const data = GetTest('D41HA40BEQR6IGXE')
        }
    }, [])

    console.log(testInfo)

    return (
        <div className="passage">
            <h1 className="passage__test__title">{testInfo[0].name}</h1>
            <p className="passage__test__howmany__questions">{testInfo[0].count_question} вопросов</p>
            <div className="bottom__buttons__passage">
                <button className="next__button">
                    Начать 
                </button>
            </div>
        </div>
    )
}


export default Passage;