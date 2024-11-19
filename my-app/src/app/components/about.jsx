import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section className="main_style py-16  md:h-screen">
      <h2 className="w-full title ">
        Get to Know Me!
        <hr className="line"></hr>
      </h2>

      <div className="lg:w-[90%] flex flex-col-reverse md:flex-row gap-10 mx-auto mt-10">
        <div className="md:max-w-[50%] roboto lg:my-5">
          <p>
            I graduated from Addis Ababa University in computer science. For me
            coding isn't just a theory, Its passion and solving real world
            problems. I am very{" "}
            <span className="text-secondaryViolet">
              ambitios, driven and self motivated.
            </span>
          </p>
          <br />
          <p>
            I have a wide range of hobbie and pasions that keep me busy. from
            reading, going to gym and traveling. I am always seeking new
            experiences and love to keep myself engaged and learn new things.
          </p>
          <br />
          <p>
            I believe that you{" "}
            <span className="text-secondaryViolet">
              should never stop growing
            </span>{" "}
            and thats what I strive to do.I am very passionate about technology
            and desire to always push the limits of whats possible. I am excited
            too see were my career takes me and am always open to new
            opportunities.
          </p>
        </div>
        <Image
          src={"/img.jpg"}
          width={300}
          height={50}
          alt=" balck women photo"
          className=" object-cover h-[350px] w-[300px] mx-auto"
        />
      </div>
    </section>
  );
};

export default About;
