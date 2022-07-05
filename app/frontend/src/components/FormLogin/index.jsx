import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { userLogin, userRegister } from '../../services/API/request';
import {AlertError} from '../Alerts';

import './style.css';

export function FormLogin() {
  const [user, setUser] = useState({ name: '', email: '', password: '' });
  const [isRegister, setIsRegister] = useState(false);
  const [feedbackLogin, setFeedbackLogin] = useState({show: false, message: '' });
  const history = useHistory();

  const changeUser = ({ target: { name, value }}) => {
    setFeedbackLogin({ ...feedbackLogin, show: false });
    setUser({ ...user, [name]: value });
  };

  const login = (event) => {
    event.preventDefault();
    userLogin({ email: user.email, password: user.password })
    .then(({ status, data }) => {
      if (status !== 200) {
        setFeedbackLogin({ show: true, message: data.message });
        setUser({ name: '', email: '', password: '' });
      } else {
        localStorage.setItem('token', data.token);
        history.push('/tasks');
      }
    });
  };

  const register = (event) => {
    event.preventDefault();
    if (user.email.length != 0 && user.password.length !== 0) {
      userRegister(user)
      .then(({ status, data }) => {
        if (status !== 201) {
          setFeedbackLogin({ show: true, message: data.message });
          setUser({ name: '', email: '', password: '' });
        } else {
          localStorage.setItem('token', data.token);
          history.push('/tasks');
        }
      });
    }
  };

  return(
    <div id="login-box">
      <form id="form-login" onSubmit={ isRegister ? register :  login }>
      { feedbackLogin.show ? <AlertError message={ feedbackLogin.message } /> : null }
        { isRegister ? <label className="login-label" htmlFor="name-input">
          <span className="daisy-label-text">Nome</span>
          <input
            id="name-input"
            type="text"
            name="name"
            placeholder="Qual é o seu nome?"
            onChange={ changeUser }
            value={ user.name }
            spellCheck="false"
            className="input-login"
          />
        </label> : null }
        <label className="login-label" htmlFor="email-input">
          <span className="daisy-label-text">Email</span>
          <input
            id="email-input"
            type="text"
            name="email"
            placeholder="Qual é o seu email?"
            onChange={ changeUser }
            value={ user.email }
            spellCheck="false"
            className="input-login"
          />
        </label>
        <label className="login-label" htmlFor="password-input">
          <span className="daisy-label-text">Senha</span>
          <input
            id="password-input"
            type="password"
            name="password"
            placeholder="Escolha uma senha de no mínimo 6 caracteres"
            onChange={ changeUser }
            value={ user.password }
            spellCheck="false"
            className="input-login"
          />
        </label>
        <div id="form-btn">
          { isRegister ? null : <button id="login-btn" type="submit">Login</button> }
          <button id="register-btn" type="submit" onClick={ () => setIsRegister(true) }>{ isRegister ? 'Cadastrar' : 'Cadastre-se' }</button>
        </div>
      </form>
    </div>
  );
}
