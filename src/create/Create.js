import React, { useState, useHistory } from "react";
import Questions from "./Questions";


function Create() {

    // let history = useHistory()

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
                <div className="further__button next__button">
                        <button onClick={() => {setPage(1)}}>
                            Далее
                        </button>
                </div>
            </div>
        )
    } else if (page === 1) {
        return(
            <div>
                <Questions/>
                <div className="bottom__buttons">
                    <button className="backk__button">Назад</button>
                    <button className="next__button">Далее</button>
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