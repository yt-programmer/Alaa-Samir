import React from "react";
import SectionTitle from "../SectionTitle";
import chr from "../../assets/chr.webp";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
const About = ({ styleSection }) => {
  const { t } = useTranslation();
  return (
    <section className={styleSection} id="about">
      <SectionTitle name={t("about")} />
      <div className="container px-[20px]  mx-auto flex flex-col md:flex-row  items-center justify-between gap-10 mt-10">
        <motion.div
          initial={{ x: -100, y: 0, opacity: 0 }}
          whileInView={{ x: 0, y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="w-full text-center md:text-left flex flex-col gap-4"
        >
          <h2 className="text-[1.8rem] font-bold  text-[#1B3C53]">
            {t("name")}
          </h2>
          <span className="text-[1rem] font-bold">{t("position")}</span>
          <p className="text-gray-600 text-[1.1rem] leading-7  mt-3 ">
            {t("description")}
          </p>
        </motion.div>
        <motion.div
          initial={{ x: 100, y: 0, opacity: 0 }}
          whileInView={{ x: 0, y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className=" w-full flex md:justify-end justify-center"
        >
          <img
            loading="lazy"
            src={chr}
            alt="error img"
            className="w-[500px] h-[700px]"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
