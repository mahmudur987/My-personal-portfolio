import React from "react";
import { Link } from "react-router-dom";

const Project = ({ project }) => {
  // console.log(project);
  const { projectName, about, _id, picture } = project;
  return (
    <div className="card card-compact h-96  bg-base-100 shadow-xl">
      <figure>
        <img src={picture} alt="Shoes" />
      </figure>
      <div className="card-body text-left">
        <h2 className="card-title">Projects Name : {projectName} </h2>
        <p> {about} </p>
        <p> Tecnology : React.js ,tailwindCSS,Mongodb,Firebase </p>

        <div className="card-actions justify-end">
          <Link to={`/projectdetail/${_id}`}>
            <button className="btn btn-primary">Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Project;
