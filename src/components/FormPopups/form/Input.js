import React from 'react';

const Input = (type, name, form, handleChange, placeholder, valid, errorText) => (
  <>
    <label className="form__input-title" htmlFor={name}>{name}</label>
    <input
      className="form__input"
      type={type}
      required
      id={`${name}-${form}`}
      name={name}
      onChange={handleChange}
      placeholder={placeholder}
    />
    <span id={`${name}-error`} className={`form__input-error ${valid ? '' : 'form__input-error_visible'}`}>{errorText}</span>

  </>

);

export default Input;
