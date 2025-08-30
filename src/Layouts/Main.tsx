import { useState } from "react";
import { Link, Outlet } from "react-router";

import img1 from "../assets/Mahmud.png";
import Navbar from "@/components/Common/Navbar/Navbar";
import Footer from "@/components/Common/Footer/Footer";
const links = [
  { name: "Home", path: "/" },
  { name: "Resume", path: "/resume" },
  { name: "Portfolio", path: "/projects" },
  { name: "Contact", path: "/contact" },
  { name: "BLOG", path: "/blog" },
];

const Main = () => {
  return (
    <main className="min-h-screen container mx-auto flex flex-col justify-between items-center">
      <Navbar />

      <section className="w-full h-full grow">
        <Outlet />
      </section>

      <Footer />
    </main>
  );
};

export default Main;
