import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Navigation from '../Layout/Navigation';
import Dashboard from '../Dashboard/Dashboard';
import ProjectDetails from '../Projects/ProjectDetails';

const App = () => {
  return (
    <>
      <Navigation />

      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/project/:id" component={ProjectDetails} />
      </Switch>
    </>
  )
};

export default App;