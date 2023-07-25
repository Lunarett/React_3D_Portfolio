import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { menu, close } from "../assets";
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const sectionElement = document.querySelector(hash);
      if (sectionElement) {
        sectionElement.scrollIntoView();
      }
    }
  }, [location]);

  const handleLinkClick = (nav) => {
    setActive(nav.title);
    navigate(`/${nav.page}`, { state: { hash: nav.id } });
  };

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-2 fixed top-0 z-50 backdrop-blur shadow-lg text-ltc-font-1 dark:text-dtc-font-1 ${scrolled ? "bg-ltc-2 dark:bg-dtc-2 " : "bg-ltc-2/40 dark:bg-dtc-2/40"}`}
    >
      <div className='w-full flex justify-end items-center max-w-7xl mx-auto'>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${active === nav.title ? "text-eBlue" : "text-secondary"
                } hover:text-eBlue text-[18px] font-medium cursor-pointer`}
              onClick={() => handleLinkClick(nav)}
            >
              {nav.title}
            </li>
          ))}

          <ThemeToggle />
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${!toggle ? "hidden" : "flex"
              } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-secondary"
                    }`}
                  onClick={() => {
                    setToggle(!toggle);
                    handleLinkClick(nav);
                  }}
                >
                  {nav.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar