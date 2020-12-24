/* eslint-disable max-len */
import React from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';

import './Main.css';

const Main = ({ headerClick, loggedIn }) => (
  <section className="main">
    <Header buttonClick={headerClick} loggedIn={loggedIn} />
    <section className="main__container">
      <h1 className="main__container-title">What&apos;s going on in the world?</h1>
      <p className="main__container-subtitle">Find the latest new on any topic and save them in your personal Account</p>
      <SearchForm />

    </section>
  </section>
);

export default Main;
