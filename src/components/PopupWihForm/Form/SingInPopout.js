/* eslint-disable no-shadow */
/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import PopoutWithForm from './PopUpWithForm';
import FormInput from './FormInput';

function SignInPopout({
  signInOpen, onClose, handleSubmit, toggle,
}) {
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [email, setEmail] = useState('');
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [formValid, setFormValid] = useState(false);
  const [password, setPassword] = useState('');

  const validateEmail = (email) => {
    const validation = /\S+@\S+\.\S+/;
    return validation.test(email);
  };

  const allValid = (e) => {
    setFormValid(e.target.closest('form').checkValidity());
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (password.length > 7) {
      setIsPasswordValid(true);
    }

    allValid(e);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setIsEmailValid(validateEmail(email));

    allValid(e);
  };

  const handleSignInSubmit = (e) => {
    e.preventDefault();
    handleSubmit({ email, password });
    setEmail('');
    setPassword('');
  };

  return (
    <PopoutWithForm isOpen={signInOpen} buttonText="Sign in" onClose={onClose} title="Sign in" link="Sign up" toggle={toggle} handleSubmit={handleSignInSubmit} valid={formValid}>

      <FormInput type="email" name="Email" form="sign-in" handleChange={handleEmailChange} errorText="Invalid email address" valid={isEmailValid} placeholderText="Enter email" />

      <FormInput type="password" name="Password" form="sign-in" handleChange={handlePasswordChange} placeholderText="Enter password" valid={isPasswordValid} />

    </PopoutWithForm>
  );
}
export default SignInPopout;
