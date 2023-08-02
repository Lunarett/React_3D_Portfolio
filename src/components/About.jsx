import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { StarsCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full bg-gradient-to-b from-[#b7e7fc] to-[#5fcbfd] p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-ltc-3 dark:bg-dtc-3 rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-ltc-font-1 dark:text-dtc-font-1 text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <div className="items-center justify-center flex flex-col">
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionHeadText} text-ltc-font-1 dark:text-dtc-font-2`} >INTRODUCTION</p>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-ltc-font-2 dark:text-dtc-font-2 text-[17px] max-w-3xl leading-[30px] text-justify'
      >
        I am a programmer with over 3 years of professional experience in various domains of software development. My journey began as a sound designer for video games, where I discovered my passion for programming. Since then, I have worked on projects involving game development, physics engines, graphics engines, multiplayer games and created tools for designers using Windows Presentation Forms. My main strength is developing and designing user interfaces that are intuitive and engaging. Lately, I have also developed an interest in creating web apps and websites using modern technologies and frameworks.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10 pb-40'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");