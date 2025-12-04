import { Button, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
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
  {
    name: "FAQ",
    href: "#faq",
  },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="backdrop-blur-sm fixed w-full z-10 text-white">
      <div className="py-[15px] px-[20px] container mx-auto flex items-center justify-between">
        <a href="/" className="font-special text-[1.2rem] font-medium">
          Ashraf Hatem
        </a>
        <ul className="hidden gap-4 items-center md:flex">
          {Links.map((link) => (
            <li
              key={link.name}
              className={` hover:translate-y-0.5 hover:text-[#6E8CFB] w-fit transition-all duration-300 `}
            >
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>

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
        </Menu>
      </div>
    </header>
  );
};

export default Header;
