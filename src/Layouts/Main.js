import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "../Pages/Common/Footer/Footer";
import Navbar from "../Pages/Common/Navbar/Navbar";
import img1 from "../assets/Mahmud.png";
const Main = () => {
  const [show, SetShow] = useState(true);
  return (
    <div className="min-h-screen w-full">
      <div>
        <Navbar SetShow={SetShow}></Navbar>
      </div>
      <div className="drawer drawer-mobile bg-base-200 h-full my-20">
        <input id="Home-drwer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side min-h-screen  w-80 lg:overflow-hidden  ">
          <label
            htmlFor="Home-drwer"
            className={
              show ? "drawer-overlay" : "sm:hidden md:hidden lg:drawer-overlay"
            }
          ></label>

          <ul
            className={
              show
                ? "menu p-4 w-80 bg-base-100 text-base-content "
                : "hidden lg:menu p-4 w-80 bg-base-100 text-base-content font-bold"
            }
          >
            <img
              className=" h-80  mx-auto rounded-full p-10"
              src={img1}
              alt=""
            />

            <li onClick={() => SetShow(false)}>
              {" "}
              <Link to={"/"}> Home</Link>
            </li>

            <li onClick={() => SetShow(false)}>
              {" "}
              <Link to={"/resumi"}> Resumi</Link>{" "}
            </li>
            <li onClick={() => SetShow(false)}>
              {" "}
              <Link to={"/projects"}> Portfolio</Link>{" "}
            </li>
            <li onClick={() => SetShow(false)}>
              {" "}
              <Link to={"/contact"}> Contact </Link>{" "}
            </li>
            <li onClick={() => SetShow(false)}>
              {" "}
              <Link to={"/blog"}> BLOG </Link>{" "}
            </li>
          </ul>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Main;
