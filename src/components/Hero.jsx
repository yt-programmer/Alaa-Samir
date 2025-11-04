import React from "react";
import Typewriter from "typewriter-effect";
import video from "/Hero.mp4";
const info = [
  {
    title: "Projects",
    value: "+40",
  },
  {
    title: "Expriance",
    value: "+2",
  },
  {
    title: "Available",
    value: `Freelance & FullTime
     `,
  },
];

const Hero = () => {
  return (
    <section className=" flex items-center justify-center min-h-screen   ">
      <video
        src={video}
        autoPlay
        loop
        muted
        className="absolute h-full w-full z-[-10] object-cover"
      ></video>
      <div className="px-[20px] flex flex-col gap-5 items-center justify-center">
        <h1 className="flex items-center justify-center font-special md:text-[3.5rem] text-[1.5rem] font-medium text-white">
          <Typewriter
            options={{
              strings: ["Hi, I'm Alaa Samir", "Graphics Designer"],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
        <div className="flex flex-row gap-5 text-white">
          {info.map((item) => (
            <div
              key={item.title}
              className={`${
                item.title === "Available"
                  ? ""
                  : "border-r-1 pr-[1rem] border-blue-950"
              }  flex flex-col items-center `}
            >
              <h2 className="md:text-md text-sm">{item.title}</h2>
              <p
                className={`${
                  item.title === "Available" ? "text-[10px] md:text-sm" : ""
                } text-sm font-bold `}
              >
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
