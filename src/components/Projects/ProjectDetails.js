import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase';

const ProjectDetails = ({ project }) => {
  if ( project ) {
    return (
      <div className="container section project-details">
        <div className="card z-depth-1">
          <div className="card-content">
            <h3 className="card-title">{ project.title }</h3>
            <p>{ project.content }</p>
          </div>
          <div className="card-action grey-lighten-4 grey-text">
            <div>Posted by { project.authorFirstName } { project.authorLastName }</div>
            <div>11th September, 16:00</div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container center">
        <p>Loading...</p>
      </div>
    )
  }
};

const mapStateToProps = (state, { match }) => {
  const id = match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null;

  return { project }
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'projects' }
  ])
)(ProjectDetails);
