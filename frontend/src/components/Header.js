import React from 'react';
import headerLogo from '../images/header-logo.svg';

import { Link, useLocation, Routes, Route } from 'react-router-dom';

function Header(props) {
  const { loggedIn, email, singOut } = props;
  const location = useLocation();
  const linkText = (location.pathname === '/sign-in') ? 'Регистрация' : 'Войти';
  const buttonText = loggedIn ? 'Выйти' : linkText;

  return (
    <header className="header">
      <a href="/" className="header__main-link">
        <img src={headerLogo} alt="Логотип сайта Место" className="header__logo" />
      </a>
      <div className="header__info">
        {loggedIn && <p className="header__email">{email}</p>}
        <Routes>
          <Route path='/react-mesto-auth' element={<Link to='/sign-in' className="header__link header__button-logout">Войти</Link>} />
          <Route path='/sign-up' element={<Link to='/sign-in' className="header__link header__button-logout">Войти</Link>} />
          <Route path='/sign-in' element={<Link to='/sign-up' className="header__link header__button-logout">Регистрация</Link>} />
        </Routes>
        {loggedIn && <a href='/' className="header__link header__button-logout" onClick={singOut}>{buttonText}</a>}
      </div>
    </header>
  );
}

export default Header;