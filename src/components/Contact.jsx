import React from "react";
import img from "../assets/images/contact-img.svg";

const Contact = () => {
  return (
    <div id="contact" className="max-w-[1040px] m-auto p-6 py-10">
      <div className="wrapper flex flex-col lg:flex-row justify-center py-16 lg:py-12 gap-8 lg:gap-20">
        <div className="hidden lg:block">
          <img className="lg:max-w-[500px]" src={img} alt="Contact illustration" />
        </div>
        <div className="w-full">
          <h1 className="text-black font-bold text-3xl lg:text-4xl">Get In Touch</h1>
          <form
            action="https://getform.io/f/fa4f1c9d-0dee-4c6e-b3b6-3386a33d786a"
            method="POST"
            encType="multipart/form-data"
            className="flex flex-col mt-8"
          >
            <div className="flex flex-col lg:flex-row gap-4 py-2">
              <input
                className="bg-transparent h-12 rounded-2xl border-[1px] border-black pl-4 text-black placeholder-black w-full lg:w-1/2"
                type="text"
                placeholder="First Name"
                name="firstName"
                required
              />
              <input
                className="bg-transparent h-12 rounded-2xl border-[1px] border-black pl-4 text-black placeholder-black w-full lg:w-1/2"
                type="text"
                placeholder="Last Name"
                name="lastName"
                required
              />
            </div>
            <div className="flex flex-col lg:flex-row gap-4 py-2">
              <input
                className="bg-transparent h-12 rounded-2xl border-[1px] border-black pl-4 text-black placeholder-black w-full lg:w-1/2"
                type="email"
                placeholder="Email"
                name="email"
                required
              />
              <input
                className="bg-transparent h-12 rounded-2xl border-[1px] border-black pl-4 text-black placeholder-black w-full lg:w-1/2"
                type="tel"
                placeholder="Phone"
                name="phone"
              />
            </div>
            <textarea
              className="bg-transparent rounded-2xl border-[1px] border-black h-36 pl-4 text-black w-full placeholder-black pt-2 resize-none"
              placeholder="Message"
              name="message"
              required
            ></textarea>
            <button className="bg-[#001b5e] border-black text-gray-100 border-[1px] py-[16px] rounded-lg px-8 my-8 w-32 font-bold">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
