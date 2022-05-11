import React from "react";
import { useState } from "react";
import closeImg from '../img/11.png';

const Questions = () => {

    function id() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }

    let [questionElemnt, setQuestionElemnt] = useState();

    let [answersElement, setAnswersElement] = useState();

    let [answerCounter, setAnswerCounter] = useState( 
        [{ id: id(), answers: [{id: id()}] }, { id: id(), answers: [{id: id()}] }]     
    );

    let [questionInput, setQuestionInput] = useState('');

    let [questions, setQuestions] = useState([{id: id()}])


    return (
        <div className="Create">
            <p className="create__title">Создание теста</p>
            {answerCounter.map((i) => {
                return (
                <div key={i.id} className="create__question__block">
                <div className="create__question__block__top">
                    <p>Вопрос 1</p>
                    <img src={closeImg}/>
                </div>
                    <div className="create__question__block__inputs">
                        <input className="create__question__block__inputs__input"/>
                        <select className="create__question__block__inputs__select">
                            <option>A</option>
                            <option>B</option>
                            <option>C</option>
                        </select>
                    </div>
                    <div className="create__question__block__answers">
                        <div className="create__question__block__answers__answer">
                            <p>Ответ 1</p>
                            <img src={closeImg}/>
                        </div>
                    </div>
                    <div className="create__question__block__bottom">
                        <div className="create__question__block__bottom__left"></div>
                        <div className="create__question__block__bottom__right">
                            <img src={closeImg}/>
                            <img src={closeImg}/>
                        </div>
                    </div>
                </div>
                )
            })}
    </div>
    )
}

export default Questions;