import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Navigation from '../Layout/Navigation';
import Dashboard from '../Dashboard/Dashboard';
import ProjectDetails from '../Projects/ProjectDetails';
import SignIn from '../Auth/SignIn';
import SignUp from '../Auth/SignUp';

const App = () => {
  return (
    <>
      <Navigation />

      <Switch>
        <Route path="/" exact component={ Dashboard } />
        <Route path="/project/:id" component={ ProjectDetails } />
        <Route path="/sign-in" component={ SignIn } />
        <Route path="/sign-up" component={ SignUp } />
      </Switch>
    </>
  )
};

export default App;