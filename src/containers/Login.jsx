import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/App.scss';

const Login = () => (
  <section className='login'>
    <div className='login__container'>
      <h2>Iniciar Sesion</h2>
      <form className='login__container--form'>
        <label htmlFor='User' className='label_login'>
          <input type='text' name='User' placeholder='Username' className='input_form' />
        </label>
        <label htmlFor='Password' className='label_login'>
          <input type='password' placeholder='Password' name='Password' className='input_form' />
        </label>
        <button className='button_form' type='button'>Iniciar Sesion</button>
        <div className='login__container--remember'>
          <label htmlFor='Remember'>
            <input type='checkbox' name='Remember' value='Remember Me' />
            Remember Me
          </label>
          <a href='/'>Olvide mi contraseña</a>
        </div>
      </form>
      <section className='login__container--redes'>
        <div className='redes__container'>
          <i className='fab fa-google' />
          <a href='/'>Iniciar sesion con Google</a>
        </div>
        <div className='redes__container'>
          <i className='fab fa-twitter twitter' />
          <a href='/'>Iniciar sesion con Twitter</a>
        </div>
      </section>
      <section className='login__container--footer'>
        <p>¿No tienes una cuenta?</p>
        <Link to='/register'>
          <h3>Registrate</h3>
        </Link>
      </section>
    </div>
  </section>
);

export default Login;
