import React, { useState } from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";

const Contacts = () => {
  const [Result, SetResult] = useState(false);

  const form = useRef();
  const handleSubmit = (event) => {
    event.preventDefault();
    const forms = event.target;

    emailjs
      .sendForm(
        "service_5zxb6mm",
        "template_8lpvopr",
        form.current,
        "r-F-M4rm1mxZ7NMHr"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("your email hasbeen sent successfully");
          SetResult(true);
        },
        (error) => {
          alert(error.text);
          console.log(error.text);
        }
      );
    forms.reset();
  };

  setTimeout(() => {
    SetResult(false);
  }, 5000);

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl md:text-5xl text-center font-extrabold uppercase">
        Cotact Me
      </h1>

      <div className="max-w-6xl w-full flex justify-center mx-auto my-24 ">
        <form className="w-full md:w-3/4" ref={form} onSubmit={handleSubmit}>
          <div className="form-control  ">
            <label className="label">
              <span className="label-text">Your Email Address </span>
            </label>
            <input
              required
              type="text"
              name="YourEmail"
              placeholder="Type here"
              className="input input-bordered  h-30 lg:w-3/4 "
            />
          </div>
          <div className="form-control  ">
            <label className="label">
              <span className="label-text">Your Name</span>
            </label>
            <input
              required
              type="text"
              name="YourName"
              placeholder="Type here"
              className="input input-bordered  h-30 lg:w-3/4 "
            />
          </div>
          <div className="form-control  ">
            <label className="label">
              <span className="label-text">Your Phone Number</span>
            </label>
            <input
              required
              type="text"
              name="PhoneNumber"
              placeholder="Type here"
              className="input input-bordered  h-30 lg:w-3/4 "
            />
          </div>
          <div className="form-control  ">
            <label className="label">
              <span className="label-text">Message</span>
            </label>
            <textarea
              required
              type="text"
              name="message"
              placeholder="Type here"
              className="textarea textarea-bordered h-52 lg:w-3/4"
            />
          </div>

          <p className="flex justify-end w-3/4">
            <button className=" btn btn-info m-5">send email</button>
          </p>
        </form>
      </div>
      <div className="flex justify-around flex-wrap gap-5 w-full my-24">
        <div className="flex flex-col items-center gap-5">
          <h3 className="text-3xl  ">Email Me</h3>
          <p className="text-xl">mdmahmudurrahman987@gmail.com</p>
        </div>
        <div className="flex flex-col items-center gap-5">
          <h3 className="text-3xl  ">Call Me</h3>
          <p className="text-xl">+8801671706882</p>
        </div>
        <div className="flex flex-col items-center gap-5">
          <h3 className="text-3xl  ">Address</h3>
          <p className="text-xl">21/2,Meradia,Khilgaon,Dhaka</p>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
