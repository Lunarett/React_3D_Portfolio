import React, { useEffect } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { color, motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { useTheme } from './ThemeProvider';

const ExperienceCard = ({ experience, theme }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: theme === 'dark' ? `${styles.darkThemeColor2}` : `${styles.lightThemeColor2}`,
        color: theme === 'dark' ? `${styles.darkFontColor1}` : `${styles.lightFontColor1}`,
        boxShadow: "10px 15px -3px rgba(0, 0, 0, 0.15)",
      }}
      contentArrowStyle={{ borderRight: theme === 'dark' ? `7px solid ${styles.darkThemeColor2}` : `7px solid ${styles.lightThemeColor2}` }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg, border: "4px solid #414954", boxShadow: "none" }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[90%] h-[90%] object-contain"
          />
        </div>
      }
      className={
        experience.type === "work"
          ? "vertical-timeline-element--work"
          : "vertical-timeline-element--education"
      }
    >
      <div>
        <h3 className="text-ltc-font-1 dark:text-dtc-font-1 text-[24px] font-extralight">
          {experience.title}
        </h3>
        <p
          className="text-ltc-font-2 dark:text-dtc-font-2 text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-ltc-font-2 dark:text-dtc-font-2 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  const { theme } = useTheme();

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          WORK EXPERIENCE
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline lineColor="#414954">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
              theme={theme}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");