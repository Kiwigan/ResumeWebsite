

import React, {useState} from 'react'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import logo from '../assets/hori-logo-dark.png'
import Button6 from './Button6';


const Navbar = () => {
  const [nav, setNav] = useState(false)

  const toggleNav = () => {
    setNav(!nav)
  }

  const closeNav = () => {
    setNav(false)
  }

  const menuVariants = {
    open: { x: 0, opacity: 1, transition: { stiffness: 20, damping: 15 }},
    closed: {x: '-100%', opacity: 0, transition: { stiffness: 20, damping: 15 }}
  }



  return (
    <div className='fixed top-0 left-0 w-full z-50 bg-gradient-to-b from-zinc-900 to-zinc-900/0'>
      <div className="absolute top-2 left-8 p-4">
          <img src={logo} className="h-14" alt="Logo" />
      </div>
      <div className="absolute top-2 right-8 p-4 hidden md:block">
        <Button6 className="px-2 py-3 text-sm"/>
      </div>
      <div className='max-w-[1300px] mx-auto flex items-center justify-end md:justify-center px-8 h-24 font-medium relative'>
        <ul className='hidden md:flex gap-1 px-[0.2rem] py-[0.42rem] z-10 border border-white/15 rounded-full bg-white/10 backdrop-blur cursor-pointer'> 
          <li><Link to="hero" smooth={true} spy={true} offset={-150} duration={500} activeClass="active" className='navbar'>Home</Link></li>
          <li ><Link to="skills" smooth={true} spy={true} offset={-120} duration={500} activeClass="active" className='navbar'>Skills</Link></li>
          <li><Link to="portfolio" smooth={true} spy={true} offset={-120} duration={500} activeClass="active" className='navbar'>Portfolio</Link></li>
          <li><Link to="experience" smooth={true} spy={true} offset={-200} duration={500} activeClass="active" className='navbar'>Experience</Link></li>
        </ul>

        <div onClick={toggleNav} className='md:hidden z-50 text-gray-200 cursor-pointer'>
          {nav ? <AiOutlineClose size={30} /> :<AiOutlineMenu size={30} />}
        </div>
        
        <motion.div initial={false} animate={nav ? 'open' : 'closed'} variants={menuVariants} className='fixed left-0 top-0 w-full min-h-screen bg-gray-900 z-40'>
          <ul className='font-semibold text-4xl space-y-8 mt-24 text-center'>
            <li><Link to="hero" onClick={closeNav} smooth={true} spy={true} offset={-150} duration={500} activeClass="active2" className="navbar2">Home</Link></li>
            <li><Link to="skills" onClick={closeNav}  smooth={true} spy={true} offset={-120} duration={500} activeClass="active2" className="navbar2">Skills</Link></li>
            <li><Link to="portfolio" onClick={closeNav}  smooth={true} spy={true} offset={-80} duration={500} activeClass="active2" className="navbar2">Portfolio</Link></li>
            <li><Link to="experience" onClick={closeNav}  smooth={true} spy={true} offset={-50} duration={500} activeClass="active2" className="navbar2">Experience</Link></li>
            <li className='justify-center align-middle'><Button6 className="px-3 py-2 text-lg"/></li>
          </ul>
        </motion.div>

        
      </div>
    </div>
  )
}

export default Navbar


/*

<img src={logo} className='h-14' alt=""/>



import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const toggleNav = () => {
        setNav(!nav)
    }

    const closeNav = () => {
        setNav(false)
    }

    const menuVariants = {
        open: {
            x: 0,
            transition: {
            stiffness: 20,
            damping: 15
            }
        },
        closed: {
            x: '-100%',
            transition: {
            stiffness: 20,
            damping: 15
            }
        }
    }

  return (
    <div className='fixed top-0 left-0 w-full bg-opacity-70 backdrop-blur-md z-50'>
        <div className='max-w-[1300px] mx-auto  flex justify-between
        text-xl items-center px-12 h-20'>

            <a href="#">J.Doe</a>

            <ul className='hidden md:flex gap-12 z-10 cursor-pointer'>
                <li><Link to="skills" smooth={true} offset={50} duration={500}>About</Link></li>
                <li><Link to="portfolio" smooth={true} offset={50} duration={500}>Portfolio</Link></li>
                <li><Link to="contact" smooth={true} offset={50} duration={500}>Contact</Link></li>
            </ul>

            <div onClick={toggleNav} className='md:hidden z-50 text-gray-200'>
                {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
            </div>

            <motion.div
            initial={false}
            animate={nav ? 'open' : 'closed'}
            variants={menuVariants}
            className='fixed left-0 top-0 w-full min-h-screen bg-gray-900 z-40'
            >
                <ul className='font-semibold text-4xl space-y-8 mt-24 text-center'>
                    <li><Link to="skills" onClick={closeNav} smooth={true} offset={50} duration={500}>About</Link></li>
                    <li><Link to="portfolio" onClick={closeNav} smooth={true} offset={50} duration={500}>Portfolio</Link></li>
                    <li><Link to="contact" onClick={closeNav} smooth={true} offset={50} duration={500}>Contact</Link></li>
                </ul>


            </motion.div>



        </div>
    </div>
  )
}

export default Navbar
*/