import React from 'react';
import ProjectSummary from './ProjectSummary';

const ProjectList = () => {
  return (
    <div className="project-list">
      <ProjectSummary
        title="Project Title"
        name="Anthony"
        date="11th September, 16:00"
      />
      <ProjectSummary
        title="Project Title"
        name="Anthony"
        date="11th September, 16:00"
      />
      <ProjectSummary
        title="Project Title"
        name="Anthony"
        date="11th September, 16:00"
      />
    </div>
  )
};

export default ProjectList;
