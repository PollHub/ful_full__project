import React, { useState, useHistory } from "react";
import Questions from "./Questions";
import closeImg from '../img/11.png';
import addButton from '../img/15.png';
import answer from '../img/16.png';
import photo17 from '../img/17.png';
import photo18 from '../img/18.png';
import photo19 from '.././img/19.png';


function Create() {

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

    let [subject, setSubject] = useState('Выберите предмет');

    let [list, setList] = useState(false);

    let [subjects, setSubjects] = useState(['Математика', "Англ.Яз", "История", "Питон"])

    let [title, setTitle] = useState('');

    // let history = useHistory()

    let [page, setPage] = useState(1);

    if (page === 0) {
        return (
            <div className="Create">
                <p className="create__title">Создание теста</p>
                {
                    list === false 
                    ?
                    <div className="first__create__upper">
                        <p className="discipline__name">Название дисциплины</p>
                        <div className="form-group">
                            <div className="form-group-block">
                                <div className="form-group-left">
                                    <p>{subject}</p>
                                </div>
                                <div className="form-group-right">
                                    <img className="form-group-right-img" src={photo19} onClick={() => {
                                        setList(true)
                                    }}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    <>
                        <p className="discipline__name">Название дисциплины</p>
                        <div className="form__group__list">
                            <div className="form__group__list__top">
                                <div className="form__group__list__top__left">
                                    <p>{subject}</p>
                                </div>
                                <div className="form__group__list__top__right">
                                    <img className="form-group-right-img" src={photo19} onClick={() => {
                                        setList(false)
                                    }}/>
                                </div>
                            </div>
                            <div className="form__group__list__list">
                                {subjects.map((i) => {
                                    return (
                                        <p onClick={() => {setSubject(i)}} key={i} className="form__group__list__list__text">{i}</p>
                                    )
                                })}
                            </div>
                        </div>
                    </>
                }
                <div className="test__name__block">
                    <p className="test__name">Название теста</p>
                    <input onChange={(e) => setTitle(e.target.value)} className="name__test__input" placeholder="Ретушь фотографий 1.1"/>
                </div>
                <div className="first__bottom__buttons">
                        {
                            title === '' && subject != 'Выберите предмет'
                            ?
                            <button disabled className="next__button" onClick={() => {setPage(1)}}>
                                Далее
                            </button>
                            :
                            <button className="next__button" onClick={() => {setPage(1)}}>
                                Далее
                            </button>
                        }
                </div>
            </div>
        )
    } else if (page === 1) {
        return(
            <div>
                {/* <Questions/> */}
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
                                {i.answers.map((i, e) => {
                                    return (
                                        <div className="create__question__block__answers__answer">
                                            <div className="create__question__block__answers__answer__left">
                                                <img src={answer}/>
                                                <p>{e+1} ответ</p>
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
                <div className="bottom__buttons">
                    <button className="backk__button" onClick={() => setPage(0)}>Назад</button>
                    <button className="next__button" onClick={() => setPage(2)}>Далее</button>
                </div>
            </div>
        )
    } else if (page === 2) {
        return (
            <div>
                <div className="Create">
                    <div className="more__block">
                        <div className="more__block__left">
                            <p className="more__block__pass">Пропустить задание</p>
                        </div>
                        <div className="more__block__right">
                            <input type='radio'/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Create;



{/* <div className="back__button">
    <button onClick={() => {setPage(0)}}>
        Назад
    </button>
</div>
<div className="further__button">
    <button onClick={() => {setPage(2)}}>
        Далее
    </button>
</div> */}