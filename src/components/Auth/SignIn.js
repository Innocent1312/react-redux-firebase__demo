import React, { useState } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authActions';
import { Redirect } from 'react-router-dom';

const SignIn = ({ signIn, auth, authError }) => {
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
    signIn({ email, password })
  };

  if(auth.uid) return <Redirect to="/" />;

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
          <button type="submit" className="btn indigo darken-1 z-depth-0">Sign In</button>
          <div className="red-text center">
            { authError ? <p>{authError}</p> : null}
          </div>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  authError: state.auth.authError,
  auth: state.firebase.auth
});

export default connect(mapStateToProps, { signIn })(SignIn);