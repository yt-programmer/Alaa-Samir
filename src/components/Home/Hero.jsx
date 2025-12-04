import React from "react";
import Typewriter from "typewriter-effect";
import video from "/Hero.mp4";
import { useTranslation } from "react-i18next";
const info = [
  {
    title: "Projects",
    value: "+10",
  },
  {
    title: "Expriance",
    value: "+3",
  },
  {
    title: "Available",
    value: `Freelance & FullTime
     `,
  },
];

const Hero = () => {
  const { t } = useTranslation();
  return (
    <section
      id="home"
      className=" flex items-center justify-center h-screen  relative overflow-hidden"
    >
      <video
        loading="lazy"
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
              strings: [t("welcome"), t("work")],
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
              <h2 className="md:text-md text-sm">{t(`info.${item.title}`)}</h2>
              <p
                className={`${
                  item.title === "Available" ? "text-[10px] md:text-sm" : ""
                } text-sm font-bold `}
              >
                {item.title === "Available" ? t("ava") : item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
