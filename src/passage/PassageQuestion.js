import React from "react";
import { useParams } from "react-router-dom";
import { StartTest } from "../api/startTest/index.js";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function PassageQuestion() {

    let [questionData, setQuestionData] = useState();

    const [testInfo, setTestInfo] = useState(JSON.parse(localStorage.getItem('test_data')));
    const [questionInfo, setQuestionInfo] = useState(JSON.parse(localStorage.getItem('question')));
    console.log(questionInfo)

    let data = useParams();
    // console.log(data);

    let [userAnswer, setUserAnswer] = useState(null);

    function saveAnswer(name) {
        // console.log(name);
        setUserAnswer(name);
    }

    function next() {

        const getAccess = localStorage.getItem('acces');
        const token = (JSON.parse(getAccess).access)

        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${token}`);

        var formdata = new FormData();
        formdata.append("answer", userAnswer);

        var requestOptions = {
            method: 'PATCH',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow'
        };

        fetch("https://dfssd-first.herokuapp.com/api/test/7LCUJIED2SOWE5WG/questions/1/", requestOptions)
            .then(response => response.text())
            .then(result => setQuestionInfo(JSON.parse(result)))
            // .then(result => localStorage.setItem('question', result))
            .catch(error => console.log('error', error));
    }

    useEffect(() => {
        let questionData = StartTest(data.id)
    }, [])

    return (
        <>
            <div className="passageQuestion">
                <p className="passageQuestion__top__text">{testInfo.name}</p>
                <div className="passageQuestion__block">
                    <p className="passageQuestion__block__num__question">Вопрос {questionInfo.id}</p>
                    <p className="passageQuestion__block__question__text">{questionInfo.question}</p>
                    <div className="passage__test__answer__block__father"> 
                        {questionInfo.answers.map((e) => {
                            return (
                                <div className="passage__test__answer__block" key={e}>
                                    <div className="passage__test__answer__block__clicker"></div>
                                    <p className="passage__test__answer__block__text">{e}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
                {
                    userAnswer ? <Link to={`/passage/7LCUJIED2SOWE5WG/question/${+data.qid+1}`}><button onClick={() => {next()}} className="next__button active__button__next">Ответить</button></Link> : <button disabled className="next__button">Ответить</button>
                }
            </div>
        </>
    )
}

export default PassageQuestion;