import React from 'react';
import HeaderNavigation from '../HeaderNavigation/HeaderNavigation';
import SearchForm from '../SearchForm/SearchForm';
import './Header.css';

const Header = () => (
  <div className="header__container">
    <header className="header__container-nav">
      <HeaderNavigation />
    </header>
    <SearchForm />

  </div>

);

export default Header;
