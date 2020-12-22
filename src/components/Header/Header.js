/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
// // import test from '../../images/Union.png';
import testW from '../../images/logout.png';

const isLoggedIn = true;

const Header = () => (
  <header className="header">
    <NavLink
      className="header__title"
      to="/"
    >
      NewsExplorer
    </NavLink>

    <div className="header__links">
      <NavLink activeClassName="header__links-item_selected" className="header__links-item" to="/">Home</NavLink>
      {isLoggedIn ? <NavLink activeClassName="header__links-item_selected" className="header__links-item" to="/saved-news">Saved Articles</NavLink> : null}
      <button className="header__links-button" type="button">
        {isLoggedIn ? 'Elise' : 'Sign in'}
        <img className={isLoggedIn ? 'header__links-button_image' : 'header__links-button_image header__links-button_image-hidden'} src={testW} alt="Logout" />
      </button>
    </div>

  </header>
);

export default Header;
