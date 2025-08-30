import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FaStar } from "react-icons/fa";

interface Work {
  picture: string;
  projectName: string;
  about: string;
  technologies: string[];
  features: string[];
}

const WorkCardSmall = ({ work }: { work: Work }) => {
  const { picture, projectName, about, technologies, features } = work;

  return (
    <Card className="w-full max-w-sm overflow-hidden shadow-md rounded-2xl">
      {/* Image */}
      <div className="w-full h-64 overflow-hidden">
        <img
          src={picture}
          alt={projectName}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Content */}
      <CardHeader>
        <CardTitle className="uppercase text-xl font-bold">
          {projectName}
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* About */}
        <p className="text-sm text-muted-foreground font-mono">{about}</p>

        {/* Technologies */}
        <div>
          <p className="font-semibold mb-1">Technologies:</p>
          <div className="flex flex-wrap gap-2">
            {technologies?.slice(0, 2).map((tech, i) => (
              <Badge key={i} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Features */}
        <div>
          <p className="font-semibold mb-1">Features:</p>
          <ul className="flex flex-col gap-2">
            {features.slice(0, 1).map((feature, i) => (
              <li key={i} className="flex items-start gap-2">
                <FaStar className="text-yellow-500 mt-1" />
                <span className="text-sm">{feature.slice(0, 50)}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

const WorkCard = ({ work }) => {
  const {
    picture,
    projectName,
    about,
    technologies,
    features,
    liveSite,
    serverSite,
    clientSite,
  } = work;
  console.log(work);
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
          <h2 className="card-title uppercase   "> {projectName} </h2>
          <p className=" font-mono"> {about} </p>
        </div>
        {/* technologies */}
        <div className="my-3">
          Technologies:
          <p className="grid md:grid-cols-2">
            {" "}
            {technologies?.map((x, i) => (
              <p className=" flex flex-wrap" key={i}>
                <span className="  ">{x}</span>
              </p>
            ))}{" "}
          </p>
        </div>

        {/* features */}

        <div className="my-3">
          Features :
          <ul className="flex flex-col gap-3">
            {" "}
            {features.map((x, i) => (
              <li className="   flex gap-2  " key={i}>
                <FaStar /> {x}
              </li>
            ))}{" "}
          </ul>
        </div>

        <div className="card-actions justify-end">
          {clientSite && (
            <a href={clientSite} target="_blank" rel="noreferrer">
              {" "}
              <button className="btn btn-primary btn-sm">Front-end</button>
            </a>
          )}
          {serverSite && (
            <a href={serverSite} target="_blank" rel="noreferrer">
              {" "}
              <button className="btn btn-secondary btn-sm">Back-end</button>
            </a>
          )}
          {liveSite && (
            <a href={liveSite} target="_blank" rel="noreferrer">
              {" "}
              <button className="btn btn-btn-info btn-sm">Live</button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export { WorkCardSmall };

export default WorkCard;
