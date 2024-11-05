import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import './App.css';

export const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const collectData = async (e) => {
    e.preventDefault();
    let result = await fetch('http://localhost:4000/', {
      method: 'post',
      body: JSON.stringify({ name, email, password }),
      headers: {
        'Content-Type': 'application/json'
      },
    }); 
    result = await result.json();
    localStorage.setItem("user", JSON.stringify(result));

      setName("");
      setEmail("");
      setPassword("");
  };

  return (
    <div className="main-container">
      <form className='form-container' onSubmit={collectData}>
        <h2 className='reg-title'>Registration</h2>
        <div className='form-elements'>
          <div className='input-items'>
            <TextField
              className="custom-textfield"
              id="outlined-basic1"
              label="Name"
              variant="outlined"
              required
              type='text'
              value={name}
              onChange={(e) =>setName(e.target.value)}
            />
            <TextField
              className="custom-textfield"
              id="outlined-basic2"
              label="Email"
              variant="outlined"
              type='email'
              value={email}
              onChange={(e) =>setEmail(e.target.value)}
            />
            <TextField
              className="custom-textfield"
              id="outlined-basic3"
              label="Password"
              variant="outlined"
              required
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type='submit' className='submit-btn'>Register</button>
          <div className="line-container">
            <hr className='form-split-line' />
            <span>or</span>
          </div>
          <p className='signin'>Already have an account?<a href='/' className='anchor'> Login</a></p>
        </div>
      </form>
    </div>
  );
};
