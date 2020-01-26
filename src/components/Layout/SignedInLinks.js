import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';

const SignedInLinks = ({ signOut }) => {
  return (
    <ul className="right">
      <li><NavLink to="/create">Create</NavLink></li>
      <li><NavLink to="/" className="log_out" onClick={ signOut }>Log Out</NavLink></li>
      <li>
        <NavLink
          to="/"
          className="btn btn-floating pulse indigo darken-1"
        >
          AV
        </NavLink>
      </li>
    </ul>
  )
};



export default connect(null, { signOut })(SignedInLinks);
