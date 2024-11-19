import Image from "next/image";
import Link from "next/link";
import React from "react";

const Project = () => {
  return (
    <section className="main_style">
      <h2 className="w-full title">
        What I've Built
        <hr className="line"></hr>
      </h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mx-auto">
        <div className="relative flex items-center justify-center rounded-xl shadow-2xl group hover:bg-secondaryViolet">
          <Image
            src={"/projects/netflix.jpg"}
            width={600}
            height={500}
            alt="project"
            className=" w-full h-full rounded-2xl group-hover:opacity-50"
          />
          <div className="hidden group-hover:block absolute top-[40%] text-white">
            <h3>Project name</h3>
            <Link href={""}>More Info</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
