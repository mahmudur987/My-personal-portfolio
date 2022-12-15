import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "../Pages/Common/Footer/Footer";
import Navbar from "../Pages/Common/Navbar/Navbar";

const Main = () => {
  const [show, SetShow] = useState(true);
  // console.log(show);
  return (
    <div>
      <div>
        <Navbar SetShow={SetShow}></Navbar>
      </div>
      <div className="drawer drawer-mobile">
        <input id="Home-drwer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex justify-center bg-yellow-50">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side  w-80 ">
          <label
            htmlFor="Home-drwer"
            className={
              show ? "drawer-overlay" : "sm:hidden md:hidden lg:drawer-overlay"
            }
          ></label>

          <ul
            className={
              show
                ? "menu p-4 w-80 bg-base-100 text-base-content"
                : "hidden lg:menu p-4 w-80 bg-base-100 text-base-content"
            }
          >
            <img
              className=" h-80  mx-auto rounded-full p-10"
              src="https://scontent.fdac11-2.fna.fbcdn.net/v/t39.30808-6/263799867_4626557574104095_4468612514547878550_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=174925&_nc_eui2=AeEyJqgyE709PTzyI82oQl5D-z06RXG17Fz7PTpFcbXsXBVGWVt9QxPSdvuCe01DLLo7kTmxVt8yYP_wK9garJXa&_nc_ohc=yRKyhzWYaUcAX9ZuI8c&tn=_VlnxWAuySiPbMKh&_nc_ht=scontent.fdac11-2.fna&oh=00_AfBfCawTrZHHnS-7YoDfKcp04bUz2BaBmYTxy2snWLTtYA&oe=639BF40C"
              alt=""
            />

            <li onClick={() => SetShow(false)}>
              {" "}
              <Link to={"/"}>
                {" "}
                Home <label htmlFor="Home-drwer" />
              </Link>
            </li>

            <li onClick={() => SetShow(false)}>
              {" "}
              <Link to={"/resumi"}> Resumi</Link>{" "}
            </li>
            <li onClick={() => SetShow(false)}>
              {" "}
              <Link to={"/projects"}> Projects</Link>{" "}
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
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Main;
