import React from "react";
import { Link } from "react-router-dom";

const ProjectList = props => {
  return (
    <>
      {props.projects.map(project => {
        return (
          <div key={project._id}>
            <h3>
              <Link to={`/projects/${project._id}`}>{project.title}</Link>
            </h3>
          </div>
        );
      })}
    </>
  );
};

export default ProjectList;
