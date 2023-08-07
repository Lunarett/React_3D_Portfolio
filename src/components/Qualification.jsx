import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { color, motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { qualifications } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { useTheme } from './ThemeProvider';

const QualificationCard = ({ qualification, theme }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: theme === 'dark' ? `${styles.darkThemeColor2}` : `${styles.lightThemeColor2}`,
        color: theme === 'dark' ? `${styles.darkFontColor1}` : '#000',
      }}
      contentArrowStyle={{ borderRight: theme === 'dark' ? `7px solid ${styles.darkThemeColor2}` : `7px solid ${styles.lightThemeColor2}` }}
      date={qualification.date}
      iconStyle={{ background: qualification.iconBG, border: theme === 'dark' ? `4px solid ${styles.darkThemeColor2}` : `4px solid ${styles.lightThemeColor2}`, boxShadow: "none", }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img src={qualification.icon} alt={qualification.name} className="w-[80%] h-[80%] object-contain" />
        </div>
      }
      className="vertical-timeline-element--education"
    >
      <div>
        <h3 className="text-ltc-font-1 dark:text-dtc-font-1 text-[24px] font-extralight">
          {qualification.course}
        </h3>
        <p
          className="text-ltc-font-2 dark:text-dtc-font-2 text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {qualification.name}
        </p>
        <p
          className="text-ltc-font-2 dark:text-dtc-font-2 text-[14px] font-semibold"
          style={{ margin: 0 }}
        >
          {qualification.qualification}
        </p>
      </div>
    </VerticalTimelineElement>
  );
};

const Qualification = () => {
  const { theme } = useTheme();

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          My Educational Background
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          QUALIFICATIONS
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline lineColor="#414954">
          {qualifications.map((qualification, index) => (
            <QualificationCard
              key={`qualification-${index}`}
              qualification={qualification}
              theme={theme}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Qualification, "qualification");