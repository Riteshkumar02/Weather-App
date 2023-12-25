import React, { useState } from 'react';
import './Css.css';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    password: ''
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formState.name && formState.password) {
      
      navigate('/');
    }
    alert(" Account Created Succesfully!")
  
  };
  
  return (
    <div className='main'>
      <h2 className='h2'>Register</h2>
      <form onSubmit={handleSubmit}>
        <label className='reg dis'>
          Your Name:-
           <input className='reg'
            type="text"
            name="name"
            value={formState.name} required
            onChange={handleChange}
          />
        </label>
        <label className='reg'>
          Email:-
          <input className='reg' required
            type="text"
            name="email"
            value={formState.email}
            onChange={handleChange}
          />
        </label>
        <label className='reg'>
          Password:-
          <input className='reg' required
            type="password"
            name="password"
            value={formState.password}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Sign Up</button>
        <p>Have an account?       <a  href='/'>Sign In</a>
</p>
      </form>
    </div>
  );
}
