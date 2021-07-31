import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/App.scss';

const Register = () => (
  <section className='registro'>
    <div className='registro__container'>
      <h2>Registrate</h2>
      <form className='registro__container--form'>
        <label htmlFor='User' className='label_registro'>
          <input type='text' name='User' placeholder='Nombre Completo' className='input_form' required />
        </label>
        <label htmlFor='email' className='label_registro'>
          <input type='email' className='input_form' name='email' placeholder='Email' required />
        </label>
        <label htmlFor='Password' className='label_registro'>
          <input type='password' placeholder='Password' name='Password' className='input_form' required />
        </label>
        <button className='button_form' type='button'>Registrarme</button>
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

export default Register;
