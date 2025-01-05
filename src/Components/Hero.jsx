import React from 'react';
import profilepic from "../assets/profile.png";
import { TypeAnimation } from "react-type-animation";
import ShinyEffect from "./ShinyEffect";
import { AiFillGithub, AiOutlineInstagram, AiOutlineLinkedin } from 'react-icons/ai';
import { DiCss3, DiHtml5, DiJavascript1, DiNodejsSmall, DiReact } from 'react-icons/di';
import { motion } from 'framer-motion';
import Button6 from './Button6';




const Hero = () => {
  return (
    <div className='my-32 max-w-[1300px] mx-auto relative'>
        <div id="hero" className="grid md:grid-cols-2 place-items-center gap-8 relative">
            <motion.div 
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            >
                <div className="flex items-center mb-2">
                <p className="font-normal text-gray-200 text-lg md:text-2xl">
                    Hi, I'm a&nbsp;
                </p>
                    <TypeAnimation
                        sequence={[
                            "Software Engineer",
                            700,
                            "Data Engineer",
                            700,
                        ]}
                        speed={50}
                        repeat={Infinity}
                        className="font-normal text-blue-400 text-lg md:text-xl lg:text-2xl"
                    />
                </div>


                <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-gray-200 lg:text-7xl text-5xl tracking-normal mb-4"
                >
                    <span className="text-blue-400 font-semibold tracking-wider">Keegan Lee</span>
                </motion.p>  


                <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 1 }}
                className="text-gray-300 max-w-[300px] md:max-w-[400px] lg:text-xl text-lg mb-6"
                >
                    I'm a Y4 Undergraduate from NTU graduating in June 2025.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 1.5 }}
                    className="pointer-events-auto relative"
                    >
                    <Button6 className="px-5 py-4"/>
                </motion.div>

            </motion.div>

            <motion.img 
                src={profilepic}
                className=""
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            />
            <div className="absolute inset-0 hidden md:block">
            <ShinyEffect left={250} top={-350} size={1400} />
            </div>
        </div>                
    </div>
  )
}

export default Hero

/*
<motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 2 }}
            className="flex flex-row text-7xl px-12 md:px-0 w-full justify-center items-center py-24"
        >
            <p className="text-gray-200 mr-6">My Tech Stack</p>
            <DiHtml5 className="text-orange-600 mx-2" />
            <DiCss3 className="text-blue-600 mx-2" />
            <DiJavascript1 className="text-yellow-500 mx-2" />
            <DiReact className="text-blue-500 mx-2" />
            <DiNodejsSmall className="text-green-500 mx-2" />

        </motion.div>


        <div className="flex gap-6 flex-row text-3xl md:text-5xl text-gray-200 z-20">
                        <motion.a whileHover={{ scale: 1.05, color: '#60a5fa' }} href="#">
                            <AiFillGithub/>
                        </motion.a>

                        <motion.a whileHover={{ scale: 1.05, color: '#60a5fa'}} href="#">
                            <AiOutlineLinkedin/>
                        </motion.a>

                        <motion.a whileHover={{ scale: 1.05, color: '#60a5fa'}} href="#">
                            <AiOutlineInstagram/>
                        </motion.a>
                    </div>





                    <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 1.5 }}
                    className="pointer-events-auto relative"
                    >
                    <Button6 />
                    </motion.div>
*/