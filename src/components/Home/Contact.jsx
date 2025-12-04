import React from "react";
import SectionTitle from "../SectionTitle";
import { useTranslation } from "react-i18next";
const data = [
  {
    id: 1,

    contact: "+201025913655",
  },
  {
    id: 2,

    contact: "https://wa.me/+201025913655",
  },
];
const Contact = ({ styleSection }) => {
  const { t } = useTranslation();
  return (
    <section className={styleSection} id="contact">
      <SectionTitle name={t("contact")} />
      <div className="container px-[20px] mx-auto">
        <ul>
          {data.map((item) => (
            <li
              key={item.id}
              className="mb-4 text-lg flex items-center gap-4 shadow-2xl p-4 rounded-md hover:bg-gray-100 transition-all hover:translate-y-[5px] duration-500  "
            >
              {item.id === 2 ? (
                <a
                  href={item.contact}
                  target="_blank"
                  className="text-blue-600 hover:underline"
                >
                  {t("call")}
                </a>
              ) : (
                <span>{item.contact}</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Contact;
