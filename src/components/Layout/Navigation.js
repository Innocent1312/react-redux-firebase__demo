import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

const Navigation = ({ auth }) => {
  const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks/>;

  return (
    <nav className="nav-wrapper grey darken-4">
      <div className="container">
        <Link to="/" className="brand-logo left">Home</Link>
        { links }
      </div>
    </nav>
  )
};

const mapStateToProps = (state) => ({
  auth: state.firebase.auth
});

export default connect(mapStateToProps)(Navigation);
