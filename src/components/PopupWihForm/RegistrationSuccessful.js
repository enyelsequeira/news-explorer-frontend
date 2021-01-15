/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';

const RegistrationSuccessful = ({ isOpen, onClose, redirectLink }) => (

  <section className={`popout ${isOpen ? 'popout_active' : ''}`} onClick={onClose}>

    <button className="popout__close-button" onClick={onClose} type="button" />
    <div className="popout__container">

      <h2 className="popout__container-title">Registration successfully completed</h2>

      <button onClick={redirectLink} type="button" className="popout__container-link">Sign In</button>
    </div>
  </section>
);

export default RegistrationSuccessful;
