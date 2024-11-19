import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { MdEmail, MdClose } from "react-icons/md";
import { IoMdContact } from "react-icons/io";

const Hero = () => {
  return (
    <section className="main_style text-center  pt-48">
      <h1 className="text-xl sm:text-2xl md:text-4xl font-bold playfairDisplay">
        Hi, I am{" "}
        <span className="text-secondaryViolet playfairDisplay">Betty</span>
      </h1>
      <div className="text-2xl sm:text-3xl md:text-4xl font-bold sm:py-2 playfairDisplay">
        {" "}
        A Front-End web developer
      </div>
      <p className="roboto text-[14px] sm:text-[16px]">
        I'm a front-end web developer and I make amazing websites.
      </p>
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
