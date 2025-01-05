import React from 'react';
import project1 from "../assets/KrissGraph.jpeg"
import project2 from "../assets/project2.png"
import project3 from "../assets/project3.png"
import { AiFillGithub, AiOutlineGithub } from 'react-icons/ai'
import Reveal from './Reveal';
import { motion } from 'framer-motion';
import { GitHub , ExternalLink } from 'react-feather';

const projects = [
    {
      img: project1,
      title: "Rovival",
      description: "A 13-page HTML Website aimed to boost sales of product",
      skills: ["Javascript", "Bootstrap", "Figma"],
      links: {
        site: "https://singaporewebdevelopment.com/cs2024/tut01grp2/",
        github: "https://github.com/ausarcrusade/HTML12pageHairloss.git",
      },
    },
    {
      img: project2,
      title: "Atelier Noire",
      description: "A Ecommerce Fullstack Application to sell perfumes.",
      skills: ["Javascript", "PHP", "Figma"],
      links: {
        site: "https://kiwigan.github.io/Atelier/frontend/src/home",
        github: "https://github.com/Kiwigan/Atelier",
      },
    },
    {
      img: project3,
      title: "KrissGraph",
      description: "An fashion e-commerce platform with various features.",
      skills: ["Javascript", "JQuery", "Tomcat", "MySQL"],
      links: {
        site: "http://localhost:5173/",
        github: "http://localhost:5173/",
      },
    },
    {
      img: project3,
      title: "NTULearn",
      description: "A redesign of my university course website.",
      skills: ["Figma"],
      links: {
        site: "https://www.figma.com/proto/fDY2ISK9yuRFv29tpfFyUC/Keegan-Design-Portfolio?page-id=0%3A1&node-id=214-713&node-type=frame&viewport=657%2C350%2C0.3&t=lEaKvzoi8A3QZca4-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=214%3A713",
        github: "#",
      },
    },
    {
      img: project3,
      title: "Quizet",
      description: "Reimagining Kahoot on mobile.",
      skills: ["Android Studio", "JQuery", "Tomcat", "MySQL"],
      links: {
        site: "#",
        github: "#",
      },
    },
    {
      img: project3,
      title: "NTU Marketplace",
      description: "A phone app that serves as a platform for student-run businesses sell their items.",
      skills: ["Flutter", "Android Studio", "Flask", "JIRA"],
      links: {
        site: "#",
        github: "#",
      },
    },
    
  ]


  const Portfolio = () => {
    return (
      <div className="max-w-[1000px] mx-auto p-6 md:my-20" id="portfolio">
        <h2 className="text-3xl font-bold text-gray-200 mb-8 justify-self-center">Portfolio</h2>
        {/* Grid container */}
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Reveal key={index}>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-gray-800 rounded-lg shadow-md p-6 h-[450px] flex flex-col justify-between"
              >
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <div>
                  <h3 className="text-lg font-bold text-gray-200 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-400 mb-4">
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  {/* Site Link */}
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    href={project.links.site}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-sm ${project.links.site === '#' ? 'text-gray-800 cursor-default' : 'text-gray-600 hover:text-white'}`}
                    onClick={(e) => {
                      if (project.links.site === '#') {
                        e.preventDefault();
                      }
                    }}
                  >
                    <ExternalLink />
                  </motion.a>
  
                  {/* GitHub Link */}
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-sm ${project.links.github === '#' ? 'text-gray-800 cursor-default' : 'text-gray-600 hover:text-white'}`}
                    onClick={(e) => {
                      if (project.links.github === '#') {
                        e.preventDefault();
                      }
                    }}
                  >
                    <GitHub />
                  </motion.a>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    );
  };
  
  export default Portfolio;
  
  
  
/*
const Portfolio = () => {
  return (
    <div className='max-w-[1000px] mx-auto p-6 md:my-20' id="portfolio">
        <h2 className='text-3xl font-bold text-gray-200 mb-8'>Portfolio</h2>
        {projects.map((project, index) => (
            <Reveal>
            <div key={index} 
            className={`flex flex-col justify-between md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} mb-12 gap-8`}>
              <motion.div
                className="relative w-[25rem] h-[19rem] overflow-hidden bg-gray-300 rounded-[1.7rem] shadow-md"
                whileHover={{
                  scale: 1.2,
                }}
              >
                <motion.img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-auto object-cover" // Ensures the image fills the width proportionally
                  initial={{ y: "0%" }} // Start at original position
                  whileHover={{
                    y: "-51%", // Translate upward on hover
                    transition: { duration: 3, ease: "easeInOut" },
                    // Match CSS transition
                  }}
                />
              </motion.div>
                <div className='w-full md:w-1/2 p-4 flex flex-col justify-center'>
                    <h3 className='text-2xl font-semibold text-gray-200 mb-4'>{project.title}</h3>
                    <p className='text-gray-300 mb-4'>{project.description}</p>
                    <div className='flex space-x-4'>
                        <a href={project.links.site}
                            className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                        transition duration-300'>
                            View Site
                        </a>
                        <a href={project.links.github}
                            className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                        transition duration-300'>
                            <AiOutlineGithub/>
                        </a>

                    </div>

                </div>

            </div>
            </Reveal>
        ))}
        
    </div>
  )
}

export default Portfolio
*/

/*

const Portfolio = () => {
  return (
    <div className='max-w-[1000px] mx-auto p-6 md:my-20' id="portfolio">
        <h2 className='text-3xl font-bold text-gray-200 mb-8'>Portfolio</h2>
        {projects.map((project, index) => (
            <Reveal>
            <div key={index} 
            className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} mb-12`}>
                <div className='w-full md:w-1/2 p-4'>
                    <img
                        src={project.img}
                        alt={project.title}
                        className='block relative h-[19rem] overflow-hidden object-cover rounded-lg shadow-lg'
                    />
                </div>
                <div className='w-full md:w-1/2 p-4 flex flex-col justify-center'>
                    <h3 className='text-2xl font-semibold text-gray-200 mb-4'>{project.title}</h3>
                    <p className='text-gray-300 mb-4'>{project.description}</p>
                    <div className='flex space-x-4'>
                        <a href={project.links.site}
                            className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                        transition duration-300'>
                            View Site
                        </a>
                        <a href={project.links.github}
                            className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                        transition duration-300'>
                            <AiOutlineGithub/>
                        </a>

                    </div>

                </div>

            </div>
            </Reveal>
        ))}
        
    </div>
  )
}

export default Portfolio

*/