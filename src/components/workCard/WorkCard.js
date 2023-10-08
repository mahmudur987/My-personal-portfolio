import React from "react";
import { FaStar } from "react-icons/fa";
const WorkCard = ({ work }) => {
  const { Specialty, picture, projectName, about, tecnologies, features } =
    work;

  return (
    <div className="card card-compact w-full max-w-sm p-2 bg-base-100 shadow-xl">
      <figure>
        <img
          className=" h-80 w-full m-3 rounded-lg"
          src={picture}
          alt="Shoes"
        />
      </figure>
      <div className="card-body justify-between text-left">
        <div>
          <h2 className="card-title uppercase   text-green-600">
            {" "}
            {projectName}{" "}
          </h2>
          <p className="  text-pink-500"> {about} </p>
        </div>
        {/* tech */}
        <div className="my-3">
          Technologies:
          <p className="grid md:grid-cols-2">
            {" "}
            {tecnologies.map((x, i) => (
              <p className=" flex flex-wrap" key={i}>
                {i + 1}. <span className="  ">{x}</span>
              </p>
            ))}{" "}
          </p>
        </div>
        {/* features */}

        <div className="my-3">
          Features :
          <ul className="flex flex-col">
            {" "}
            {features.map((x, i) => (
              <li className="   flex gap-2 items-center " key={i}>
                <FaStar /> {x}
              </li>
            ))}{" "}
          </ul>
        </div>
        {/* special */}

        <div>
          Specialty :
          <span className="font-semibold text-red-500"> {Specialty}</span>
        </div>

        <div className="card-actions justify-end">
          <button className="btn btn-primary btn-sm">Client-Site</button>
          <button className="btn btn-secondary btn-sm">Server-Site</button>
          <button className="btn btn-btn-info btn-sm">Live</button>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
