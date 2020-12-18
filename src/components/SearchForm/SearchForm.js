import React from 'react';
import './SearchForm.css';

const SearchForm = () => (
  <div className="search">
    <h1 className="search__title">What&apos;s going on in the world?</h1>
    <p className="search__subtitle">Find the latest new on any topic and save them in your personal account.</p>
    <form className="search-form__form">
      <input className="search-form__search-bar" placeholder="Enter a topic" />
      <button className="search-form__search-button" type="submit">
        Search
      </button>
    </form>
  </div>
);

export default SearchForm;
