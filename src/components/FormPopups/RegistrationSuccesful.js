/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

function RegistrationSuccessful(props) {
  return (
    <section className={`popout ${props.isOpen ? 'popout_active' : ''}`} onClick={props.onClose}>
      <button className="popout__close-button" onClick={props.onClose} />
      <div className="popout__main">
        <h2 className="popout__text">Registration successfully completed</h2>
        <button onClick={props.linkClick} className="popout__link">Sign in</button>
      </div>
    </section>
  );
}
export default RegistrationSuccessful;
