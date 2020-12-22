import React from 'react';
import './SearchForm.css';

const SearchForm = () => (
  <div className="search">
    <input placeholder="Enter topic" className="search__input" />
    <button type="submit" className="button search__button">Search</button>
  </div>
);

export default SearchForm;
