import React, { useState } from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contacts = () => {
  const [Result, SetResult] = useState(false);

  const form = useRef();
  const handleSubmit = (event) => {
    event.preventDefault();
    const forms = event.target;
    // const message = form.message.value;
    // const YourName = form.YourName.value;
    // const PhoneNumber = form.PhoneNumber.value;
    // const YourEmail = form.YourEmail.value;

    // const fullInfo = { message, YourName, PhoneNumber, YourEmail };
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
          SetResult(true);
        },
        (error) => {
          alert(error.text);
          console.log(error.text);
        }
      );
    forms.reset();
  };

  // hide result
  setTimeout(() => {
    SetResult(false);
  }, 5000);

  return (
    <div className=" grid items-center w-full">
      <form ref={form} onSubmit={handleSubmit}>
        <div className="form-control  h-30 ">
          <label className="label">
            <span className="label-text">Your Email Address </span>
          </label>
          <input
            type="text"
            name="YourEmail"
            placeholder="Type here"
            className="input input-bordered  h-30 lg:w-3/4 "
          />
        </div>
        <div className="form-control  h-30 ">
          <label className="label">
            <span className="label-text">Your Name</span>
          </label>
          <input
            type="text"
            name="YourName"
            placeholder="Type here"
            className="input input-bordered  h-30 lg:w-3/4 "
          />
        </div>
        <div className="form-control  h-30 ">
          <label className="label">
            <span className="label-text">Your Phone Number</span>
          </label>
          <input
            type="text"
            name="PhoneNumber"
            placeholder="Type here"
            className="input input-bordered  h-30 lg:w-3/4 "
          />
        </div>
        <div className="form-control  h-30 ">
          <label className="label">
            <span className="label-text">Message</span>
          </label>
          <input
            type="text"
            name="message"
            placeholder="Type here"
            className="input input-bordered  h-60 lg:w-3/4 "
          />
        </div>

        <button className=" btn btn-info m-5">send email</button>
        <div>
          {" "}
          {Result && (
            <p className="text-red-500">
              {" "}
              your email hasbeen sent successfully
            </p>
          )}{" "}
        </div>
      </form>
    </div>
  );
};

export default Contacts;
