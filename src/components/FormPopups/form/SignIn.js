import React from 'react';
import Input from './Input';
import PopUpForm from './PopUpForm';

const SignIn = () => {
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [formValid, setFormValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  function handlePasswordChange(e) {
    console.log(e);
    setIsPasswordValid(true);
    allValid();
  }
  function handleEmailChange(e) {
    console.log(e);
    setIsEmailValid(true);
    allValid();
  }
  function allValid() {
    if (isEmailValid && isPasswordValid === true) {
      setFormValid(true);
    }
    setFormValid(true);
  }
  return (
    <PopUpForm>
      <Input type="email" name="Email" form="sign-in" handleChange={handleEmailChange} errorText="Invalid email address" valid={isEmailValid} placeholder="Enter email" />
      <Input type="password" name="Password" form="sign-in" handleChange={handlePasswordChange} placeholder="Enter password" valid={isPasswordValid} />
    </PopUpForm>
  );
};

export default SignIn;
