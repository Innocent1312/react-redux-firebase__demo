import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const SignUp = ({ auth }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');

  const handleMailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSurnameChange = (event) => {
    setSurname(event.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password, name, surname })
  };

  if(auth.uid) return <Redirect to="/" />;

  return (
    <div  className="container">
      <form className="white" onSubmit={handleSubmit} >
        <h5 className="grey-text text-darken-3">Sing Up</h5>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" onChange={handleMailChange} />
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" onChange={handlePasswordChange} />
        </div>
        <div className="input-field">
          <label htmlFor="name">First Name</label>
          <input type="text" id="name" onChange={handleNameChange} />
        </div>
        <div className="input-field">
          <label htmlFor="surname">Last Name</label>
          <input type="text" id="surname" onChange={handleSurnameChange} />
        </div>
        <div className="input-field">
          <button type="submit" className="btn indigo darken-1 z-depth-0">Sign Up</button>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = state => ({
  auth: state.firebase.auth
});

export default connect(mapStateToProps)(SignUp);