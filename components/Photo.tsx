"use client";
import { motion } from'framer-motion'
import Image from 'next/image';


export function Photo() {
  return (
    <div className='w-full h-full relative'>
      <motion.div 
        initial={{opacity: 0}} 
        animate={{opacity: 1, transition: {delay: 2, duration: 0.4, ease: "easeIn"}}}
      >
        <motion.div 
          initial={{opacity: 0}} 
          animate={{opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: "easeInOut"}}} 
          className='w-[260px] h-[260px] xl:w-[310px] xl:h-[310px] mix-blend-lighten'
        >
          <Image 
            src="/assets/profile.jpeg" 
            priority 
            quality={100} 
            fill 
            alt='Profile image' 
            className='rounded-full'
          />
        </motion.div>
      </motion.div>
    </div>
  )
}