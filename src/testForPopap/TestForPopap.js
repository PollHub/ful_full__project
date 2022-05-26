import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import Header from "../header/Header";
import photo11 from "../img/11.png"

const TestForPopap = () => {

    const [stateForModal, setStateForModal] = useState(false);

    function show() {
        setStateForModal(!stateForModal)
        // console.log(modalWindowData)
    }

    let history = useHistory();
    let params = useParams();
    // console.log(history)

    const [modalWindowData, setModalWindowData] = useState(null);
    console.log(modalWindowData)

    const [userDataTests, setUserDataTests] = useState(null);
    // console.log(userDataTests)

    function getPoppapData(id) {

        // console.log(id)

        const getAccess = localStorage.getItem('acces');
        const token = (JSON.parse(getAccess).access)

        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${token}`);

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch(`https://dfssd-first.herokuapp.com/api/main/result/${id}/`, requestOptions)
            .then(response => response.text())
            // .then(result => console.log(JSON.parse(result)))
            .then(result => {
                setModalWindowData(JSON.parse(result))
                // console.log(JSON.parse(result))
                show()
            })
            .catch(error => console.log('error', error));

    }

    function getData() {

        const getAccess = localStorage.getItem('acces');
        const token = (JSON.parse(getAccess).access)

        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${token}`);

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch(`https://dfssd-first.herokuapp.com/api/main/subject/${params.id}/`, requestOptions)
            .then(response => response.text())
            // .then(result => console.log(result))
            .then(result => setUserDataTests(JSON.parse(result)))
            .catch(error => console.log('error', error));
    }

    useEffect(() => {
        getData()
        // getPoppapData() 
    }, [])

    let [counter, setCounter] = useState([
        {id: 0, title: 'Математика / Таблица умножения 1.1', grade: "3/5", procent: 30},
        {id: 1, title: 'Математика / Тигонометрия', grade: "5/5", procent: 100},
        {id: 2, title: 'Математика / Тигонометрия', grade: "5/5", procent: 10},
        {id: 3, title: 'Математика / Тигонометрия', grade: "5/5", procent: 80}
    ])

    return (
        <>
            <Header/>
            <div className="forPoppaMenu">
                <div className="forPoppaMenuFather">
                    {userDataTests && userDataTests.map((i, g) => {
                        // console.log(i.id)
                        return (
                            <div key={g} className="forPoppaMenuSon">
                                <div className="forPoppaMenuSonLeft">
                                    <p className="forPoppaMenuSonLeftText">{i.name}</p>
                                </div>
                                <div className="forPoppaMenuSonRight">
                                    <div onClick={() => getPoppapData(i.id)} className="forPoppaMenuSonRightBlock">Результат</div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className={stateForModal ? 'PopapModelWindow' : 'PopapModelWindowClose'}>
                <div className="PopapModelWindowTop">
                    <p>{modalWindowData && modalWindowData[0].time}</p>
                    <img src={photo11}/>
                </div>
                <table className="PopapModelWindowTopTable">
                    <tr>
                        <th className="PopapModelWindowTopTableTitle"><p className="PopapModelWindowTopTableTitleText">ФИО</p></th>
                        <th className="PopapModelWindowTopTableTitle"><p className="PopapModelWindowTopTableTitleText">Время</p></th>
                        <th className="PopapModelWindowTopTableTitle"><p className="PopapModelWindowTopTableTitleText">Кол-во попыток</p></th>
                        <th className="PopapModelWindowTopTableTitle"><p className="PopapModelWindowTopTableTitleText">Результат</p></th>
                    </tr>
                    {modalWindowData && modalWindowData.map((a, g) => {
                        return (
                            <tr>
                        <td className="PopapModelWindowTopTableData"><p className="PopapModelWindowTopTableDataText">{modalWindowData && modalWindowData[g].first_name}</p></td>
                        <td className="PopapModelWindowTopTableData"><p className="PopapModelWindowTopTableDataText_time">{modalWindowData && modalWindowData[g].time}</p></td>
                        <td className="PopapModelWindowTopTableData"><p className="PopapModelWindowTopTableDataText">{modalWindowData && modalWindowData[g].attempt_count}</p></td>
                        <td className="PopapModelWindowTopTableDataRight"><p className={modalWindowData && modalWindowData[g].percent < modalWindowData[g].marks.bad[1] ? 'PopapModelWindowTopTableDataTextMarkBad' : modalWindowData && modalWindowData[g].percent < modalWindowData[g].marks.good[1] ? 'PopapModelWindowTopTableDataTextMarkGood' : 'PopapModelWindowTopTableDataTextMarkExcellent'}>{modalWindowData && modalWindowData[g].percent}/100</p></td>
                    </tr>
                        )
                    })}
                </table>
            </div>
        </>
    )
}

export default TestForPopap;

// https://dfssd-first.herokuapp.com/api/main/subject/${i.subject}/