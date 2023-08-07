import { motion } from "framer-motion";
import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

const SectionWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} md:max-w-7xl  sm:max-w-4xl mx-auto relative z-0 md:bg-ltc-4 md:dark:bg-dtc-4  xs:bg-ltc-4/50 xs:dark:bg-dtc-4/50`}
        style={{ zIndex: 0 }}
      >
        <span className='hash-span' id={idName}>
          &nbsp;
        </span>

        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;