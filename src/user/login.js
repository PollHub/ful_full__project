import React from "react";
import { useState } from "react";
import logo from '../img/PollHub.svg';
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
const Login = () => {

  let id = useParams();

  const history = useHistory()
  
  let [page, setPage] = useState(0)
  let [role, stRole] = useState('')
  console.log(role)

  let [login, setLogin] = useState('');
  console.log(login)
  let [password, setPassword] = useState('');
  console.log(password)

  let [name, setName] = useState('');
  console.log(name);
  let [surname, setSurname] = useState('');
  console.log(surname);

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

  const request = async () => {
    var formdata = new FormData();
    formdata.append("username", login);
    // formdata.append("email", compair);
    formdata.append("password", password);

    if(role === 'teacher') {
      formdata.append('is_teacher', true);
    } else {
      formdata.append('is_teacher', false);
    }

    formdata.append('first_name', name)
    formdata.append('second_name', surname)

    var requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
    };
    console.log(login, password)

    const response_cerate_user = await fetch("https://dfssd-first.herokuapp.com/auth/users/", requestOptions)

    if (response_cerate_user.status === 201) {
      var formdata = new FormData();
      formdata.append("username", login);
      formdata.append("password", password);

      var requestOptions = {
          method: 'POST',
          body: formdata,
          redirect: 'follow'
      };

    const get_token_response = await fetch("https://dfssd-first.herokuapp.com/auth/jwt/create/", requestOptions)

    const get_token_body = await get_token_response.json()

    localStorage.setItem('acces', JSON.stringify(get_token_body))

    //  Изменение данных человека
    
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${get_token_body.access}`);

    const set_data_url = "https://dfssd-first.herokuapp.com/api/accounts/set-username/"

    var set_user_data_formdata = new FormData();
    set_user_data_formdata.append('first_name', name)
    set_user_data_formdata.append('last_name', surname)

    var requestOptions = {
        method: 'PATCH',
        body: set_user_data_formdata,
        headers: myHeaders,
        redirect: 'follow'
    };

    const change_user_data_response = await fetch(set_data_url, requestOptions)
    } else {
        console.log('bad')
    }

    history.push('/profile')
        // .then(response => console.log(response))
        // .then(response => {
        //     if (response.status === 201) {
        //         AddLog(login, password);
        //     } else {
        //         console.log('bad')
        //     }
        // })
  
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
                    <Link className="textrega under_link_border" to={'/register'}>Регистрация</Link>
                    <Link className="textreg" to={'/login'}>Вход</Link>
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
                <p className="secondPageTitle" onClick={() => {check()}}>Выберите свою роль</p>
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