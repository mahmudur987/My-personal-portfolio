import img1 from "@/assets/Mahmud.png";
import { Button } from "@/components/ui/button";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import AnimatedDescription from "../animation/AnimatedDescription";
import TextAnimation from "../animation/AnimatedName";

interface Hero1Props {
  image?: {
    src: string;
    alt: string;
  };
}

const Hero = ({
  image = {
    src: img1,
    alt: "Hero section demo image showing interface components",
  },
}: Hero1Props) => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="grid items-center gap-8 lg:grid-cols-2">
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
                <Button className="text-3xl m-5" variant={"ghost"}>
                  {" "}
                  <FaLinkedin></FaLinkedin>{" "}
                </Button>
              </a>
            </div>
          </div>
          <figure className="w-full flex justify-center">
            <img
              src={image.src}
              alt={image.alt}
              className="h-[400px]  rounded-md object-cover"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;
