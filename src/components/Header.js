import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import gravatar from '../utils/gravatar';
import '../assest/styles/Header.scss';
import logo from '../assest/static/logo-platzi-video-BW2.png';
import userIcon from '../assest/static/user-icon.png';

const Header = (props) => {
  const { user } = props;
  const hashUser = Object.keys(user).length > 0;
  return (
    <header className='header'>
      <Link to='/'>
        <img className='header__img' src={logo} alt='Platzi Video' />
      </Link>
      <div className='header__menu'>
        <div className='header__menu--profile'>
          {
            hashUser ?
              <img src={gravatar(user.email)} alt={user.email} /> :
              <img src={userIcon} alt='userIcon' />
          }
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
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};
export default connect(mapStateToProps, null)(Header);
