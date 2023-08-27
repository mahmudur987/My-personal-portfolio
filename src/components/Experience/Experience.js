import React from "react";

const ExperiencePage = () => {
  const experiences = [
    // {
    //   company: "ABC Web Agency",
    //   position: "Full-Stack Developer",
    //   duration: "March 2021 - Present",
    //   description:
    //     "Worked on developing full-stack web applications using the MERN stack. Collaborated with cross-functional teams to deliver high-quality and scalable solutions.",
    // },
    // {
    //   company: "XYZ Software Company",
    //   position: "Front-End Developer",
    //   duration: "January 2019 - February 2021",
    //   description:
    //     "Focused on building responsive and user-friendly interfaces using HTML, CSS, and JavaScript. Implemented client-side functionalities and worked closely with designers to bring concepts to life.",
    // },
    {
      company: "123 Web Solutions",
      position: "Web Developer Intern",
      duration: "January 2023 - July 2023",
      description:
        "Gained practical experience in web development by assisting senior developers in various projects. Developed and maintained websites using HTML, CSS, and JavaScript.",
    },
  ];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl md:text-5xl text-center font-bold mb-4">
        Experience
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {experiences.map((experience) => (
          <div
            key={experience.company}
            className="bg-white shadow-md rounded-md p-4"
          >
            <h2 className="text-2xl font-bold">{experience.position}</h2>
            <p className="text-gray-600 mt-2 text-lg">{experience.company}</p>
            <p className="text-gray-600 mt-2 text-lg    ">
              {experience.duration}
            </p>
            <p className="text-gray-700 mt-4 text-lg">
              {experience.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperiencePage;
