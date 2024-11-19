import React from "react";
import { skills } from "./data";
import Image from "next/image";

const Skill = () => {
  return (
    <section className="main_style pt-16">
      <h2 className="w-full title">
        What I can do
        <hr className="line"></hr>
      </h2>

      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-1/2">
          <h3>Exprience</h3>
          <p className="max-w-[85%] roboto">
            "During my two internships, I had the chance to really develop my
            coding skills and build a solid foundation in programming. After
            that, I worked at Safaricom Ethiopia as a Quality Assurance
            professional, where I focused on making sure software was reliable
            and performed well. Now, I’m working as a Web Developer in India,
            creating dynamic and user-friendly websites."
          </p>
        </div>
        <div className="lg:w-1/2">
          <h3>Skills</h3>
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
