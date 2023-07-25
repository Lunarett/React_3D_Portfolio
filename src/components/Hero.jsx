import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto shadow-xl`}>
      <div className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
        <div>
          <h1 className={`${styles.heroHeadText} text-ltc-font-2 dark:text-dtc-font-2 font-extralight`}>
            Hi, I'm <span className='text-ltc-font-3 dark:text-dtc-font-3'>Egor</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-ltc-font-2 dark:text-dtc-font-2 font-extralight`}>
            A software developer.
          </p>
        </div>
      </div>

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-ltc-font-1/50 dark:border-dtc-font-1/50  flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-ltc-font-2/50 dark:bg-dtc-font-2/50 mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;