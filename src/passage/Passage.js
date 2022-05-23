import React from "react";

function Passage() {

    let test = {title: 'Тригонометрия', questions: [ {text: '4+4', answers: ['8', '16', '24']} ]}

    return (
        <div className="passage">
            <h1 className="passage__test__title">{test.title}</h1>
        </div>
    )
}


export default Passage;