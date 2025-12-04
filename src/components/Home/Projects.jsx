import React from "react";
import SectionTitle from "../SectionTitle";
import { data } from "../../ProjectsData/projectsData";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

const Projects = ({ styleSection }) => {
  return (
    <section id="projects" className={`${styleSection} bg-[#456882] `}>
      <SectionTitle name={"projects "} span={"completed"} />
      <div className="container px-[20px] mx-auto ">
        <div className="md:block hidden">
          <ImageList variant="woven" cols={3} gap={8}>
            {data.map((item) => (
              <ImageListItem
                key={item.id}
                className="hover:scale-50 transition-all duration-500"
              >
                <img src={item.img} alt="error" loading="lazy" />
              </ImageListItem>
            ))}
          </ImageList>
        </div>
        <div className="md:hidden block">
          <ul className="flex flex-col items-center justify-center">
            {data.map((item) => (
              <li
                key={item.id}
                className="mb-4 hover:translate-y-8  transition-all duration-300"
              >
                <img
                  src={item.img}
                  alt="error"
                  className="max-w-[300px] h-auto "
                  loading="lazy"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Projects;
