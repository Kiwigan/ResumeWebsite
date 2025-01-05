import React from 'react'
import { GitHub , Instagram, Linkedin, Send } from 'react-feather';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <div className='max-w-[1300px] mx-auto flex flex-col items-center gap-3 p-6 md:p-20 text-sm md:text-lg mt-12'>

      <div className='flex flex-row gap-6 text-gray-400 text-4xl md:hidden'>
        <motion.div
          whileHover={{
          y: -3,
          color: "#60a5fa", 
          }}
        >
          <a href="https://github.com/Kiwigan"><GitHub /></a>
        </motion.div>

        <motion.div
          whileHover={{
          y: -3,
          color: "#60a5fa", 
          }}
        >
          <a href="https://www.instagram.com/kiwigan_/?hl=en"><Instagram /></a>
        </motion.div>

        <motion.div
          whileHover={{
          y: -3,
          color: "#60a5fa", 
          }}
        >
          <a href="https://www.linkedin.com/in/keeganlee107/"><Linkedin /></a>
        </motion.div>

        <motion.div
          whileHover={{
          y: -3,
          color: "#60a5fa", 
          }}
        >
          <a href="https://t.me/kiwigan"><Send /></a>
        </motion.div>

      </div>

        <p className='text-gray-400 text-base'>Designed & Built by Keegan Lee 2024</p>
        
    </div>
  )
}

export default Footer