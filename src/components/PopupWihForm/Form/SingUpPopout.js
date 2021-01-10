/* eslint-disable no-shadow */
/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import PopoutWithForm from './PopUpWithForm';
import FormInput from './FormInput';

function SignUpPopout(props) {
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [email, setEmail] = useState('');
  const [isUserValid, setIsUserValid] = useState(true);
  const [user, setUser] = useState('');
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [password, setPassword] = useState('');

  const [formValid, setFormValid] = useState(true);

  const validateEmail = (email) => {
    const validation = /\S+@\S+\.\S+/;
    return validation.test(email);
  };

  const allValid = (e) => {
    setFormValid(e.target.closest('form').checkValidity());
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setIsEmailValid(validateEmail(email));
    allValid(e);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (password.length > 6) {
      setIsPasswordValid(true);
    } else {
      setIsPasswordValid(false);
    }
    allValid(e);
  };
  const handleUserChange = (e) => {
    setUser(e.target.value);
    setIsUserValid(true);
    allValid(e);
  };
  const signUpSubmit = (e) => {
    e.preventDefault();
    props.handleSubmit({ email, password, name: user });
    // setEmail('');
    // setPassword('');
    // setUser('');
  };

  return (
    <PopoutWithForm isOpen={props.signUpOpen} buttonText="Sign up" onClose={props.onClose} title="Sign up" link="Sign in" toggle={props.toggle} handleSubmit={signUpSubmit} valid={formValid}>

      <FormInput type="email" name="Email" form="sign-up" handleChange={handleEmailChange} errorText="Invalid email address" valid={isEmailValid} placeholderText="Enter email" />

      <FormInput type="password" name="Password" form="sign-up" handleChange={handlePasswordChange} placeholderText="Enter password" errorText="Password requires additional characters" valid={isPasswordValid} />

      <FormInput type="text" name="Username" form="sign-up" handleChange={handleUserChange} errorText="This username is not available" valid={isUserValid} placeholderText="Enter your username" />

    </PopoutWithForm>
  );
}
export default SignUpPopout;
