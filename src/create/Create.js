import React, { useState } from "react";
import closeImg from '../img/11.png';


function Create() {

    let [page, setPage] = useState(0);

    if (page === 0) {
        return (
            <div className="Create">
                <p className="create__title">Создание теста</p>
                <p className="discipline__name">Название дисциплины</p>
                <div className="form-group">
                    <div className="select__wrapper">
                        <select className="discipline__select">
                            <option>Psg</option>
                            <option>Chealse</option>
                            <option>Manchester City</option>
                        </select>
                    </div>
                </div>
                <p className="test__name">Название теста</p>
                <input className="name__test__input" placeholder="Ретушь фотографий 1.1"/>
                <div className="further__button">
                        <button onClick={() => {setPage(1)}}>
                            Далее
                        </button>
                </div>
            </div>
        )
    } else if (page === 1) {
        return (
            <div className="Create">
                <p className="create__title">Создание теста</p>
                <div className="create__question__block">
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

                <div className="back__button">
                    <button onClick={() => {setPage(0)}}>
                        Назад
                    </button>
                </div>
                <div className="further__button">
                    <button onClick={() => {setPage(2)}}>
                        Далее
                    </button>
                </div>
            </div>
        )
    }
}

export default Create;