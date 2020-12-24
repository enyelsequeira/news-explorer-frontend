import React from 'react';

const PopUpForm = ({ valid }) => (
  <section>
    <button type="button">close</button>
    <form className="form">
      <h2 className="form__title">Title goes here</h2>
      <button className={`button form__button ${valid ? '' : 'form__button_disabled'}`} type="button">Sign/up</button>
      <p className="form__text">
        or
        {' '}
        <button className="form__link" type="button">sing/up</button>
      </p>

    </form>
  </section>
);

export default PopUpForm;
