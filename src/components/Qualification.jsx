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

const QualificationCard = ({ qualification }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#d3dfe9",
        color: "#000",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #d3dfe9" }}
      date={qualification.date}
      iconStyle={{ background: "#414954", border: "4px solid #d3dfe9", boxShadow: "none" }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          {/* If you have an icon for qualifications, you can place it here */}
          {/* For example: <img src={qualification.icon} alt={qualification.name} className="w-[90%] h-[90%] object-contain" /> */}
        </div>
      }
      className="vertical-timeline-element--education"
    >
      <div>
        <h3 className="text-font-color-1 text-[24px] font-extralight">
          {qualification.course}
        </h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {qualification.name}
        </p>
        <p
          className="text-secondary text-[14px] font-semibold"
          style={{ margin: 0 }}
        >
          {qualification.qualification}
        </p>
      </div>
    </VerticalTimelineElement>
  );
};

const Qualification = () => {
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
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Qualification, "qualification");