import React from "react";
import img from "../assets/images/contact-img.svg";

const Contact = () => {
  return (
    <div id="contact" className="max-w-[1040px] m-auto md:pl-20 p-6 py-10">
      <h1 className="py-1 text-4xl font-bold text-center text-[#001b5e]">
        Contact
      </h1>
      <div className="wrapper flex justify-center py-16 gap-52 lg:py-12">
        <div className="hidden lg:block">
          <img className="w-[550px] h-full" src={img} alt="" />
        </div>
        <div className="w-full lg:w-[600px]"> {/* Adjust width of the form container */}
          <form
            action="https://getform.io/f/fa4f1c9d-0dee-4c6e-b3b6-3386a33d786a"
            method="POST"
            encType="multipart/form-data"
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <div className="grid md:grid-cols-2 gap-4 w-full py-2">
              <div className="flex flex-col">
                <label className="uppercase text-sm py-1">Name</label>
                <input
                  className="border-2 rounded-lg p-2 flex border-gray-300"
                  type="text"
                  name="name"
                />
              </div>
              <div className="flex flex-col">
                <label className="uppercase text-sm py-1">Phone Number</label>
                <input
                  className="border-2 rounded-lg p-2 flex border-gray-300"
                  type="text"
                  name="phone"
                />
              </div>
            </div>
            <div className="flex flex-col py-1">
              <label className="uppercase text-sm py-1">Email</label>
              <input
                className="border-2 rounded-lg p-2 flex border-gray-300"
                type="email"
                name="email"
              />
            </div>
            <div className="flex flex-col py-2">
              <label className="uppercase text-sm py-1">Subject</label>
              <input
                className="border-2 rounded-lg p-2 flex border-gray-300"
                type="text"
                name="subject"
              />
            </div>
            <div className="flex flex-col py-2">
              <label className="uppercase text-sm py-1">Message</label>
              <textarea
                className="border-2 rounded-lg p-2 flex border-gray-300"
                rows="5"
                name="message"
              ></textarea>
            </div>
            <button className="bg-[#001b5e] text-gray-100 mt-4 w-full p-4 rounded-lg">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
