"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { MdEmail, MdClose } from "react-icons/md";
import { IoMdContact } from "react-icons/io";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <header className=" max-w-full ">
      <div className="h-16 flex justify-between items-center px-12 shadow-xl">
        <h1 className="roboto font-semibold">image</h1>
        <div className="hidden md:flex">
          <Link href={""} className="pr-6 playfairDisplay">
            About
          </Link>
          <Link href={""} className="pr-6 playfairDisplay">
            Experience
          </Link>
          <Link href={""} className="pr-6 playfairDisplay">
            Projects
          </Link>
          <Link href={""} className="pr-6 playfairDisplay">
            Reach Out
          </Link>
        </div>
        <button className="flex md:hidden" onClick={handleNav}>
          Click
        </button>
      </div>

      <div
        className={
          nav
            ? "fixed md:hidden top-0 left-0 h-full w-full bg-black/70 ease-in-out duration-200"
            : "ease-in-out duration-200"
        }
      >
        <div
          className={
            nav
              ? "fixed top-0 left-0 w-[80%] min-[460px]:w-[60%] md:w-[45%] bg-white h-full p-6 ease-in-out duration-500"
              : "fixed top-0 left-[-100%] bg-white h-full p-6 ease-in-out duration-500"
          }
        >
          <div className="flex justify-between mb-8">
            <p>img</p>
            <button className="rounded-circle" onClick={handleNav}>
              <MdClose />
            </button>
          </div>
          <p className=" shadow-lg pb-4 text-[14px] sm:text-[16px]">
            Let's build something Great!
          </p>
          <div className="flex flex-col py-12 w-fit">
            <Link href={""} className="pb-6 hover:underline">
              About
            </Link>
            <Link href={""} className="pb-6">
              Experience
            </Link>
            <Link href={""} className="pb-6">
              Projects
            </Link>
            <Link href={""} className="pb-6">
              Reach Out
            </Link>
          </div>
          <p className="uppercase pt-6">Let's connect</p>
          <div className="flex my-4">
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
        </div>
      </div>
    </header>
  );
};

export default Navbar;
