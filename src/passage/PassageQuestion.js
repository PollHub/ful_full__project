import React from "react";
import { useParams } from "react-router-dom";
import { StartTest } from "../api/startTest/index.js";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import Header from "../header/Header.js";

function PassageQuestion() {

    const history = useHistory();

    const [testInfo, setTestInfo] = useState(JSON.parse(localStorage.getItem('test_data')));

    const [questionInfo, setQuestionInfo] = useState(JSON.parse(localStorage.getItem('question')));
    console.log(questionInfo)
    // localStorage.setItem('questionId', questionInfo.id)


    let data = useParams();
    // console.log(data.qid);


    let [userAnswer, setUserAnswer] = useState(null);
    // console.log(userAnswer)

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

        let testId = null

        fetch(`https://dfssd-first.herokuapp.com/api/test/${data.id}/questions/${data.qid}/`, requestOptions)
            .then(response => response.text())
            // .then(result => console.log(result))
            // .then(result => localStorage.setItem('question', result))
            // .then(result => setQuestionInfo(...[JSON.parse(result)]))
            .then(result => {
                console.log(typeof(result))
                console.log(result)
                if (result === JSON.stringify({'questions': "all answered"})) {
                    // console.log('You finished test')
                    history.push(`/passage/${data.id}/finish`)
                } else {
                    setQuestionInfo(...[JSON.parse(result)])
                    // console.log(result)
                    console.log(JSON.parse(result))
                    testId = JSON.parse(result).id
                    // console.log(testId)
                    history.push(`/passage/${data.id}/question/${testId}`)
                    // console.log(`/passage/${data.id}/question/${testId}`)
                    setUserAnswer(null)
                }
            })
            .catch(error => console.log('error', error));

        // setQuestionInfo(JSON.parse(localStorage.getItem('question')))
        // /passage/${data.id}/question/${questionInfo.id}
    }

    

    return (
        <>
            <Header/>
            <div className="passageQuestion">
                <p className="passageQuestion__top__text">{testInfo.name}</p>
                <div className="passageQuestion__block">
                    <p className="passageQuestion__block__num__question">Вопрос {questionInfo.id}</p>
                    <p className="passageQuestion__block__question__text">{questionInfo.question}</p>
                    <div className="passage__test__answer__block__father"> 
                        {questionInfo.answers.map((e, g) => {
                            return (
                                <div className="passage__test__answer__block" key={e}>
                                    {userAnswer === g ? <div onClick={() => setUserAnswer(null)} className="passage__test__answer__block__clicker__active"></div> : <div onClick={() => setUserAnswer(g)} className="passage__test__answer__block__clicker"></div>}
                                    <p className="passage__test__answer__block__text">{e}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="bottom__buttons__passage__question">
                    {
                        userAnswer 
                            ? 
                        // <Link to={`/passage/${data.id}/question/${questionInfo.id}`}>
                            <button onClick={() => {next()}} className="next__button active__button__next">Ответить</button>
                        /* </Link> */
                            : 
                        <button disabled className="next__button">Ответить</button>
                    }
                </div>
            </div>
        </>
    )
}

export default PassageQuestion;