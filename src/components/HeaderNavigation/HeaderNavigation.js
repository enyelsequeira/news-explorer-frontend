/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import './HeaderNavigation.css';

const HeaderNavigation = () => (

  <div className="header">
    <nav className="header__navigation">
      <Link className="header__navigation-title" to="#">NewsExplorer</Link>
      <ul className="header__navigation-list">
        <li>
          <Link className="header__navigation-item" to="#">Home</Link>
        </li>
        <li>
          <Link className="header__navigation-item header__navigation-item_sign" to="#">Sign in</Link>
        </li>
      </ul>
    </nav>
  </div>
);

export default HeaderNavigation;
