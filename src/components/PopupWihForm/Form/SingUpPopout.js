/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import PopoutWithForm from './PopUpWithForm';
import FormInput from './FormInput';

function SignUpPopout(props) {
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isUserValid, setIsUserValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [formValid, setFormValid] = useState(true);
  const allValid = () => {
    if (isEmailValid && isUserValid && isPasswordValid === true) {
      setFormValid(true);
    }
    setFormValid(false);
  };

  const handleEmailChange = () => {
    setIsEmailValid(true);
    allValid();
  };
  const handlePasswordChange = () => {
    setIsPasswordValid(true);
    allValid();
  };
  const handleUserChange = () => {
    setIsUserValid(true);
    allValid();
  };

  return (
    <PopoutWithForm isOpen={props.signUpOpen} buttonText="Sign up" onClose={props.onClose} title="Sign up" link="Sign in" toggle={props.toggle} handleSubmit={props.handleSubmit} valid={formValid}>

      <FormInput type="email" name="Email" form="sign-up" handleChange={handleEmailChange} errorText="Invalid email address" valid={isEmailValid} placeholderText="Enter email" />

      <FormInput type="password" name="Password" form="sign-up" handleChange={handlePasswordChange} placeholderText="Enter password" />

      <FormInput type="text" name="Username" form="sign-up" handleChange={handleUserChange} errorText="This username is not available" valid={isUserValid} placeholderText="Enter your username" />

    </PopoutWithForm>
  );
}
export default SignUpPopout;
