/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import PopoutWithForm from './PopUpWithForm';
import FormInput from './FormInput';

function SignInPopout({
  signInOpen, onClose, handleSubmit, toggle,
}) {
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [formValid, setFormValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(true);

  const allValid = () => {
    if (isEmailValid && isPasswordValid === true) {
      setFormValid(true);
    }
    setFormValid(true);
  };

  const handlePasswordChange = () => {
    setIsPasswordValid(true);
    allValid();
  };
  const handleEmailChange = () => {
    setIsEmailValid(true);
    allValid();
  };

  return (
    <PopoutWithForm isOpen={signInOpen} buttonText="Sign in" onClose={onClose} title="Sign in" link="Sign up" toggle={toggle} handleSubmit={handleSubmit} valid={formValid}>

      <FormInput type="email" name="Email" form="sign-in" handleChange={handleEmailChange} errorText="Invalid email address" valid={isEmailValid} placeholderText="Enter email" />

      <FormInput type="password" name="Password" form="sign-in" handleChange={handlePasswordChange} placeholderText="Enter password" valid={isPasswordValid} />

    </PopoutWithForm>
  );
}
export default SignInPopout;
