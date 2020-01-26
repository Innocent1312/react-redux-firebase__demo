import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom'

import Notifications from './Notifications';
import ProjectList from '../Projects/ProjectList';

const Dashboard = ({ projects, auth }) => {
  if(!auth.uid) return <Redirect to="/sign-in" />;

  return (
    <div className="dashboard container">
      <div className="row">
        <div className="col s12 m5 pull-m1 ">
          <ProjectList projects={ projects } />
        </div>
        <div className="col s12 m4 offset-m3">
          <Notifications />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth
  }
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'projects' }
  ])
)(Dashboard);
