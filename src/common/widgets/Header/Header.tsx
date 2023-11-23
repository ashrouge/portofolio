"use client"

import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'
import { navData } from '@config/constants'
import AnimatedTextCharacter from '@components/motion/AnimatedTextCherecter'
import Image from 'next/image'

const Header = () => {

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <header className='top-0 w-full z-50 relative py-[30px] mx-auto right-0 left-0 px-24 bg-slate-300' >
      <div className='flex items-center justify-around md:justify-between' >
        <div className='flex md:justify-start items-center max-md:items-end'>
        <div className='max-md:mr-10 mr-4'>
          <Image src="/bwimotor.png" width={60} height={60} alt="honda" />
        </div>
        <Link href='/' className='flex justify-center align-bottom items-end border' >
          <div className='flex w-fit'>
          <AnimatedTextCharacter
            text='M'
            className='text-xs md:text-2xl text-pink-700/80'
          />
          <AnimatedTextCharacter
            text='urjani '
            className='text-xs md:text-2xl text-pink-700/80'
          />
          </div>
          <div className='flex'>
          <AnimatedTextCharacter
            text='B'
            className='text-xs md:text-2xl text-pink-700/80'
          />
          <AnimatedTextCharacter
            text='anyuwangi '
            className='text-xs md:text-2xl text-pink-700/80'
          />
          <AnimatedTextCharacter
            text='Motor_bwi'
            className='text-xs md:text-2xl text-pink-700/80'
          />
          </div>
        </Link>
        <div className='max-md:ml-10 md:hidden'>
          <Image src="/Honda_Logo.svg" width={60} height={60} alt="honda" />
        </div>
        </div>

        <motion.ul variants={container} initial="hidden" animate="visible" className='__navright' >

          {navData.map((e: string, i: number) =>
            <motion.a key={i} variants={child} className='hidden md:block' href={`#${e.toLocaleLowerCase()}`} ><li> <span>0{i + 1}.</span> {e} </li></motion.a>
          )}
        </motion.ul>

      </div>
    </header>
  )
}

export default Header