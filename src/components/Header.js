import React from 'react';
import { Link } from 'react-router-dom';
import '../assest/styles/Header.scss';
import logo from '../assest/static/logo-platzi-video-BW2.png';
import userIcon from '../assest/static/user-icon.png';

const Header = () => {
  return (
    <header className='header'>
      <Link to='/'>
        <img className='header__img' src={logo} alt='Platzi Video' />
      </Link>
      <div className='header__menu'>
        <div className='header__menu--profile'>
          <img src={userIcon} alt='userIcon' />
          <p>Perfil</p>
        </div>
        <ul>
          <li><Link to='/login'>Inicia sesión</Link></li>
          <li><Link to='/'>Cerrar Sesión</Link></li>
        </ul>
      </div>
    </header>
  );
};
export default Header;
