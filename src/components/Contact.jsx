import React from "react";
import img from "../assets/images/contact-img.svg";

const Contact = () => {
  return (
    <div id="contact" className="max-w-[1040px] m-auto md:pl-20 p-6 py-10">
      <div className="wrapper flex justify-center  py-16 gap-52 lg:py-12">
        <div className=" hidden lg:block">
          <img className="w-[550px] h-full" src={img} alt="" />
        </div>
        <div className="content-box">
          <h1 className="text-black font-bold text-4xl">Get In Touch</h1>
          <form
            action="https://getform.io/f/fa4f1c9d-0dee-4c6e-b3b6-3386a33d786a"
            method="POST"
            encType="multipart/form-data"
            className="flex flex-col "
          >
            <div className="flex gap-4 py-2">
              <input
                className="bg-transparent h-14 rounded-2xl  border-[1px] border-black pl-4 text-black placeholder-black lg:w-36 "
                type="text"
                placeholder="Name"
              />
              <input
                className="bg-transparent h-14  rounded-2xl  border-[1px] border-black pl-4 text-black placeholder-black  lg:w-36"
                type="text"
                placeholder="Last Name"
              />
            </div>
            <div className="flex gap-4  py-4  ">
              <input
                className="bg-transparent h-14  rounded-2xl   border-[1px] border-black pl-4 text-black placeholder-black  lg:w-36"
                type="email"
                placeholder="Email"
              />
              <input
                className="bg-transparent h-14  rounded-2xl  border-[1px] border-black pl-4 text-black placeholder-black  lg:w-36"
                type="phone"
                placeholder="Phone"
              />
            </div>
            <textarea
              className="bg-transparent rounded-2xl border-[1px] border-black h-36 pl-4 text-black w-full placeholder-black pt-2"
              rows={40}
              cols={35}
              placeholder="Message"
            ></textarea>
            <button className="bg-[#001b5e] border-black  text-gray-100 border-[1] py-[16px] rounded-lg px-8 my-8 w-32 font-bold ">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
