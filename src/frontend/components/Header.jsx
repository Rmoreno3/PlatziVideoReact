import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { logoutRequest } from '../actions';
import gravatar from '../utils/gravatar';
import logo from '../assets/static/logo-platzi-video-BW2.png';

const Header = (props) => {
  const { user } = props;
  const hasUser = Object.keys(user).length > 0;

  const handleLogout = () => {
    props.logoutRequest({});
  };

  return (
    <header className='cabezera'>
      <figure className='logo__container'>
        <Link to='/'>
          <img src={logo} alt='Logo de PlatziVideo' id='log' />
        </Link>
      </figure>
      <nav className='cabezera__menu'>
        <div className='cabezera__menu--perfil'>
          {hasUser ?
            <img src={gravatar(user.email)} alt={user.email} className='gravatar' /> :
            <i className='fas fa-user' />}
          {hasUser ?
            <p>{user.name}</p> : <p>Perfil</p>}
        </div>
        <ul className='cabezera__menu--desplegable'>

          {hasUser ?
            null : (
              <Link to='/register'>
                <li>Registrate</li>
              </Link>
            )}

          {hasUser ?
            <li><a href='/' onClick={handleLogout}>Cerrar Sesion</a></li> : (
              <Link to='/login'>
                <li>Iniciar Sesion</li>
              </Link>
            )}
        </ul>
      </nav>
    </header>
  );
};

Header.propTypes = {
  user: PropTypes.object,
  logoutRequest: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  logoutRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
