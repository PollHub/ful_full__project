import React from "react";

function Passage() {

    let test = {title: 'Тригонометрия', questions: [ {text: '4+4', answers: ['8', '16', '24']} ]}

    return (
        <div className="passage">
            <h1 className="passage__test__title">{test.title}</h1>
            <p className="passage__test__howmany__questions">{test.questions.length} вопросов</p>
            <div className="bottom__buttons__passage">
                <button className="next__button">
                    Начать 
                </button>
            </div>
        </div>
    )
}


export default Passage;