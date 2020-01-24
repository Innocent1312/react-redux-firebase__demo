import React, { useState } from 'react';
import { connect } from 'react-redux';

import { createProject } from '../../store/actions/projectActions';

const CreateProject = ({ createProject }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };


  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createProject({ title, content })
  };

  return (
    <div  className="container">
      <form className="white" onSubmit={handleSubmit} >
        <h5 className="grey-text text-darken-3">Create New Project</h5>
        <div className="input-field">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" onChange={handleTitleChange} />
        </div>
        <div className="input-field">
          <label htmlFor="content">Project Content</label>
          <textarea id="content" className="materialize-textarea" onChange={handleContentChange}>{' '}</textarea>
        </div>
        <div className="input-field">
          <button type="submit" className="btn indigo darken-1 z-depth-0">Create</button>
        </div>
      </form>
    </div>
  );
};

export default connect(null, { createProject })(CreateProject);