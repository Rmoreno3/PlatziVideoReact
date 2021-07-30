import React from 'react';
import logo from '../assets/static/logo-platzi-video-BW2.png';

const Header = () => (
  <header className='cabezera'>
    <figure className='logo__container'>
      <img src={logo} alt='Logo de PlatziVideo' />
    </figure>
    <nav className='cabezera__menu'>
      <div className='cabezera__menu--perfil'>
        <i className='fas fa-user' />
        <p>Perfil</p>
      </div>
      <ul className='cabezera__menu--desplegable'>
        <li><a href='/'>Cuenta</a></li>
        <li><a href='/'>Cerrar Sesion</a></li>
      </ul>
    </nav>
  </header>
);

export default Header;
