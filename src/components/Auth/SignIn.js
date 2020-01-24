import React, { useState } from 'react';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleMailChange = (event) => {
    setEmail(event.target.value);
  };


  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({email, password})
  };

  return (
    <div  className="container">
      <form className="white" onSubmit={handleSubmit} >
        <h5 className="grey-text text-darken-3">Sing In</h5>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" onChange={handleMailChange} />
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" onChange={handlePasswordChange} />
        </div>
        <div className="input-field">
          <button type="submit" className="btn indigo darken-1 z-depth-0">Login</button>
        </div>
      </form>
    </div>

  );
};

export default SignIn;