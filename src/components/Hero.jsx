import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputerCanvas, ComputerMobile } from './canvas';
import { useEffect, useState } from "react";
import { useMediaQuery } from 'react-responsive';

const ArrowKeysAnimation = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
        setIsVisible(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <div className="flex justify-center items-center space-x-8 mt-10 mb-3">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              repeat: Infinity,
              repeatType: "mirror",
              duration: 1.5,
              ease: "easeInOut",
            }}
            className="text-4xl border rounded-md p-2"
          >

            ←
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              repeat: Infinity,
              repeatType: "mirror",
              duration: 1.5,
              ease: "easeInOut",
            }}
            className="text-4xl border rounded-md p-2"
          >
            →
          </motion.div>
        </div>
      )}
      {isVisible && (<div className='inline opacity-[35%]'>hold down arrow key to navigate</div>)}
    </>
  );
};


const Hero = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' });
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flexrow items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
          <div className='w-1 sm:h-80 h-40 violet-gradient'/>
        </div>

          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className='text-[#915eff]'>Janet</span></h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              Crafting code with curiosity <br className='sm:block hidden'/>one byte at a time
            </p>
          </div>
      </div>
        {isTabletOrMobile ? <ComputerMobile /> : <ComputerCanvas />}
      <div className='hidden sm:flex absolute xs:bottom-5 bottom-32 w-full justify-center items-center'>
        <a href='#about'>
            <ArrowKeysAnimation />
        </a>
      </div>
    </section>
  )
}

export default Hero;