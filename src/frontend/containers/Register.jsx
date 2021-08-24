import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { registerRequest } from '../actions';
import '../assets/styles/App.scss';

const Register = (props) => {
  const [form, setValues] = useState({
    name: '',
    email: '',
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
    props.history.push('/');
  };

  return (
    <section className='registro'>
      <div className='registro__container'>
        <h2>Registrate</h2>
        <form className='registro__container--form' onSubmit={handleSubmit}>
          <label htmlFor='name' className='label_registro'>
            <input
              required
              type='text'
              name='name'
              onChange={handleInput}
              placeholder='Nombre Completo'
              className='input_form'
            />
          </label>
          <label htmlFor='email' className='label_registro'>
            <input
              required
              type='email'
              name='email'
              placeholder='Email'
              className='input_form'
              onChange={handleInput}
            />
          </label>
          <label htmlFor='password' className='label_registro'>
            <input
              required
              type='password'
              name='password'
              className='input_form'
              placeholder='Password'
              onChange={handleInput}
            />
          </label>
          <button className='button_form' type='submit'>Registrarme</button>
        </form>
        <section className='registro__container--redes'>
          <div className='redes__container'>
            <i className='fab fa-google' />
            <a href='/'>Registrame con Google</a>
          </div>
          <div className='redes__container'>
            <i className='fab fa-twitter twitter' />
            <a href='/'>Registrarme con Twitter</a>
          </div>
        </section>
        <section className='registro__container--footer'>
          <p>¿Ya tienes una cuenta?</p>
          <Link to='/login'>
            <h3>Iniciar Sesion</h3>
          </Link>
        </section>
      </div>
    </section>
  );
};

const mapDispatchToProps = {
  registerRequest,
};

export default connect(null, mapDispatchToProps)(Register);
