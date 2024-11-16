import Image from "next/image";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <About />
    </div>
  );
}
