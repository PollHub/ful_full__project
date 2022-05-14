import React from "react";
import { useState } from "react";
import closeImg from '../img/11.png';
import addButton from '../img/15.png';
import answer from '../img/16.png';
import photo17 from '../img/17.png';
import photo18 from '../img/18.png';

const Questions = () => {

    function addAnswer(name) {
        // console.log(id)
        let local = answerCounter;
        let que = {id: id()}
        setAnswerCounter(34)
        local.forEach((e) => {
            if (name === e.id) {
                // console.log(true)
                e.answers.push(que)
            }
        })
        setAnswerCounter([...local]);
        // setNum(id())
        // console.log(local)
    }

    function id() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }

    function addQuestion() {
        setAnswerCounter([
            ...answerCounter,
            {
                id: id(),
                answers: [{id: id()}]
            }
        ])
        // console.log(answerCounter)
    }

    let [questionElemnt, setQuestionElemnt] = useState();

    let [answersElement, setAnswersElement] = useState();

    let [answerCounter, setAnswerCounter] = useState( 
        [{ id: id(), answers: [{id: id()}] }]     
    );

    let [questionInput, setQuestionInput] = useState('');

    let [questions, setQuestions] = useState([{id: id()}])


    return (
        <div className="Create">
            <p className="create__title">Создание теста</p>
            {answerCounter.map((i, g) => {
                return (
                <div key={i.id} className="create__question__block">
                <div className="create__question__block__top">
                    <p>Вопрос {g+1}</p>
                    <img src={closeImg}/>
                </div>
                    <div className="create__question__block__inputs">
                        <input className="create__question__block__inputs__input" placeholder="Введите Вопрос"/>
                        <select className="create__question__block__inputs__select">
                            <option>A</option>
                            <option>B</option>
                            <option>C</option>
                        </select>
                    </div>
                    <div className="create__question__block__answers">
                        {i.answers.map((i) => {
                            return (
                                <div className="create__question__block__answers__answer">
                                    <div className="create__question__block__answers__answer__left">
                                        <img src={answer}/>
                                        <p>первый ответ</p>
                                    </div>
                                    <div className="create__question__block__answers__answer__right">
                                        <img src={closeImg}/>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className="create__question__block__bottom">
                        <button onClick={() => addAnswer(i.id)} className="create__question__block__bottom__left">
                            Добавить
                        </button>
                        <div className="create__question__block__bottom__right">
                            <img className="create__question__block__bottom__right__img" src={photo17}/>
                            <img src={photo18}/>
                        </div>
                    </div>
                </div>
                )
            })}
            <div className="addButton">
                <img src={addButton} onClick={() => {addQuestion()}}/>
            </div>
    </div>
    )
}

export default Questions;