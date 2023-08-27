import React, { useEffect, useState } from "react";
import Project from "./Project";
import Loading from "../../components/Loading/Loading";
import { worksData } from "../../constant/worksData";
import WorkCard from "../../components/workCard/WorkCard";

const Projects = () => {
  const [projects, Setprojrcts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://portfolio-server-navy.vercel.app/projects")
      .then((res) => res.json())
      .then((data) => {
        Setprojrcts(data);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return (
      <div className="min-h-[400px] flex justify-center items-center">
        <Loading />
      </div>
    );
  }
  const sortedProjects = projects.slice().sort((a, b) => {
    return new Date(b.registered) - new Date(a.registered);
  });
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-5">
        {sortedProjects.map((project) => (
          <Project key={project._id} project={project}></Project>
        ))}
      </div>

      <div className="my-10 border ">
        <h1 className="my-5 text-center text-2xl md:text-3xl lg:text-4xl font-bold text-green-700 border border-green-500">
          Some Small Project{" "}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-5">
          {worksData.map((work, i) => (
            <WorkCard key={i} work={work} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
