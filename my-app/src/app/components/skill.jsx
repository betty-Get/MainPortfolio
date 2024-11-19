import React from "react";
import { skills } from "./data";
import Image from "next/image";

const Skill = () => {
  return (
    <section className="main_style pt-10 md:pt-24">
      <h2 className="w-full title">
        What I can do
        <hr className="line"></hr>
      </h2>

      <div className="w-[90%] mx-auto flex flex-col md:flex-row gap-7 py-6 md:py-10">
        <div className="md:w-1/2">
          <h3 className="text-xl font-medium md:text-2xl roboto pb-1">
            Exprience
          </h3>
          <p className="lg:max-w-[95%] roboto text-[14px] md:text-[16px]">
            "During my two internships, I had the chance to really develop my
            coding skills and build a solid foundation in programming. After
            that, I worked at Safaricom Ethiopia as a Quality Assurance
            professional, where I focused on making sure software was reliable
            and performed well. Now, I’m working as a Web Developer in India,
            creating dynamic and user-friendly websites."
          </p>
        </div>
        <div className="md:w-1/2">
          <h3 className="text-xl font-medium md:text-2xl roboto pb-1">
            Skills
          </h3>
          <div className="flex flex-wrap gap-4">
            {skills.map((skill) => (
              <div
                key={skill.id}
                className=" shadow-xl rounded-lg px-6 py-2 flex flex-col justify-center items-center "
              >
                <Image src={skill.img} width={40} height={40} alt="skills" />
                <p>{skill.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
