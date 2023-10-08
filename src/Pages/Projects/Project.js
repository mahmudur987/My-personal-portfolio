import React from "react";
import { Link } from "react-router-dom";

const Project = ({ project }) => {
  const { projectName, about, _id, picture, tecnologies } = project;

  return (
    <div className="card card-compact w-full max-w-sm p-2 bg-base-100 shadow-xl">
      <figure>
        <img
          className=" h-80 w-full m-3 rounded-lg"
          src={picture}
          alt="Shoes"
        />
      </figure>
      <div className="card-body text-left">
        <h2 className="card-title uppercase   text-blue-800">
          {" "}
          {projectName}{" "}
        </h2>
        <p className=" "> {about} </p>
        <p>
          Technologies :
          <p className="grid md:grid-cols-2">
            {" "}
            {tecnologies.map((x, i) => (
              <p className="mx-2" key={i}>
                {i + 1}. {x}
              </p>
            ))}{" "}
          </p>
        </p>

        <div className="card-actions justify-end">
          <Link to={`/projectdetail/${_id}`}>
            <button className="btn btn-outline">Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Project;
