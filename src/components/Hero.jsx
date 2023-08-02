import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { bfVid } from '../assets/';

const Hero = () => {
  return (
    <section className={`relative w-full h-[650px] mx-auto shadow-xl -mb-[200px]`}>
      <video src={bfVid} autoPlay loop muted className='w-full h-full object-cover top-1' />
    </section>
  );
};

export default Hero;