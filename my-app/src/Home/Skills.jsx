import 'react'
import { HiCode } from "react-icons/hi";
import { FaPython } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { FaCopyright } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { RiDatabase2Fill } from "react-icons/ri";
import { SiMysql } from "react-icons/si";
import { IoLogoReact } from "react-icons/io5";
import { RiNextjsFill } from "react-icons/ri";
import { FaVuejs } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { HiPencil } from "react-icons/hi2";
import { PiDevices } from "react-icons/pi";



const Skills = () => {
  return (
    <div className='sm:flex bg-white py-50  h-screen w-screen  '>
      <div className='justify-between items-center '>
          <h1 className=" text-4xl font-bold 
              text-center mt-45 mb-2 px-5 py-5">
              Skills
          </h1>
          {/* Coding Languse */}
          <div className=" gap-1 ">
                <div className="sm:grid grid-cols-5 gap-3
                      justify-center items-center py- ">
                          {/* 1. codding  */}
                    <div className=" bg-gray-200 rounded-lg shadow-lg p-25  hover:bg-gray-900 h-50 
                    hover:text-white
                    flex justify-center items-center text-center ">
                          <div className=" flex  text-7xl font-bold justify-center 
                          items-center text-left space-x-2">
                          <HiCode /> 
                          <p className="text-4xl font-bold text-left "> 
                                Code Languages
                              </p>
                            </div>
                      </div>
                      {/* 2. codding  */}
                      <div className="bg-gray-300 rounded-lg shadow-lg p-2
                      hover:bg-red-600 h-50 hover:text-white ">
                          <div className="flex  text-5xl font-bold 
                          justify-center items-center p-10">
                          <FaCopyright /> 
                            </div>
                            <div className=" justify-center items-center ">
                              <p className="text-2xl font-bold text-center"> 
                                ภาษา C
                              </p>
                            </div>
                      </div>
                      {/* 3. codding  */}
                      <div className="bg-gray-300 rounded-lg shadow-lg p-2
                      hover:bg-red-600 h-50 hover:text-white ">
                          <div className="flex  text-5xl font-bold 
                          justify-center items-center p-10">
                          <FaJava /> 
                            </div>
                            <div className="flex justify-center items-center">
                              <p className="text-2xl font-bold"> 
                                ภาษา JAVA
                              </p>
                            </div>
                      </div>
                      {/* 4. codding  */}
                      <div className="bg-gray-300 rounded-lg shadow-lg p-2
                      hover:bg-red-600 h-50 hover:text-white  ">
                          <div className="flex  text-5xl font-bold 
                          justify-center items-center p-10">
                          <FaPython /> 
                            </div>
                            <div className="flex justify-center items-center">
                              <p className="text-2xl font-bold"> 
                                ภาษา Python
                              </p>
                            </div>
                      </div>
                      {/* 5. codding  */}
                      <div className="bg-gray-300 rounded-lg shadow-lg p-2
                      hover:bg-red-600 h-50 hover:text-white ">
                          <div className="flex  text-5xl font-bold 
                          justify-center items-center p-10">
                          <FaJs /> 
                            </div>
                            <div className="flex justify-center items-center">
                              <p className="text-2xl font-bold"> 
                                ภาษา JavaScript
                              </p>
                            </div>
                      </div>      
                  </div>
                  
              {/* Web Development Languages  */}
                  <div className="sm:grid grid-cols-6 gap-4
                      justify-center items-center p-2 mt-2">
                          {/* 1. codding  */}
                    <div className="bg-gray-200 rounded-lg shadow-lg p-25  hover:bg-gray-900 h-50 
                    hover:text-white
                    flex justify-center items-center text-center">
                          <div className="flex  text-7xl font-bold justify-center 
                          items-center text-left space-x-2">
                          <PiDevices />
                          <p className="text-3xl font-bold  "> 
                          Web Dev Languages
                              </p>
                            </div>
                      </div>
                      {/* 2. codding  */}
                      <div className="bg-gray-300 rounded-lg shadow-lg p-2
                      hover:bg-red-600 h-50 hover:text-white">

                          <div className="flex text-5xl font-bold 
                          justify-center items-center p-10
                          ">
                          <FaHtml5 /> 
                            </div>
                            <div className="flex justify-center items-center ">
                              <p className="text-2xl font-bold  "> 
                                HTML
                              </p>
                            </div>
                      </div>
                      {/* 3. codding  */}
                      <div className="bg-gray-300 rounded-lg shadow-lg p-2
                      hover:bg-red-600 h-50 hover:text-white">
                          <div className="flex  text-5xl font-bold 
                          justify-center items-center p-10">
                          <FaCss3Alt /> 
                            </div>
                            <div className="flex justify-center items-center">
                              <p className="text-2xl font-bold"> 
                                CSS
                              </p>
                            </div>
                      </div>
                      {/* 4. codding  */}
                      <div className="bg-gray-300 rounded-lg shadow-lg p-2
                      hover:bg-red-600 h-50 hover:text-white  ">
                          <div className="flex  text-5xl font-bold 
                          justify-center items-center p-10">
                          <FaJs />
                            </div>
                            <div className="flex justify-center items-center">
                              <p className="text-2xl font-bold"> 
                              ภาษา JavaScript
                              </p>
                            </div>
                      </div>
                      {/*  จัดการข้อมูล  */}
                        <div className="bg-gray-200  rounded-lg shadow-lg p-25  hover:bg-gray-900 h-50 
                      hover:text-white
                      flex justify-center items-center text-center">
                            <div className="flex  text-7xl font-bold justify-center 
                            items-center text-left space-x-5">
                            <RiDatabase2Fill /> 
                            <p className="text-3xl font-bold text-left "> 
                            DataBase
                                </p>
                              </div>
                        </div>
                      {/* 1. DataBse  */}
                        <div className="bg-gray-300 rounded-lg shadow-lg p-2
                      hover:bg-red-600 h-50 hover:text-white  ">
                          <div className="flex  text-5xl font-bold 
                          justify-center items-center p-10">
                          <SiMysql />
                            </div>
                            <div className="flex justify-center items-center">
                              <p className="text-2xl font-bold"> 
                              Mysql
                              </p>
                            </div>
                            </div> 
                  </div>

                  {/* Frameworks */}
                  <div className="sm:grid grid-cols-5 gap-2
                      justify-center items-center py-2 ">
                          {/* 1.Headder Frameworks  */}
                    <div className="bg-gray-200  rounded-lg shadow-lg p-25  hover:bg-gray-900 h-50 
                    hover:text-white
                    flex justify-center items-center text-center">
                          <div className="flex  text-7xl font-bold justify-center 
                          items-center text-left space-x-5">
                          <HiMiniComputerDesktop />
                          <p className="text-4xl font-bold text-left "> 
                          React
                              </p>
                            </div>
                      </div>
                      {/* 1. codding  */}
                      <div className="bg-gray-300 rounded-lg shadow-lg p-2
                      hover:bg-red-600 h-50 hover:text-white">

                          <div className="flex text-5xl font-bold 
                          justify-center items-center p-10
                          ">
                          <IoLogoReact />
                            </div>
                            <div className="flex justify-center items-center ">
                              <p className="text-2xl font-bold  "> 
                              React.js
                              </p>
                            </div>
                      </div>
                      {/* 2. codding  */}
                      <div className="bg-gray-300 rounded-lg shadow-lg p-2
                      hover:bg-red-600 h-50 hover:text-white">

                          <div className="flex text-5xl font-bold 
                          justify-center items-center p-10
                          ">
                          <RiNextjsFill />
                            </div>
                            <div className="flex justify-center items-center ">
                              <p className="text-2xl font-bold  "> 
                              Next.js
                              </p>
                            </div>
                      </div>
                      {/* 3. codding  */}
                      <div className="bg-gray-300 rounded-lg shadow-lg p-2
                      hover:bg-red-600 h-50 hover:text-white">
                          <div className="flex  text-5xl font-bold 
                          justify-center items-center p-10">
                          <FaVuejs />
                            </div>
                            <div className="flex justify-center items-center">
                              <p className="text-2xl font-bold"> 
                              Vue.js
                              </p>
                            </div>
                      </div>
                      {/* 4. codding  */}
                      <div className="bg-gray-300 rounded-lg shadow-lg p-2
                      hover:bg-red-600 h-50 hover:text-white  ">
                          <div className="flex  text-5xl font-bold 
                          justify-center items-center p-10">
                          <FaNodeJs />
                            </div>
                            <div className="flex justify-center items-center">
                              <p className="text-2xl font-bold"> 
                              Node.Js
                              </p>
                            </div>
                      </div>  
                  </div>

                  {/* Tools */}
                  <div className="sm:grid grid-cols-5 gap-2
                      justify-center items-center py-2 ">
                          {/* 1. Tools  */}
                    <div className="bg-gray-200  rounded-lg shadow-lg p-25  hover:bg-gray-900 h-50 
                    hover:text-white
                    flex justify-center items-center text-center">
                          <div className="flex  text-7xl font-bold justify-center 
                          items-center text-left space-x-5">
                          <HiPencil />
                          <p className="text-4xl font-bold text-left "> 
                          Tools
                              </p>
                            </div>
                      </div>
                      {/* 2. codding  */}
                      <div className="bg-gray-300 rounded-lg shadow-lg p-2
                      hover:bg-red-600 h-50 hover:text-white">

                          <div className="flex text-5xl font-bold 
                          justify-center items-center p-10
                          ">
                          <FaCopyright /> 
                            </div>
                            <div className="flex justify-center items-center ">
                              <p className="text-2xl font-bold  "> 
                                ภาษา C
                              </p>
                            </div>
                      </div>
                      {/* 3. codding  */}
                      <div className="bg-gray-300 rounded-lg shadow-lg p-2
                      hover:bg-red-600 h-50 hover:text-white">
                          <div className="flex  text-5xl font-bold 
                          justify-center items-center p-10">
                          <FaJava /> 
                            </div>
                            <div className="flex justify-center items-center">
                              <p className="text-2xl font-bold"> 
                                ภาษา JAVA
                              </p>
                            </div>
                      </div>
                      {/* 4. codding  */}
                      <div className="bg-gray-300 rounded-lg shadow-lg p-2
                      hover:bg-red-600 h-50 hover:text-white  ">
                          <div className="flex  text-5xl font-bold 
                          justify-center items-center p-10">
                          <FaPython /> 
                            </div>
                            <div className="flex justify-center items-center">
                              <p className="text-2xl font-bold"> 
                                ภาษา Python
                              </p>
                            </div>
                      </div>
                      {/* 5. codding  */}
                      <div className="bg-gray-300 rounded-lg shadow-lg p-2
                      hover:bg-red-600 h-50 hover:text-white ">
                          <div className="flex  text-5xl font-bold 
                          justify-center items-center p-10">
                          <FaJs /> 
                            </div>
                            <div className="flex justify-center items-center">
                              <p className="text-2xl font-bold"> 
                                ภาษา JavaScript
                              </p>
                            </div>
                      </div>      
                  </div>
            
            
          </div>
      </div>
    </div>
  )
}

export default Skills
