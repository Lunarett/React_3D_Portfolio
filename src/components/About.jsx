import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { resume } from "../assets";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import TiltWrapper from "./TiltWrapper";
import { useTheme } from './ThemeProvider';
import ss from '../assets/services/service_ico_react_dark.svg'

const ServiceCard = ({ index, theme, service }) => (
  <TiltWrapper className='w-[250px]'>
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
          src={theme === 'dark' ? service.iconDark : service.iconLight}
          alt='web-development'
          className='w-24 h-24 object-contain'
        />

        <h3 className='text-ltc-font-1 dark:text-dtc-font-1 text-[20px] font-bold text-center'>
          {service.title}
        </h3>
      </div>
    </motion.div>
  </TiltWrapper>
);

const About = () => {
  const { theme } = useTheme();

  return (
    <div className="items-center justify-center flex flex-col xs:-mt-[80px] sm:mt-0">

      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionHeadText} text-ltc-font-1 dark:text-dtc-font-2`} >ABOUT ME</p>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className={`${styles.sectionParagraphText} mt-4 text-ltc-font-2 dark:text-dtc-font-2 max-w-3xl mb-10`}
      >
        I am a programmer with over 3 years of professional experience in various domains of software development. My journey began as a sound designer for video games, where I discovered my passion for programming. Since then, I have worked on projects involving game development, physics engines, graphics engines, multiplayer games and created tools for designers using Windows Presentation Forms. My main strength is developing and designing user interfaces that are intuitive and engaging. Lately, I have also developed an interest in creating web apps and websites using modern technologies and frameworks.
      </motion.p>

      <a href={resume} download>
        <button className="bg-ltc-font-3 rounded-md pt-2 pb-2 pr-5 pl-5 shadow-xl">Download Resume</button>
      </a>

      <div className='mt-20 flex flex-wrap gap-10 pb-40 justify-center'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} theme={theme} service={service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");