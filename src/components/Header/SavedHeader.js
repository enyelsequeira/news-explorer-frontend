/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
// import test from '../../images/Union.png';
import testW from '../../images/logout.png';

const isLoggedIn = true;
// TODO FIGURING OUT HOW TO RENDER THIS

const SavedHeader = () => (
  <header className="header header_saved">
    <NavLink
      className="header__title"
      to="/"

    >
      NewsExplorer
    </NavLink>

    <div className="header__links">
      <NavLink
        activeClassName="header__links-item_selected"
        className="header__links-item"
        to="/"
      >
        Home

      </NavLink>
      {isLoggedIn ? (
        <>
          <NavLink activeClassName="header__links-item_selected" className="header__links-item" to="/saved-news">Saved Articles</NavLink>
          <NavLink className="header__links-item header__links-list_btn" to="/" type="button">
            Elise
            <img className="header__links-list-item_img" src={testW} alt="" />
          </NavLink>

        </>
      ) : (
          <li className="header__links-list">
            <button className="header__links-list_btn" type="button"> Sign in</button>
          </li>
        )}

    </div>
  </header>
);

export default SavedHeader;
