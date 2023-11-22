import React from 'react'
import { motion } from 'framer-motion'
//
import Button from '@components/Button'
import { fadeUpSpring } from '@config/motion'
import AnimatedTextWord from '@components/motion/AnimatedTextWord'
import AnimatedTextCharacter from '@components/motion/AnimatedTextCherecter'


const Left = () => {
  return (
    <div className='relative col-span-2 z-10 md:text-center lg:text-left !mt-[-20px] ' >

      <img alt="" src="/images/glassify/blur-cyan-0.png" width="530" height="530" decoding="async" data-nimg="1" className="absolute bottom-full right-full -mr-72 -mb-56 opacity-50" />

      <div className='relative' >
        <AnimatedTextWord
          text="Hi, my name is"
          className='text-lg justify-center lg:justify-start'
        />

        <div>
          <AnimatedTextCharacter
            className='!font-medium !bg-clip-text !text-[2rem] !leading-normal md:!text-7xl md:!leading-[87px] !text-red-700 justify-center lg:justify-start mb-4'
            text="Murjani"
          />
          <AnimatedTextCharacter
            className='font-medium text-sm sm:text-[1.6rem] tracking-normal md:text-[2rem] text-pink-700/80 mt-1 justify-center lg:justify-start'
            text="Promotor Banyuwangi Motor"
          />
        </div>

        <div className='my-5 md:my-8 leading-7 text-white md:text-lg max-w-3xl' >
          <AnimatedTextWord
            text="Highly motivated and passionate in promotion and marketing product, dedicated and hard work on my passion."
            className='text-sm sm:text-lg justify-center lg:justify-start'
          />
        </div>
      </div>

      <motion.div variants={fadeUpSpring} initial="hidden" animate="visible" className='w-fit mx-auto lg:ml-0' >
        <a href='https://wa.me/6281359534234' target="_blank" ><Button outlined >Contact Me</Button></a>
      </motion.div>

    </div>
  )
}

export default Left
