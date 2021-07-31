import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/static/logo-platzi-video-BW2.png';

const Header = () => (
  <header className='cabezera'>
    <figure className='logo__container'>
      <Link to='/'>
        <img src={logo} alt='Logo de PlatziVideo' id='log' />
      </Link>
    </figure>
    <nav className='cabezera__menu'>
      <div className='cabezera__menu--perfil'>
        <i className='fas fa-user' />
        <p>Perfil</p>
      </div>
      <ul className='cabezera__menu--desplegable'>
        <Link to='/register'>
          <li>Registrate</li>
        </Link>
        <Link to='/login'>
          <li>Iniciar Sesion</li>
        </Link>
      </ul>
    </nav>
  </header>
);

export default Header;
