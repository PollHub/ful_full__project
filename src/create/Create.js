import React, { useState, useHistory } from "react";
import Questions from "./Questions";
import closeImg from '../img/11.png';
import addButton from '../img/15.png';
import answer from '../img/16.png';
import photo17 from '../img/17.png';
import photo18 from '../img/18.png';
import photo19 from '.././img/19.png';
import photo20 from '.././img/20.png';
import photo21 from '.././img/21.png';


function Create() {

    function trueButton(id, blockId) {
        let questionBlocks = document.querySelectorAll('.create__question__block');
        let copy = answerCounter

        copy.map((i) => {
            if (i.id === blockId) {
                // console.log(i.answers)
                i.true__answer = id
            }
        })
        setAnswerCounter([...copy])
    }

    function DelAnswer(idd, name) {
        let counter = null
        let questions = answerCounter;
        let object = null
        answerCounter.map((i, n) => {
            if (i.id === name) {
                object = i
                counter = n
            }
        })
        // console.log(object)
        let n = object.answers.filter(e => e.id !== idd)
        questions[counter].answers = n
        setAnswerCounter([...questions])
        // setNum(id())

        console.log(answerCounter)
    }

    function DelQuestion(name) {
        let change = answerCounter.filter(e => e.id !== name)
        console.log(answerCounter)
        setAnswerCounter(change)
    }

    function addAnswer(name) {
        let local = answerCounter;
        let que = {id: id(), name: 'Ответ'}
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
        console.log(answerCounter)
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
                title: 'Вопрос',
                true__answer: null,
                answers: [{id: id(), name: 'Ответ'}]
            }
        ])
        // console.log(answerCounter)
    }

    const [answers, setAnswers] = useState([]);

    const [questionElemnt, setQuestionElemnt] = useState();

    const [answersElement, setAnswersElement] = useState();

    let [answerCounter, setAnswerCounter] = useState( 
        [
            {
                id: id(),
                title: 'Вопрос',
                true__answer: null,
                answers: [
                    {
                        name: 'Ответ',
                        id: id()
                    }
                ]
            }
        ]     
    );

    let [subject, setSubject] = useState('Выберите предмет');

    let [list, setList] = useState(false);


    let [subjects, setSubjects] = useState(['Математика', "Англ.Яз", "История", "Питон"])

    let [title, setTitle] = useState('');

    // let history = useHistory()

    let [page, setPage] = useState(0);

    function text(id, blockId, text) {
        let copy = answerCounter

        copy.map((i) => {
            if (i.id === blockId) {
                i.answers.map((e) => {
                    if(e.id === id) {
                        e.name = text
                    }
                })
            }
        })
        setAnswerCounter([...copy])
    }

    function questionText(blockId, text) {
        let copy = answerCounter;

        copy.map((i) => {
            if (i.id === blockId) {
                i.title = text
            }
        })
    }

    // Settimgs function and data

    const [settingsActive, setSettingsActive] = useState(false);

    const [passTask, setPassTask] = useState(false);

    const [editTest, setEditTest] = useState(false);

    const [timerTest, setTimerTest] = useState(false);

    const [mixTest, setMixTest] = useState(false);

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
            <>
            {settingsActive && <div className="test__settings__block__father">
            <div className={settingsActive ? 'test__settings__block' : 'close__test__settings__block'}>
                    <div className="test__settings__block__top">
                        <p className="test__settings__block__top__title">Настройки теста</p>
                        <img src={photo20} onClick={() => {setSettingsActive(false)}} className="test__settings__block__top__close"/>
                    </div>
                    <div className="pass__question__checkbox">
                        <div className="pass__question__checkbox__left">
                            <p className="pass__question__checkbox__text">
                                Пропустить задание
                            </p>
                        </div>
                        <div className="pass__question__checkbox__right">
                            <input onClick={() => {setPassTask(!passTask)}} className="pass__question__checkbox__input" type="checkbox"/>
                            <p className="under__checkbox__text under__checkbox__text__margin">{passTask ? 'Вкл' : 'Выкл'}</p>
                        </div>
                    </div>
                    <div className="editing__test__checkbox">
                        <div className="editing__test__checkbox__left">
                            <p className="editing__test__checkbox__text">Редактирование</p>
                        </div>
                        <div className="editing__test__checkbox__right">
                            <input className="editing__test__checkbox__input" type="checkbox"/>
                            <p className="under__checkbox__text under__checkbox__text__margin">Выкл</p>
                        </div>
                    </div>
                    <div className="timer__test__checkbox">
                        <div className="timer__test__checkbox__left">
                            <p className="timer__test__checkbox__left__text">Таймер</p>
                        </div>
                        <div className="timer__test__checkbox__right">
                            <input onClick={() => {setTimerTest(!timerTest)}} className="timer__test__checkbox__right__input" type="checkbox"/>
                            <p className="under__checkbox__text">{timerTest ? "Вкл" : "Выкл"}</p>
                        </div>
                    </div>
                    <div className="mix__test__checkbox">
                        <div className="mix__test__checkbox__left">
                            <p className="mix__test__checkbox__left__text">Перемешать вопросы</p>
                        </div>
                        <div className="mix__test__checkbox__right">
                            <input onClick={() => {setMixTest(!mixTest)}} className="mix__test__checkbox__right__input" type="checkbox"/>
                            <p className="under__checkbox__text">{mixTest ? 'Вкл' : 'Выкл'}</p>
                        </div>
                    </div>
                    <div className={timerTest ? 'timer__test__checkbox__setting' : "timer__test__checkbox__setting__close"}>
                        <div className="timer__test__checkbox__setting__left">
                            <p className="timer__test__checkbox__setting__left__text">45 минут</p>
                        </div>
                        <div className="timer__test__checkbox__setting__right">
                            <img src={photo21}/>
                        </div>
                    </div>
                    <div className={mixTest ? 'mix__test__checkbox__setting' : 'mix__test__checkbox__setting__close'}>
                        <input className="mix__test__checkbox__setting__input" placeholder="0"/>
                        <p className="mix__test__checkbox__setting__text">из {answerCounter.length}</p>
                    </div>
                    <div className="number__attempts">
                        <div className="number__attempts__left">
                            <p className="number__attempts__left__text">Количество попыток</p>
                        </div>
                        <div className="number__attempts__right">
                            <div className="number__attempts__right__list">
                                <p className="number__attempts__right__list__left">Неограничено</p>
                                <img src={photo21}/>
                            </div>
                        </div>
                    </div>
                    <div className="number__attempts">
                        <div className="number__attempts__left">
                            <p className="number__attempts__left__text">Система оценивания</p>
                        </div>
                        <div className="number__attempts__right">
                            <div className="number__attempts__right__list">
                                <p className="number__attempts__right__list__left">Многоуровневая</p>
                                <img src={photo21}/>
                            </div>
                        </div>
                    </div>
                    <div className="marks">
                        <div className="marks__one">
                            <div className="marks__one__left">
                                <div className="marks__one__left__text">Отлично</div>
                            </div>
                            <div className="marks__one__right">
                                <p className="marks__one__right__text">от</p>
                                <input className="marks__one__right__from__input" placeholder="90"/>
                                <p className="marks__one__right__text__to">до</p>
                                <input className="marks__one__right__from__input" placeholder="100"/>
                                <p className="marks__one__right__text__last">баллов</p>
                            </div>
                        </div>
                        <div className="marks__one">
                            <div className="marks__one__left">
                                <div className="marks__one__left__text">Хорошо</div>
                            </div>
                            <div className="marks__one__right">
                                <p className="marks__one__right__text">от</p>
                                <input className="marks__one__right__from__input" placeholder="70"/>
                                <p className="marks__one__right__text__to">до</p>
                                <input className="marks__one__right__from__input" placeholder="89"/>
                                <p className="marks__one__right__text__last">баллов</p>
                            </div>
                        </div>
                        <div className="marks__one">
                            <div className="marks__one__left">
                                <div className="marks__one__left__text">Удовлетвортительно</div>
                            </div>
                            <div className="marks__one__right">
                                <p className="marks__one__right__text">от</p>
                                <input className="marks__one__right__from__input" placeholder="50"/>
                                <p className="marks__one__right__text__to">до</p>
                                <input className="marks__one__right__from__input" placeholder="69"/>
                                <p className="marks__one__right__text__last">баллов</p>
                            </div>
                        </div>
                    </div>
            </div>
            </div>}
                <div className="Create">
                    <p className="create__title">Создание теста</p>
                    {answerCounter.map((i, g) => {
                        return (
                        <div id={i.id} key={i.id} className="create__question__block">
                        <div className="create__question__block__top">
                            <p>Вопрос {g+1}</p>
                            <img onClick={() => DelQuestion(i.id)} src={closeImg} className="close__create__block"/>
                        </div>
                            <div className="create__question__block__inputs">
                                <input onChange={(g) => {questionText(i.id, g.target.value)}} className="create__question__block__inputs__input" placeholder={i.title}/>
                                <select className="create__question__block__inputs__select">
                                    <option>A</option>
                                    <option>B</option>
                                    <option>C</option>
                                </select>
                            </div>
                            <div className="create__question__block__answers">
                                {i.answers.map((e, g) => {
                                    return (
                                        <div id={e.id} key={e.id} className={e.id === i.true__answer ? 'create__question__block__answers__answer__correct' : 'create__question__block__answers__answer'}>
                                            <div className="create__question__block__answers__answer__left">
                                                {/* <img src={answer}/> */}
                                                <div onClick={() => trueButton(e.id, i.id)}>
                                                </div>
                                                <input onChange={(g) => {text(e.id, i.id, g.target.value)}} placeholder={e.name}/>
                                            </div>
                                            <div className="create__question__block__answers__answer__right">
                                                <img onClick={() => DelAnswer(e.id, i.id)} src={closeImg}/>
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
                                    <img onClick={() => {console
                                    .log(answerCounter)}} className="create__question__block__bottom__right__img" src={photo17}/>
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
                    <button className="next__button" onClick={() => setSettingsActive(true)}>Далее</button>
                </div>
            </>
        )
    }
}

export default Create;