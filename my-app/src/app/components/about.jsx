import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section className="main_style">
      <h2 className="w-full text-center">Get to Know Me!</h2>
      <div className="flex flex-col-reverse md:flex-row">
        <div className="max-w-[50%]">
          <p>
            I graduated from Addis Ababa University in computer science. For me
            coding isn't just a theory, Its passion and solving real world
            problems. I am very ambitios, driven and self motivated.
          </p>
          <br />
          <p>
            I have a wide range of hobbie and pasions that keep me busy. from
            reading, going to gym and traveling. I am always seeking new
            experiences and love to keep myself engaged and learn new things.
          </p>
          <br />
          <p>
            I believe that you should never stop growing and thats what I strive
            to do.I am very passionate about technology and desire to always
            push the limits of whats possible. I am excited too see were my
            career takes me and am always open to new opportunities.
          </p>
        </div>
        <Image
          src={"/img.jpg"}
          width={300}
          height={100}
          alt=" balck women photo"
          className=" "
        />
      </div>
    </section>
  );
};

export default About;
