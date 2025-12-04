import { Button, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { useTranslation } from "react-i18next";
const Links = [
  {
    name: "Home",
    href: "#home",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];
const Header = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    if (lang === "ar") {
      document.documentElement.dir = "rtl";
    } else {
      document.documentElement.dir = "ltr";
    }
  };
  return (
    <header className="backdrop-blur-sm fixed w-full z-10 text-gray-950 shadow-md">
      <div className="py-[15px] px-[20px] container mx-auto flex items-center justify-between">
        <a href="/" className="font-special text-[1.2rem] font-medium">
          {t("name")}
        </a>
        <ul className="hidden gap-4 items-center md:flex">
          {Links.map((link) => (
            <>
              <li
                key={link.name}
                className={` hover:translate-y-0.5 hover:text-[#1B3C53] w-fit transition-all duration-300 `}
              >
                <a href={link.href}>{t(`links.${link.name}`)}</a>
              </li>
            </>
          ))}
        </ul>
        <div className="flex items-center gap-2.5 md:block hidden">
          <button
            onClick={() => changeLanguage("en")}
            className="mr-2 bg-blue-200 px-2 rounded cursor-pointer"
          >
            En
          </button>
          <button
            onClick={() => changeLanguage("ar")}
            className="mr-2 bg-blue-200 px-2 rounded cursor-pointer"
          >
            Ar
          </button>
        </div>

        <div className="md:hidden">
          <Button
            onClick={() => setIsOpen((prev) => !prev)}
            variant="text"
            color="Black"
            size="large"
          >
            <HiOutlineMenuAlt1 />
          </Button>
        </div>
        <Menu
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          transformOrigin={{ vertical: "top", horizontal: "right" }}
          onClose={() => setIsOpen(false)}
          open={isOpen}
        >
          {Links.map((link) => (
            <MenuItem key={link.name}>
              <a href={link.href}>{link.name}</a>
            </MenuItem>
          ))}
          <div className="flex items-center gap-2.5 mx-2 mt-2">
            <button
              onClick={() => changeLanguage("en")}
              className="mr-2 bg-blue-200 px-2 rounded cursor-pointer"
            >
              En
            </button>
            <button
              onClick={() => changeLanguage("ar")}
              className="mr-2 bg-blue-200 px-2 rounded cursor-pointer"
            >
              Ar
            </button>
          </div>
        </Menu>
      </div>
    </header>
  );
};

export default Header;
