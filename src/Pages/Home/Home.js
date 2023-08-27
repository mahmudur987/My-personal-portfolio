import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
const Home = () => {
  AOS.init();
  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="2000"
      className="hero h-[100%] rounded-3xl"
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kaW5nJTIwd2FsbHBhcGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60")`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center  text-sky-100">
        <div className="max-w-5xl">
          <h1
            data-aos="zoom-in-down"
            data-aos-duration="3000"
            className="mb-5 text-5xl font-bold"
          >
            {" "}
            Hi, I am Mahmudur Rahman{" "}
          </h1>
          <p
            data-aos="flip-up"
            data-aos-duration="3000"
            className="mb-5 w-full"
          >
            I am a full-stack developer, I possess a comprehensive understanding
            of front-end and back-end development. I am well-versed in HTML,
            CSS, and JavaScript, and have a deep knowledge of React, Redux,
            TypeScript, Next Js, Node js, Express Js and MongoDB. I can provide
            clean code and pixel-perfect design. I also make the website more &
            more interactive with web animations. Let's collaborate and build
            something extraordinary together.
          </p>
          <a
            rel="noreferrer"
            href="https://www.facebook.com/mahmudur.rahman.98478/"
            target={"_blank"}
          >
            <button className="text-3xl m-5">
              {" "}
              <FaFacebook></FaFacebook>{" "}
            </button>
          </a>
          <a
            rel="noreferrer"
            href="https://github.com/mahmudur987"
            target={"_blank"}
          >
            <button className="text-3xl m-5">
              {" "}
              <FaGithub></FaGithub>{" "}
            </button>
          </a>
          <a
            rel="noreferrer"
            target={"_blank"}
            href="https://www.linkedin.com/in/md-mahmudur-rahman-466598259/"
          >
            <button className="text-3xl m-5">
              {" "}
              <FaLinkedin></FaLinkedin>{" "}
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
