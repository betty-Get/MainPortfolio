import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { MdEmail, MdClose } from "react-icons/md";
import { IoMdContact } from "react-icons/io";

const Hero = () => {
  return (
    <section className="max-w-[60%] mx-auto text-center h-screen mt-32">
      <h1 className="text-4xl font-bold">Hi, I am Betty</h1>
      <div className="text-4xl font-bold"> A Front-End web developer</div>
      <p>I'm a front-end web developer and I make amazing websites.</p>
      <div className="flex my-4 justify-center">
        <div className=" rounded-circle mr-5 min-[400px]:mr-8">
          <FaLinkedinIn />
        </div>
        <div className=" rounded-circle mr-5 min-[400px]:mr-8">
          <FaGithub />
        </div>
        <div className=" rounded-circle mr-5 min-[400px]:mr-8">
          <MdEmail />
        </div>
        <div className=" rounded-circle mr-5 min-[400px]:mr-8">
          <IoMdContact />
        </div>
      </div>
    </section>
  );
};

export default Hero;
