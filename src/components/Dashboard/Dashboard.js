import React from 'react';
import { connect } from 'react-redux';

import Notifications from './Notifications';
import ProjectList from '../Projects/ProjectList';

const Dashboard = ({ projects }) => {
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

const mapStateToProps = (state) => ({
  projects: state.projects.projects,
});

export default connect(mapStateToProps)(Dashboard);
