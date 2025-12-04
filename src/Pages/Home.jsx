import React from "react";
import Hero from "../components/Home/Hero";
import About from "../components/Home/About";
import Projects from "../components/Home/Projects";
import Contact from "../components/Home/Contact";

const Home = () => {
  const styleSection =
    "min-h-screen flex flex-col gap-15 items-center py-[100px]";
  return (
    <div className="relative">
      <Hero />
      <About styleSection={styleSection} />
      <Projects styleSection={styleSection} />
      <Contact styleSection={styleSection} />
    </div>
  );
};

export default Home;
