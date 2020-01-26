import React from 'react';

const ProjectSummary = ({ project }) => {
  return (
    <section className="project-summary section">
      <div className="card horizontal z-depth-1 project-summary">
        <div className="card-stacked">
          <div className="card-content grey-text text-darken-3">
            <h3 className="card-title">{project.title}</h3>
            <p>Posted by Anthony</p>
          </div>
          <div className="card-action">
            <p className="grey-text">11 september 16:00</p>
          </div>
        </div>
      </div>
    </section>
  )
};

export default ProjectSummary;
