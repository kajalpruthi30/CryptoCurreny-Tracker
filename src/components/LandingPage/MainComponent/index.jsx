import React from 'react';
import Button from "../../Common/Button";
import iphone from "../../../assets/iphone.png";
import gradient from "../../../assets/gradient.png";
import {motion} from "framer-motion"

function MainComponent() {

  return (
    <div className='flex py-0.5 px-3 sm:flex-col sm:w-full sm:py-0 sm:px-0.5 md:px-1'>

      {/* Left Side */}
      <div className='mr-4 sm:w-full'>
        <div className='mt-3 mb-1.5 sm:mt-1.5'>

          <motion.h1 className='text-8xl sm:text-center sm:text-5xl md:text-5xl lg:text-6xl text-white hover:text-black transition-colors duration-300' 
                      style={{ fontFamily: "Inter", fontWeight: window.innerWidth < 601 ? 500 : 700, WebkitTextStrokeWidth: '3px', WebkitTextStrokeColor: 'white' }}
                      initial={{opacity: 0, y: 50}}
                      animate={{opacity: 1, y: 0}}
                      transition={{duration: 0.5}}>
            Track Crypto</motion.h1>

            <motion.h1 className='text-8xl sm:text-center sm:text-5xl md:text-5xl lg:text-6xl text-blue my-2 sm:my-1' 
                      style={{ fontFamily: "Inter", fontWeight: window.innerWidth < 601 ? 500 : 700}}
                      initial={{opacity: 0, y: 50}}
                      animate={{opacity: 1, y: 0}}
                      transition={{duration: 0.5, delay: 0.5}}>
            Real Time.</motion.h1> 

          <motion.p className='text-grey sm:text-center sm:pr-3 md:pr-4 md:flex md:flex-wrap'
                     initial={{opacity: 0, y: 50}}
                     animate={{opacity: 1, y: 0}}
                     transition={{duration: 0.5, delay: 1}}>
          Track Crypto through a public API in real time. Visit the dashboard to do so!</motion.p>
        </div>

        <motion.div className='flex justify-start gap-1.5 items-center leading-loose sm:justify-center'
                    initial={{opacity: 0, x: 50}}
                    animate={{opacity: 1, x: 0}}
                    transition={{duration: 0.5, delay: 1.5}}>
          <Button text={"Dashboard"} />
          <Button text={"Share"} outlined={true} />
        </motion.div>
      </div>

      {/* Right Side Phone */}
      <div className='relative p-1 ml-auto sm:mt-3 sm:p-0 md:p-0 sm:mx-auto'>
        <motion.img src={iphone} 
                    className='absolute right-0 z-10 w-50 h-[35rem] sm:h-[30rem] md:h-[25rem] md:w-[250px] lg:h-[30rem] mr-2 min-w-[300px] md:min-w-[250px]'
                    initial={{y: -10}}
                    animate={{y: 10}}
                    transition={{
                      type: "smooth",
                      repeatType: "mirror",
                      duration: 2,
                      repeat: Infinity
                    }} />
        <img src={gradient} className='z-0 mt-5  p-0 w-40 sm:ml-[65px] sm:h-[25rem] md:h-[20rem] md:w-[180px] lg:h-[25rem] min-w-[250px] md:min-w-[180px] ' />
      </div>

    </div>
  );
}

export default MainComponent;
