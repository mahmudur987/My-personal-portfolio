import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
const Home = () => {
  return (
    <div
      className="hero min-h-screen "
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kaW5nJTIwd2FsbHBhcGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60")`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content text-sky-100">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">
            {" "}
            Hi, I am Mahmudur Rahman{" "}
          </h1>
          <p className="mb-5">
            I am a frontend web developer. I can provide clean code and pixel
            perfect design. I also make website more & more interactive with web
            animations.
          </p>
          <Link>
            <button className="text-3xl m-5">
              {" "}
              <FaFacebook></FaFacebook>{" "}
            </button>
          </Link>
          <Link>
            <button className="text-3xl m-5">
              {" "}
              <FaGithub></FaGithub>{" "}
            </button>
          </Link>
          <Link>
            <button className="text-3xl m-5">
              {" "}
              <FaLinkedin></FaLinkedin>{" "}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
