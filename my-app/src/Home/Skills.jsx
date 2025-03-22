import 'react'

import { FaPython, FaJava, FaCopyright, FaJs, FaHtml5, FaCss3Alt, FaVuejs, FaNodeJs, FaGithub, FaFigma } from "react-icons/fa";
import {  RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import {  SiPostman } from "react-icons/si";
import { IoLogoReact } from "react-icons/io5";
import { HiMiniComputerDesktop, HiPencil } from "react-icons/hi2";
import { PiDevices } from "react-icons/pi";

const Skills = () => {
  return (
    <div className='bg-white py-6 p-5 rounded-lg shadow-lg'>
      <div className='text-center'>
        <h1 className="text-4xl font-bold mb-6">Skills</h1>
        
        {/* Coding Languages */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="bg-gray-300 rounded-lg shadow-lg p-6 hover:bg-red-600 hover:text-white flex flex-col items-center">
            <FaCopyright className="text-5xl mb-4" />
            <p className="text-xl font-bold">ภาษา C</p>
          </div>
          <div className="bg-gray-300 rounded-lg shadow-lg p-6 hover:bg-red-600 hover:text-white flex flex-col items-center">
            <FaJava className="text-5xl mb-4" />
            <p className="text-xl font-bold">ภาษา JAVA</p>
          </div>
          <div className="bg-gray-300 rounded-lg shadow-lg p-6 hover:bg-red-600 hover:text-white flex flex-col items-center">
            <FaPython className="text-5xl mb-4" />
            <p className="text-xl font-bold">ภาษา Python</p>
          </div>
          <div className="bg-gray-300 rounded-lg shadow-lg p-6 hover:bg-red-600 hover:text-white flex flex-col items-center">
            <FaJs className="text-5xl mb-4" />
            <p className="text-xl font-bold">ภาษา JavaScript</p>
          </div>
        </div>
        
        {/* Web Development Languages */}
        <div className="mt-10">
          <div className="text-3xl font-bold flex justify-center items-center space-x-2">
            <PiDevices />
            <p>Web Dev Languages</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
            <div className="bg-gray-300 rounded-lg shadow-lg p-6 hover:bg-red-600 hover:text-white flex flex-col items-center">
              <FaHtml5 className="text-5xl mb-4" />
              <p className="text-xl font-bold">HTML</p>
            </div>
            <div className="bg-gray-300 rounded-lg shadow-lg p-6 hover:bg-red-600 hover:text-white flex flex-col items-center">
              <FaCss3Alt className="text-5xl mb-4" />
              <p className="text-xl font-bold">CSS</p>
            </div>
            <div className="bg-gray-300 rounded-lg shadow-lg p-6 hover:bg-red-600 hover:text-white flex flex-col items-center">
              <FaJs className="text-5xl mb-4" />
              <p className="text-xl font-bold">JavaScript</p>
            </div>
          </div>
        </div>
        
        {/* Frameworks */}
        <div className="mt-10">
          <div className="text-3xl font-bold flex justify-center items-center space-x-2">
            <HiMiniComputerDesktop />
            <p>Frameworks</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
            <div className="bg-gray-300 rounded-lg shadow-lg p-6 hover:bg-red-600 hover:text-white flex flex-col items-center">
              <IoLogoReact className="text-5xl mb-4" />
              <p className="text-xl font-bold">React.js</p>
            </div>
            <div className="bg-gray-300 rounded-lg shadow-lg p-6 hover:bg-red-600 hover:text-white flex flex-col items-center">
              <RiNextjsFill className="text-5xl mb-4" />
              <p className="text-xl font-bold">Next.js</p>
            </div>
            <div className="bg-gray-300 rounded-lg shadow-lg p-6 hover:bg-red-600 hover:text-white flex flex-col items-center">
              <FaVuejs className="text-5xl mb-4" />
              <p className="text-xl font-bold">Vue.js</p>
            </div>
            <div className="bg-gray-300 rounded-lg shadow-lg p-6 hover:bg-red-600 hover:text-white flex flex-col items-center">
              <FaNodeJs className="text-5xl mb-4" />
              <p className="text-xl font-bold">Node.js</p>
            </div>
          </div>
        </div>

        {/* Tools */}
        <div className="mt-10">
          <div className="text-3xl font-bold flex justify-center items-center space-x-2">
            <HiPencil />
            <p>Tools</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
            <div className="bg-gray-300 rounded-lg shadow-lg p-6 hover:bg-red-600 hover:text-white flex flex-col items-center">
              <FaGithub className="text-5xl mb-4" />
              <p className="text-xl font-bold">GitHub</p>
            </div>
            <div className="bg-gray-300 rounded-lg shadow-lg p-6 hover:bg-red-600 hover:text-white flex flex-col items-center">
              <SiPostman className="text-5xl mb-4" />
              <p className="text-xl font-bold">Postman</p>
            </div>
            <div className="bg-gray-300 rounded-lg shadow-lg p-6 hover:bg-red-600 hover:text-white flex flex-col items-center">
              <FaFigma className="text-5xl mb-4" />
              <p className="text-xl font-bold">Figma</p>
            </div>
            <div className="bg-gray-300 rounded-lg shadow-lg p-6 hover:bg-red-600 hover:text-white flex flex-col items-center">
              <RiTailwindCssFill className="text-5xl mb-4" />
              <p className="text-xl font-bold">Tailwind CSS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
