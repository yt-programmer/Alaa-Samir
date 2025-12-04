import React from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-[#456882]">
      <div className="container mx-auto px-4 py-8 text-center">
        <p className="text-gray-900">{t("footer")}</p>
      </div>
    </footer>
  );
};

export default Footer;
