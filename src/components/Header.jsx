import React from 'react';
import logo from '../assets/static/logo-platzi-video-BW2.png';

const Header = () => (
  <header className='cabezera'>
    <figure className='logo__container'>
      <a href='/'>
        <img src={logo} alt='Logo de PlatziVideo' />
      </a>
    </figure>
    <nav className='cabezera__menu'>
      <div className='cabezera__menu--perfil'>
        <i className='fas fa-user' />
        <p>Perfil</p>
      </div>
      <ul className='cabezera__menu--desplegable'>
        <li><a href='/login'>Registrate</a></li>
        <li><a href='/register'>Inicia Sesion</a></li>
      </ul>
    </nav>
  </header>
);

export default Header;
