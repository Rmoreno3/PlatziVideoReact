/* eslint-disable import/order */
/* eslint-disable jsx-quotes */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { registerUser } from '../actions';
import '../assets/styles/App.scss';
import PropTypes from 'prop-types';
import googleIcon from '../assets/static/google-icon.png';
import twitterIcon from '../assets/static/twitter-icon.png';

const Register = (props) => {
  const [form, setValues] = useState({
    name: '',
    id: '',
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
    props.registerUser(form, '/login');
    console.log(registerUser);
    console.log(form);
  };

  return (
    <section className="registro">
      <div className="registro__container">
        <h2>Registrate</h2>
        <form className="registro__container--form" onSubmit={handleSubmit}>
          <label htmlFor="name" className="label_registro">
            <input
              required
              type="text"
              name="name"
              onChange={handleInput}
              placeholder="Nombre Completo"
              className="input_form"
            />
          </label>
          <label htmlFor="email" className="label_registro">
            <input
              required
              type="email"
              name="email"
              placeholder="Email"
              className="input_form"
              onChange={handleInput}
            />
          </label>
          <label htmlFor="password" className="label_registro">
            <input
              required
              type="password"
              name="password"
              className="input_form"
              placeholder="Password"
              onChange={handleInput}
            />
          </label>
          <button className="button_form" type="submit">
            Registrarme
          </button>
        </form>
        <section className="registro__container--redes">
          <div className="redes__container">
            <img src={googleIcon} alt="Google" />
            <a href="/">Registrame con Google</a>
          </div>
          <div className="redes__container">
            <img src={twitterIcon} alt="Twitter" />
            <a href="/">Registrarme con Twitter</a>
          </div>
        </section>
        <section className="registro__container--footer">
          <p>¿Ya tienes una cuenta?</p>
          <Link to="/login">
            <h3>Iniciar Sesion</h3>
          </Link>
        </section>
      </div>
    </section>
  );
};

const mapDispatchToProps = {
  registerUser,
};

Register.propTypes = {
  registerUser: PropTypes.func,
};

export default connect(null, mapDispatchToProps)(Register);
