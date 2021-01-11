/* eslint-disable react/button-has-type */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-indent */
import React, { useState } from 'react';

const SearchForm = (props) => {
  const [keyword, setKeyword] = useState('');
  const [validKeyWord, setValidKeyWord] = useState(true);
  const searchInput = document.querySelector('.search__input');

  function onSearchChange(e) {
    setKeyword(e.target.value);
    if (keyword !== '') {
      setValidKeyWord(true);
      document.querySelector('.search__button').disabled = false;
    }
  }
  function disableSearch() {
    searchInput.style.pointerEvents = 'none';
    searchInput.disabled = true;
  }
  function enableSearch() {
    searchInput.style.pointerEvents = 'auto';
    searchInput.disabled = false;
  }
  function submission(e) {
    e.preventDefault();
    disableSearch();
    if (!keyword) {
      enableSearch();
      return;
    }
    props.onSubmit(keyword);
    setTimeout(enableSearch, 1000);
  }

  return (
    <form className="search" onSubmit={submission}>
      <input placeholder="Enter topic" className="search__input" onChange={onSearchChange} onFocus={onSearchChange} />

      <span
        id={`${props.name}-error`}
        className={`form__input-error ${validKeyWord ? '' : 'form__input-error_visible'}`}
      >
        {' '}
        Please enter a keyword
        {' '}

      </span>
      <button className={`button search__button ${validKeyWord ? '' : 'search__button_disabled'}`} disabled onClick={submission}>Search</button>

    </form>
  );
};

export default SearchForm;
