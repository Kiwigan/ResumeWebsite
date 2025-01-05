import React from 'react'
import { motion } from 'framer-motion';
import { GitHub , Instagram, Linkedin, Send } from 'react-feather';

const Sidebar = () => {
  return (
    <div className='hidden md:block'>

        <div orientation="left" className="hOvuuP">
            <ul class="dVLQAC">
                <li className="p-2.5">
                    <motion.div
                        whileHover={{
                        y: -3,
                        color: "#60a5fa", 
                        }}
                    >
                        <a href="https://github.com/Kiwigan"><GitHub /></a>
                    </motion.div>
                    </li>

                    <li className="p-2.5">
                    <motion.div
                        whileHover={{
                        y: -3,
                        color: "#60a5fa"
                        }}
                    >
                        <a href="https://www.instagram.com/kiwigan_/?hl=en"><Instagram /></a>
                    </motion.div>
                    </li>

                    <li className="p-2.5">
                    <motion.div
                        whileHover={{
                        y: -3,
                        color: "#60a5fa",
                        }}
                    >
                        <a href="https://www.linkedin.com/in/keeganlee107/"><Linkedin /></a>
                    </motion.div>
                    </li>

                    <li className="p-2.5">
                    <motion.div
                              whileHover={{
                              y: -3,
                              color: "#60a5fa", 
                              }}
                            >
                              <a href="https://t.me/kiwigan"><Send /></a>
                    </motion.div>
                    </li>
            </ul>
        </div>
        <div orientation="right" className="jSIwrL">
            <div class="jJFfEJ">
                <motion.div
                    whileHover={{
                    y: -3,
                    color: "#60a5fa",
                    }}
                >
                <a href="mailto:jlee285@e.ntu.edu.sg">
                    jlee285@e.ntu.edu.sg
                </a>
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default Sidebar





