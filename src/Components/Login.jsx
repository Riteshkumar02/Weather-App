import React, { useState } from 'react';
import './Css.css';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const [input, setInput] = useState({ email: "", password: "" });

  const handleLogin = (e) => {
    e.preventDefault();
    if (input.isEmailValid && input.isPasswordValid) {
      // Your login logic goes here
      // If the login is successful, navigate to the homepage
      navigate('/App');
    } else {
      // If the email or password is not valid, show an error message
      if (!input.isEmailValid) {
        alert('Please enter a valid email address');
      } else {
        alert('Please enter a valid password');
      }
    }
  }

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }

  const handleEmailChange = (e) => {
    const email = e.target.value;
    const isValidEmail = validateEmail(email);
    
    setInput({ ...input, email: email, isEmailValid: isValidEmail });
  }

  const validatePassword = (password) => {
    return password.length >= 6;
  }
  
  const handlePasswordChange = (e) => {
    const password = e.target.value;
    let isPasswordValid = true;
    if (password) {
      isPasswordValid = validatePassword(password);
    }
    setInput({ ...input, password: password, isPasswordValid: isPasswordValid });
  }
  
  

  return (
    <div className='main'>
    <div>
    <h2 className='h2'>Login</h2>
    <form onSubmit={handleLogin}>
      <div style={{ display: "inline-block" }}>
        <label style={{padding:"15px"}} className='dis' htmlFor='email'>Email:- </label>
        <input className='dis'
          id='email'
          name='email'
          value={input.email}
          onChange={handleEmailChange}
          type='email'
        />
      </div>
      {!input.isEmailValid && (
        <p style={{ color: "red" }}>Please enter a valid email address</p>
      )}
      <br />
      <div>
        <label style={{padding:"2px",margin:"5px"}}>Password:- </label>
        <input
          name='password'
          value={input.password}
          onChange={handlePasswordChange}
          type='password'
        />
        {!input.isPasswordValid ?
          <p style={{ color: "red" }}>Please enter a password that is at least 6 characters long</p> :
          ""
        }
      </div>
      <br />
      <button type='submit'>Sign In</button>
      <p>Don't have an account? <a href='/Register'>Sign up</a></p>
    </form>
    </div>
  </div>
  
  )
}
