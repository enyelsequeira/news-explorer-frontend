/* eslint-disable react/destructuring-assignment */
import React from 'react';

const FormInput = ({
  name, form, type, handleChange, placeholderText, valid, errorText,
}) => (
  <>
    <label htmlFor={name} className="form__input-title">{name}</label>
    <input
      required
      id={`${name}-${form}`}
      className="form__input"
      type={type}
      name={name}
      onChange={handleChange}
      placeholder={placeholderText}
    />
    <span
      id={`${name}-error`}
      className={`form__input-error ${valid ? '' : 'form__input-error_visible'}`}
    >
      {errorText}

    </span>
  </>

);

export default FormInput;
