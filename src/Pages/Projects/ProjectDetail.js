import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const ProjectDetail = () => {
  const project = useLoaderData();
  const {
    projectName,
    picture,
    discription,
    about,
    registered,
    tecnologies,
    features,
    clientSite,
    liveSite,
    serverSite,
  } = project;
  console.log(project);

  return (
    <div className="card w-full  shadow-xl">
      <figure>
        <img src={picture} alt="Shoes" />
      </figure>
      <div className="card-body text-left">
        <h2 className="card-title text-2xl font-bold ">
          {projectName}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p className="font-bold">{about}</p>
        <p className="font-bold">{discription}</p>

        <div className="font-bold">
          <p>Project Features</p>
          {features?.map((feature, i) => (
            <li key={i}>{feature}</li>
          ))}
        </div>

        <div className="font-bold">
          <p>Used Technology</p>
          {tecnologies?.map((feature, i) => (
            <li key={i}>{feature}</li>
          ))}
        </div>
        <p className="font-bold"> complete on {registered}</p>
        <div className="card-actions justify-end font-bold text-2xl">
          <a href={liveSite} target="_blank" className="btn btn-info btn-sm">
            Live site
          </a>
          <a href={clientSite} target="_blank" className="btn btn-info btn-sm">
            client site
          </a>
          <a
            href={serverSite}
            target="_blank"
            className={serverSite ? "btn btn-info btn-sm" : "hidden"}
          >
            {" "}
            Server site
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
