import "aos/dist/aos.css";
import Aos from "aos";
import { Badge } from "../ui/badge";
import { Progress } from "../ui/progress";
import { Link } from "react-router";
import { Button } from "../ui/button";
const HomeSkills = () => {
  Aos.init();
  const skills = [
    { name: "HTML", progress: 90 },
    { name: "CSS", progress: 85 },
    { name: "JavaScript", progress: 80 },
    { name: "React", progress: 85 },
    { name: "Node.js", progress: 75 },
    { name: "Express.js", progress: 70 },
    { name: "Next.js", progress: 80 },
    { name: "TypeScript", progress: 50 },
    { name: "Redux", progress: 50 },
  ];

  return (
    <div className="container mx-auto py-8  w-full flex flex-col gap-10">
      <h1 className="text-5xl text-center   mb-4"> Skills</h1>
      <div className="max-w-3xl mx-auto w-full ">
        {skills.map((skill) => (
          <div
            data-aos="fade-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1500"
            key={skill.name}
            className="bg-white shadow-md rounded-md p-4"
          >
            <Badge key={skill.name}>{skill.name}</Badge>

            <div className="h-3 bg-gray-200 rounded overflow-hidden mt-3">
              <Progress value={skill.progress} />
            </div>
          </div>
        ))}
      </div>

      <Link to={"/resume"} className="flex justify-end">
        <Button variant={"link"}>see more</Button>
      </Link>
    </div>
  );
};

export default HomeSkills;
