/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import CurrentUserContext from '../../contexts/CurrentUserContext';

import testW from '../../images/logout.png';

const Header = ({ loggedIn, buttonClick }) => {
  console.log(buttonClick, 8588);
  const currentUser = useContext(CurrentUserContext);
  const [burger, setBurger] = useState(true);

  // const toggleClass = () => {
  //   const nav = document.querySelector('.header__links');
  //   console.log(nav, 858);

  //   if (nav.classList.contains('header__links')) {
  //     setBurger(false);
  //     nav.classList.replace('header__links', 'header__links-open');
  //   } else if (nav.classList.contains('header__links-open')) {
  //     setBurger(true);
  //     nav.classList.replace('header__links-open', 'header__links');
  //   }
  // };

  const toggleDropDown = () => {
    setBurger(!burger);
  };

  const headerButtonClick = () => {
    buttonClick();
    toggleDropDown();
  };

  // const test = () => {
  //   const x = document.getElementById('header__links');
  //   if (x.style.display === 'block') {
  //     setBurger(true);
  //     x.style.display = 'none';
  //   } else {
  //     setBurger(false);
  //     x.style.display = 'block';
  //   }
  // };
  return (
    <header className={`header ${burger ? '' : 'header__mobile'}`}>
      <NavLink
        className="header__title"
        to="/"
      >
        NewsExplorer
      </NavLink>

      <button onClick={toggleDropDown} type="button" className={`header__hamburger ${burger ? 'button__open' : 'button__close'}`} />

      <div id="header__links" className={`header__links ${burger ? 'header__links-hidden' : 'header__links-open'}`}>
        <NavLink activeClassName="header__links-item_selected" className="header__links-item" to="/">Home</NavLink>

        <NavLink activeClassName="header__links-item_selected" className={`header__links-item ${loggedIn ? '' : 'header__links-item_hidden'}`} to="/saved-news"> Saved Articles</NavLink>

        <button className="header__links-button" type="button" onClick={headerButtonClick}>
          {loggedIn ? `${currentUser.name}` : 'Sign in'}
          {loggedIn && <img className={loggedIn ? 'header__links-button_image' : 'header__links-button_image header__links-button_image-hidden'} src={testW} alt="Logout" />}

        </button>
      </div>

    </header>
  );
};

export default Header;
