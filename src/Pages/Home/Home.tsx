import AOS from "aos";
import "aos/dist/aos.css";

import Hero from "@/components/Home/Hero";

import { Button } from "@/components/ui/button";
import HomeSkills from "@/components/Home/HomeSkills";
import { RunningProjects } from "@/constant/worksData";
import { WorkCardSmall } from "@/components/workCard/WorkCard";
import CTA from "@/components/Home/CTA";

function HomeComponent() {
  return (
    <div className="space-y-16">
      {/* About Section */}

      {/* Skills */}
      <HomeSkills />

      {/* Featured Projects */}
      <div className="my-10">
        <div className=" my-10 md:my-20 lg:my-30 ">
          <h1 className="my-5 text-center text-2xl md:text-3xl lg:text-4xl   text-green-700  uppercase">
            Projects{" "}
          </h1>

          <div className="flex justify-around flex-wrap gap-5">
            {RunningProjects?.slice(0, 3)?.map((work, i) => (
              <WorkCardSmall key={i} work={work} />
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <CTA />
    </div>
  );
}

const Home = () => {
  AOS.init();

  return (
    <>
      <div
        data-aos="zoom-in"
        data-aos-duration="2000"
        className="hero h-[100%] rounded-3xl"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1640&q=80")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>

        <Hero />
      </div>
      <HomeComponent />
    </>
  );
};

export default Home;
