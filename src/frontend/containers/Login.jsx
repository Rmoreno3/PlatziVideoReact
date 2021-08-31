/* eslint-disable jsx-quotes */
/* eslint-disable arrow-parens */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginUser } from '../actions';
import '../assets/styles/App.scss';
import googleIcon from '../assets/static/google-icon.png';
import twitterIcon from '../assets/static/twitter-icon.png';

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
    props.loginUser(form, '/');
    console.log(form);
  };

  return (
    <section className="login">
      <div className="login__container">
        <h2>Iniciar Sesion</h2>
        <form className="login__container--form" onSubmit={handleSubmit}>
          <label htmlFor="email" className="label_login">
            <input
              type="text"
              name="email"
              onChange={handleInput}
              className="input_form"
              placeholder="Email"
            />
          </label>
          <label htmlFor="password" className="label_login">
            <input
              type="password"
              name="password"
              onChange={handleInput}
              placeholder="Password"
              className="input_form"
            />
          </label>
          <button className="button_form" type="submit">
            Iniciar Sesion
          </button>
          <div className="login__container--remember">
            <label htmlFor="Remember">
              <input type="checkbox" name="Remember" value="Remember Me" />
              Remember Me
            </label>
            <a href="/">Olvide mi contraseña</a>
          </div>
        </form>
        <section className="login__container--redes">
          <div className="redes__container">
            <img src={googleIcon} alt="Google" />
            <a href="/">Iniciar sesion con Google</a>
          </div>
          <div className="redes__container">
            <img src={twitterIcon} alt="twitter icon" />
            <a href="/">Iniciar sesion con Twitter</a>
          </div>
        </section>
        <section className="login__container--footer">
          <p>¿No tienes una cuenta?</p>
          <Link to="/register">
            <h3>Registrate</h3>
          </Link>
        </section>
      </div>
    </section>
  );
};

const mapDispatchToProps = {
  loginUser,
};

export default connect(null, mapDispatchToProps)(Login);
