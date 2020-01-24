import React from 'react';

const ProjectSummary = ({ project }) => {

  return (
    <section className="project-summary section">
      <div className="card z-depth-0 project-summary">
        <div className="card-content grey-text text-darken-3">
          <h3 className="card-title">{project.title}</h3>
          <p>Posted by Anthony</p>
          <p className="grey-text">1</p>
        </div>
      </div>
    </section>
  )
};

export default ProjectSummary;
