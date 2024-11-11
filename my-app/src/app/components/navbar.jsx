"use client";
import Link from "next/link";
import React from "react";
import { FaLinkedinIn } from "react-icons/fa";

const Navbar = () => {
  return (
    <header className=" max-w-full ">
      <div className="h-16 flex justify-between items-center px-12 shadow-xl">
        <h1>image</h1>
        <div className="hidden md:flex">
          <Link href={""} className="pr-6">
            About
          </Link>
          <Link href={""} className="pr-6">
            Experience
          </Link>
          <Link href={""} className="pr-6">
            Projects
          </Link>
          <Link href={""} className="pr-6">
            Reach Out
          </Link>
        </div>
        <button className="flex md:hidden">Click</button>
      </div>

      <div className="fixed top-0 left-0 h-full w-full bg-black/70">
        <div className="w-[80%] bg-white h-full p-6">
          <div className="flex justify-between pb-8">
            <p>img</p>
            <button>x</button>
          </div>
          <p className=" shadow-lg pb-4">Let's build something Great!</p>
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
          <p className="uppercase pt-10">Let's connect</p>
          <div>
            <FaLinkedinIn />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
