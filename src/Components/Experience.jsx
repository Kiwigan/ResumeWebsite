import React from 'react'
import { motion } from 'framer-motion'
import Reveal from './Reveal'
import { ArrowUpRight } from 'react-feather'

const experiences = [
    {
        company: 'Intel Corportation',
        role: 'Product Engineer',
        period: 'Jan 2024 - June 2024',
        description: 'Automated and streamlined weekly reporting of yield analysis by developing macros and building tools on python to help with data calculations',
        skills: ["Python", "Pandas", "Numpy", "JMP Software", "Yield Explorer"],
        link: "https://www.intel.sg/content/www/xa/en/homepage.html",
      },
      {
        company: 'Singapore Examiniation Examiniation Board',
        role: 'Research Assistant',
        period: 'Mar 2021 - Jun 2021',
        description: 'Collaborated with Research Specialist in cleaning and structuring test data for analysis',
        skills: ["Excel"],
        link: "https://www.seab.gov.sg/",
      },
      {
        company: 'Central Provident Fund',
        role: 'Administrative Assistant',
        period: 'Nov 2020 - Feb 2021',
        description: 'Consolidate CPF funds and analysed clients’ information with due diligence for cash transfers approval',
        skills:[],
        link: "https://www.cpf.gov.sg/member",
      },
]



const Experience = () => {
  return (
    <div id="experience" className='max-w-[1300px] px-6 md:px-24 py-12 mx-auto'>
        <h1 className='text-4xl text-gray-200 font-bold text-center mb-12'>Experience</h1>
        
        
        <motion.div
        className='space-y-8'
        initial="hidden"
        animate="visible"
        >
        
            {experiences.map((experience, index) => (
                <Reveal>
                <motion.div
                    key={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3}}
                    transition={{ duration: 1}}
                    >
                    <div class="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                    <header class="basis-1/4 z-10 mb-2 mt-2 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label="2024 to Present">{experience.period}</header>
                    <div class="z-10 sm:col-span-6">
                    <h3 class="text-lg font-semibold leading-snug text-slate-200 ">
                    <a href={experience.link}>
                        <span className="link link--arrowed">
                            {experience.role} · {experience.company}
                            <ArrowUpRight className="ml-1 mt-[0.13rem] w-[1.1rem] arrow-icon" />
                    </span>
                    </a>


                    </h3>
                    <p class="mt-2 text-sm leading-normal">{experience.description}</p>

                    <ul class="mt-2 flex flex-wrap" aria-label="Technologies used">
                        {experience.skills.map((skill, idx) => (
                            <li key={idx} class="mr-2.5 mt-2 text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">
                                {skill}
                            </li>
                        ))}
                    
                    </ul>
                    </div>
                    </div>
                    


                </motion.div>
                </Reveal>
            ))}
        </motion.div>
        

    </div>
  )
}

export default Experience

/*
<li class="mr-2.5 mt-2">
                            <div class="text-xs bg-gray-800 text-gray-400 px-2 py-1 rounded">
                            JavaScript
                            </div>
                        </li>
                        <li class="mr-2.5 mt-2">
                            <div class="text-xs bg-gray-800 text-gray-400 px-2 py-1 rounded">
                            TypeScript
                            </div>
                        </li>
                        <li class="mr-2.5 mt-2">
                            <div class="text-xs bg-gray-800 text-gray-400 px-2 py-1 rounded">React</div>
                        </li>
                        <li class="mr-2.5 mt-2">
                            <div class="text-xs bg-gray-800 text-gray-400 px-2 py-1 rounded">Storybook</div>
                        </li>
*/