import React from 'react';

const ProjectDetails = ({ match }) => {
  const id = match.params.id;

  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <h3 className="card-title">Title - {id}</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Alias distinctio dolor dolorem et exercitationem facere
            facilis illum laboriosam mollitia vitae.
          </p>
        </div>
        <div className="card-action grey-lighten-4 grey-text">
          <div>Posted by Anthony</div>
          <div>11th September, 16:00</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
