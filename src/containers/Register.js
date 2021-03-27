import React, { useState } from 'react';
import { connect } from 'react-redux';
import '../assest/styles/Register.scss';
import { Link } from 'react-router-dom';
import { registerRequest } from '../actions/index';

const Register = (props) => {
  const [form, setValues] = useState({
    email: '',
    name: '',
    password: '',
  });
  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    props.registerRequest(form);
    console.log(form);
    props.history.push('/');
  };
  return (
    <section className='register'>
      <section className='register__container'>
        <h2>Regístrate</h2>
        <form onSubmit={handleSubmit} className='register__container--form'>
          <input name='name' onChange={handleInput} className='input' type='text' placeholder='Nombre' />
          <input name='email' onChange={handleInput} className='input' type='text' placeholder='Correo' />
          <input name='password' onChange={handleInput} className='input' type='password' placeholder='Contraseña' />
          <button type='submit' className='button'>Registrarme</button>
        </form>
        <Link to='/login'>Iniciar sesión</Link>
      </section>
    </section>
  );
};
const mapDispatchToProps = {
  registerRequest,
};

export default connect(null, mapDispatchToProps)(Register);
