import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

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
      .then(result => localStorage.setItem('acces', result))
      .catch(error => alert('Что неверно'));
  }
  // https://dfssd-first.herokuapp.com/
  return (
    <div className="App">
      {/* <p>{acces && acces}</p> */}
      <p>ali@example.com</p>
      <p>1sdf456Ab</p>
      <input placeholder="Login" onChange={(e) => {setLogin(e.target.value)}}/>
      <input placeholder="Password" onChange={(e) => {setPassword(e.target.value)}}/>
      <button onClick={() => {request()}}>Press</button>
    </div>
  );
}