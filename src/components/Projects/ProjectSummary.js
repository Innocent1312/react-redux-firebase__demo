import React from 'react';

const ProjectSummary = ({ title, name, date }) => {

  return (
    <section className="project-summary section">
      <div className="card z-depth-0 project-summary">
        <div className="card-content grey-text text-darken-3">
          <h3 className="card-title">{title}</h3>
          <p>Posted by {name}</p>
          <p className="grey-text">{date}</p>
        </div>
      </div>
    </section>
  )
};

export default ProjectSummary;
