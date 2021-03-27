import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginRequest } from '../actions/index';
import googleIcon from '../assest/static/google-icon.png';
import twitterIcon from '../assest/static/twitter-icon.png';
import '../assest/styles/Login.scss';

const Login = (props) => {
  const [form, setValues] = useState({
    email: '',
  });
  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    props.loginRequest(form);
    props.history.push('/');
    console.log(form);
  };
  return (
    <section className='login'>
      <section className='login__container'>
        <h2>Inicia sesión</h2>
        <form onSubmit={handleSubmit} className='login__container--form'>
          <input onChange={handleInput} name='email' className='input' type='text' placeholder='Correo' />
          <input onChange={handleInput} name='password' className='input' type='password' placeholder='Contraseña' />
          <button type='submit' className='button'>Iniciar sesión</button>
          <div className='login__container--remember-me'>
            <label>
              <input type='checkbox' id='cbox1' value='first_checkbox' />
              Recuérdame
            </label>
            <a href='/'>Olvidé mi contraseña</a>
          </div>
        </form>
        <section className='login__container--social-media'>
          <div>
            <img src={googleIcon} alt='Google' />
            {' '}
            Inicia sesión con Google
          </div>
          <div>
            <img src={twitterIcon} alt='Twitter' />
            {' '}
            Inicia sesión con Twitter
          </div>
        </section>
        <p className='login__container--register'>
          No tienes ninguna cuenta
          <Link to='/'>Regístrate</Link>
        </p>
      </section>
    </section>
  );
};
const mapDispatchToProps = {
  loginRequest,
};
export default connect(null, mapDispatchToProps)(Login);
