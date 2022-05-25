import React from "react";
import { useState } from "react";
import logo from '../img/PollHub.svg';
import { Link } from "react-router-dom";

const Login = () => {

    
    let [page, setPage] = useState(0)
  let [role, stRole] = useState('')

  let [login, setLogin] = useState('');
  let [password, setPassword] = useState('');

  let [name, setName] = useState('');
  let [surname, setSurname] = useState('');

  function checkRole(className) {
    let teacher = document.querySelector('.teacher__div');
    let student = document.querySelector('.student__div');
    let checked = document.querySelector('.checked__role')

    let state = null

    if (className === 'student__div') {
      student.classList.remove('checked__role')
      teacher.classList.add('checked__role')
      // stRole('user');
      state = 'user'
      stRole(state)
    } else {
      teacher.classList.remove('checked__role')
      student.classList.add('checked__role')
      // stRole('student')
      state = 'student'
      stRole(state)
    }
  }

  function check() {
    console.log(login);
    console.log(password);
    console.log(role);
  }

  function AddLog(login, password) {
    console.log(login, password);

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
        .then(result => localStorage.setItem('acces', result))
        .catch(error => alert('Что-то не верно'));
}

  function request() {
    var formdata = new FormData();
    formdata.append("username", login);
    // formdata.append("email", compair);
    formdata.append("password", password);

    var requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
    };
    console.log(login, password)

    fetch("https://dfssd-first.herokuapp.com/auth/users/", requestOptions)
        // .then(response => console.log(response))
        .then(response => {
            if (response.status === 201) {
                AddLog(login, password);
            } else {
                console.log('bad')
            }
        })
}


    if (page === 0) {
        return (
            <>
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
                    <Link className="textrega" to={'/login'}>Регистрация</Link>
                    <Link className="textreg" to={'/register'}>Вход</Link>
                  </div>
                  <div className="inputtype">
                    <input defaultValue={login} type="login" placeholder="E-mail" className="inputPassword" id="exampleInputEmail1" onChange={(e) => { setLogin(e.target.value) }} />
                    <input defaultValue={password} placeholder="Пароль" className="inputPassword" id="InputPassword1" onChange={(e) => { setPassword(e.target.value) }} />
                    {/* <input placeholder="Huy" className="inputPassword"/> */}
                  </div>
                  <div className="lg-3 form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Согласие на обработку персональных данных</label>
                  </div>
                  <div className="button_c"><button className="btn btn-primary ghg" onClick={() => { setPage(page + 1) }}><div className="btn_text_ghg">Продолжить</div></button></div>
                </div>
              </div>
            </div>
            </>
        )
    } else if (page === 1) {
        return (
            <>
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
                <a className="textrega" href="log-in">Регистрация</a>
                <a className="textreg" href="log-in" >Вход</a>
              </div>
              <div className="inputtype">
                <p className="secondPageTitle" onClick={() => {check()}}>Выберите свою цель</p>
                {/* <div className="teacher__div"> */} 
                <div className={role === 'user' ? 'teacher__div checked__role' : 'teacher__div'} onClick={() => {checkRole('student__div')}}>
                  <div className="teacher__div__text">
                    <p className='teacher__div__title'>Пользователь</p>
                    <p className="teacher__div__description">Решай тесты и получи больше баллов!</p>
                  </div>
                </div>
                {/* <div className="student__div"> */}
                <div className={role === 'student' ? 'student__div checked__role' : 'student__div'} onClick={() => {checkRole('teacher__div')}}>
                  <div className="student__div__text">
                    <p className="student__div__title">Создатель</p>
                    <p className="student__div__description">Создавай, редактируй и проходи тесты сам!</p>
                  </div>
                </div>
              </div>
              <div className="button_c">
                <button className="pageBackButton" onClick={() => {setPage(page - 1)}}>
                  <div className="btn_text_ghgBack">
                    Назад
                  </div>
                </button>
                <button className="btn btn-primary ghg" onClick={() => { setPage(page + 1) }}>
                  <div className="btn_text_ghg">Продолжить</div>  
                </button>
              </div>
            </div>
          </div>
            </div>
            </>
        )
    } else if (page === 2) {
        return (
            <>
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
                  <a className="textrega" href="log-in">Регистрация</a>
                  <a className="textreg" href="log-in" >Вход</a>
                </div>
                <div className="inputtype">
                  <input defaultValue={name} type="login" placeholder="Имя" className="inputPassword" id="exampleInputEmail1" onChange={(e) => { setName(e.target.value) }} />
                  <input defaultValue={surname} placeholder="Фамилие" className="inputPassword" id="InputPassword1" onChange={(e) => { setSurname(e.target.value) }} />
                  {/* <input placeholder="Huy" className="inputPassword"/> */}
                </div>
                <div className="button_c">
                  <button className="pageBackButton" onClick={() => {setPage(page - 1)}}>
                    <div className="btn_text_ghgBack">
                      Назад
                    </div>
                  </button>
                  <button className="btn btn-primary ghg" onClick={() => {request()}}>
                    <div className="btn_text_ghg">Зарегистрироваться</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
            </>
        )
    }
}

export default Login;