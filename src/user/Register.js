import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Register() {
  // const [count, setCount] = useState(0);

  let history = useHistory()

  let [login, setLogin] = useState('');
  let [password, setPassword] = useState('');
  let [acces, setAcces] = useState(localStorage.getItem('acces'));

  function request() {
    var formdata = new FormData();
    formdata.append("username", login);
    formdata.append("password", password);

    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
    };

    fetch("https://dfssd-first.herokuapp.com/auth/jwt/create/", requestOptions)
      .then(response => response.text())
      // .then(result => setAcces(JSON.parse(result).access))
      .then(result => {
        localStorage.setItem('acces', result)
        history.push('/')
      })
      .catch(error => alert('Что неверно'));
  }
  // https://dfssd-first.herokuapp.com/
  return (
    <div className="App">
      {/* <p>{acces && acces}</p> */}
      {/* <p>ali@example.com</p> */}
      {/* <p>1sdf456Ab</p> */}
      {/* <input placeholder="Login" onChange={(e) => {setLogin(e.target.value)}}/> */}
      {/* <input placeholder="Password" onChange={(e) => {setPassword(e.target.value)}}/> */}
      {/* <button onClick={() => {request()}}>Press</button> */}
      <div className="back_registr">
              <div className="circle">
                <div className="circle_2"></div>
                <div className="circle_1"></div>
              </div>
              <div className="right_up_quads">
                <div className="right_up_quad1"></div>
                <div className="right_up_quad2"></div>
              </div>
              <div className="restangle">
                <div className="restangle_1 elemrest"></div>
                <div className="restangle_2 elemrest"></div>
                <div className="restangle_3 elemrest"></div>
                <div className="restangle_4 elemrest"></div>
                <div className="restangle_5 elemrest"></div>
                <div className="restangle_6 elemrest"></div>
                <div className="restangle_7 elemrest"></div>
                <div className="restangle_8 elemrest"></div>
              </div>
              <div className="left_bottom_quad">
                <div className="left_bottom_quad1 lbq"></div>
                <div className="left_bottom_quad2 lbq"></div>
                <div className="left_bottom_quad3 lbq"></div>
              </div>
              <div className="right_bottom_quad">
                <div className="right_bottom_quad1 rbq"></div>
                <div className="right_bottom_quad2 rbq">&#9650;</div>
                <div className="right_bottom_quad3 rbq"></div>
              </div>
            </div>
            <div className="loginform">
              <div className="log">
                <div className="logform needs-validation">
                  <div className="text_poll">PollHub</div>
                  <div className="dop_text">
                    <Link className="textrega" to={'/register'}>Регистрация</Link>
                    <Link className="textreg under_link_border" to={'/login'}>Вход</Link>
                  </div>
                  <div className="inputtype">
                    <input defaultValue={login} type="login" placeholder="E-mail" className="inputPassword" id="exampleInputEmail1" onChange={(e) => {setLogin(e.target.value)}} />
                    <input defaultValue={password} placeholder="Пароль" className="inputPassword" id="InputPassword1" onChange={(e) => {setPassword(e.target.value)}}/>
                  </div>
                  <Link>
                  <div className="button_c"><button className="btn btn-primary ghg" onClick={() => {request()}}><div className="btn_text_ghg">Войти</div></button></div>
                  </Link>
                </div>
              </div>
            </div>
    </div>
  );
}