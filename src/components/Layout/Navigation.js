import React from 'react';
import { Link } from 'react-router-dom';

import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

const Navigation = () => {

  return (
    <nav className="nav-wrapper grey darken-4">
      <div className="container">
        <Link to="/" className="brand-logo">Home</Link>
        <SignedInLinks />
        <SignedOutLinks />
      </div>
    </nav>
  )
};

export default Navigation;
