import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import TextAnimation from "../../components/animation/AnimatedName";
import AnimatedDescription from "../../components/animation/AnimatedDescription";
const Home = () => {
  AOS.init();

  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="2000"
      className="hero h-[100%] rounded-3xl"
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1640&q=80")`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center  text-sky-100">
        <div className="max-w-5xl">
          <div className="w-full h-16 flex justify-center items-center">
            <TextAnimation />
          </div>

          <p className="mb-5 w-full">
            <AnimatedDescription />
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
