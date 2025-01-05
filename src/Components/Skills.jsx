import React from "react"
import {
  DiHtml5,
  DiCss3,
  DiSass,
  DiBootstrap,
  DiJavascript1,
  DiReact,
  DiNodejsSmall,
  DiMongodb,
  DiGithubBadge,
  DiPhotoshop,
  DiUnitySmall,
  DiMysql
} from "react-icons/di"
import JMP from "../assets/JMP_Logo.png"
import figma from "../assets/figma.png"
import canva from "../assets/canva.png"
import tailwind from "../assets/tailwind.svg"
import flutter from "../assets/flutter.png"
import python from "../assets/python.png"
import Reveal from "./Reveal"

const skills = [
    {
      category: 'Frontend',
      technologies: [
        { name: 'Tailwind', icon: <img src={tailwind} alt="Tailwind Logo" className="w-6"/> },
        { name: 'Flutter', icon: <img src={flutter} alt="Flutter Logo" className="w-3 h-4"/> },
        { name: 'Sass', icon: <DiSass className='text-pink-600' /> },
        { name: 'Bootstrap', icon: <DiBootstrap className='text-purple-600' /> },
        { name: 'JavaScript', icon: <DiJavascript1 className='text-yellow-500' /> },
        { name: 'React', icon: <DiReact className='text-blue-500' /> },
      ],
    },
    {
      category: 'Backend',
      technologies: [
        { name: 'Node Js', icon: <DiNodejsSmall className='text-green-500' /> },
        { name: 'MongoDB', icon: <DiMongodb className='text-green-600' /> },
        { name: 'React', icon: <DiReact className='text-blue-500' /> },
        { name: 'GitHub', icon: <DiGithubBadge className='text-gray-600' /> },
        { name: 'MySQL', icon: <DiMysql className='text-blue-400' /> }
      ],
    },
    {
        category: 'Design',
        technologies: [
          { name: 'Figma', icon: <img src={figma} alt="Figma Logo" className="w-4"/> },
          { name: 'Photoshop', icon: <DiPhotoshop className='text-blue-500' /> },
          { name: 'Canva', icon: <img src={canva} alt="Figma Logo" className="w-5"/>},
          { name: 'Unity', icon: <DiUnitySmall className='text-black' /> },
        ],
      },
      {
        category: 'Statistics',
        technologies: [ 
          { name: 'JMP', icon: <img src={JMP} alt="JMP Software Logo" className="w-6"/> },
          { name: 'MongoDB', icon: <DiMongodb className='text-green-600' /> },
          { name: 'Python', icon: <img src={python} alt="JMP Software Logo" className="w-4"/> },
          { name: 'GitHub', icon: <DiGithubBadge className='text-gray-600' /> },
        ],
      }
  ]

const Skills = () => {
  return (
    <div className="max-w-[700px] mx-auto flex flex-col justify-center px-4 text-gray-200 pb-8 md:py-12" id="skills">
        <Reveal>
        <h2 className="text-3xl font-bold mb-4 text-center">Skills</h2>
        <p className="text-center mb-8">
            I worked on various frontend and fullstack projects. Check them <a href="#" className="underline">there</a>.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
                <div key={index} className="border border-blue-900 p-6 rounded-lg bg-blue-900/20 shadow-lg">
                    <h3 className="text-xl font-bold mb-4 text-center">{skill.category}</h3>
                    <div className="grid grid-cols-2 gap-4 px-7 md:px-4">
                        {skill.technologies.map((tech, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                                <span className="text-2xl min-w-6 justify-items-center">{tech.icon}</span>
                                <span>{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
        </Reveal>
    </div>

  )
}

export default Skills