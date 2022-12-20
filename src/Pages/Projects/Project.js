import React from "react";
import { Link } from "react-router-dom";

const Project = ({ project }) => {
  // console.log(project);
  const { projectName, about, _id, picture } = project;
  return (
    <div className="card card-compact p-2 bg-base-100 shadow-xl">
      <figure>
        <img
          className=" h-80 w-full m-3 rounded-lg"
          src={picture}
          alt="Shoes"
        />
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
