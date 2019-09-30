import React from "react";

const ProjectList = props => {
  return (
    <>
      {props.projects.map(project => {
        return (
          <div key={project._id}>
            <h3>{project.title}</h3>
          </div>
        );
      })}
    </>
  );
};

export default ProjectList;
