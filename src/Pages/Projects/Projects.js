import React, { useEffect, useState } from "react";
import Project from "./Project";

const Projects = () => {
  const [projects, Setprojrcts] = useState([]);

  useEffect(() => {
    fetch("projects.json")
      .then((res) => res.json())
      .then((data) => Setprojrcts(data));
  }, []);
  // console.log(projects);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-5">
      {projects.map((project) => (
        <Project key={project._id} project={project}></Project>
      ))}
    </div>
  );
};

export default Projects;
