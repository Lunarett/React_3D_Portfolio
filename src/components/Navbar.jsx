import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import ThemeToggle from './ThemeToggle';
import { FaBars, FaTimes } from 'react-icons/fa';

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
      className={`${styles.paddingX} xs:px-0 xs:py-0 w-full flex items-center sm:py-2 fixed top-0 z-50 backdrop-blur shadow-lg text-ltc-font-1 dark:text-dtc-font-1
      ${scrolled ? "bg-ltc-2 dark:bg-dtc-2 " : "sm:bg-ltc-2/70 sm:dark:bg-dtc-2/70 xs:bg-ltc-2 xs:dark:bg-dtc-2"}`}
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

        <div className='sm:hidden flex flex-1 justify-end items-center p-3'>
          <FaBars
            className={`w-[28px] h-[28px] ${toggle ? "hidden" : ""} text-ltc-font-1 dark:text-dtc-font-1`}
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${!toggle ? "hidden" : "flex"
              } w-full h-screen p-6 relative z-10 items-start flex-col`}
          >
            <div className='w-full flex justify-end'>
              <FaTimes
                className={`w-[28px] h-[28px] text-ltc-font-1 dark:text-dtc-font-1`}
                onClick={() => setToggle(!toggle)}
              />
            </div>

            <ul className='list-none flex justify-start items-start flex-1 flex-col gap-4 pt-10'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`${styles.navText}`}
                  onClick={() => {
                    setToggle(!toggle);
                    handleLinkClick(nav);
                  }}
                >
                  {nav.title}
                </li>
              ))}
            </ul>

            {/* Separetor */}
            <div className="bg-gray-400 h-[1px] w-full"></div>

            <div className='flex items-center justify-center w-full py-4'>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar