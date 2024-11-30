import Image from "next/image";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Skill from "./components/skill";
import Project from "./components/project";
import Contact from "./components/contact";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <About />
      <Skill />
      <Project />
      <Contact />
    </div>
  );
}
