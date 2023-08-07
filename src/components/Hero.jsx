import { bfVid } from '../assets/';

const Hero = () => {
  return (
    <section className={`relative w-full sm:h-[550px] xs:h-[300px] mx-auto shadow-xl sm:-mb-[200px] xs:mb-[0px]`}>
      <video src={bfVid} autoPlay loop muted playsInline preload="auto" className='w-full h-full object-cover top-1' />
    </section>
  );
};

export default Hero;