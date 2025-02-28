import 'react'
import img1 from '../assets/porfile.jpg'
import { Link } from "react-router-dom";




const Home = () => {
  return (
    <div className="sm:flex bg-gray-200 h-screen w-screen py-5">
        <div className="bg-gray-100 rounded-4xl container mx-auto sm:flex justify-between 
        items-center ">

            <div className=" text-left pl-10 pt- space-y-5">
            <h6 className="text-6xl font-semibold text-gray-800 ">
            Welcome to My PORFOLIO
            </h6>
            <h1 className="text-4xl font-semibold text-gray-800 ">
            Hi, Im Pornpapat Duangphesteng
            </h1>
            <p className="text-xl text-gray-800">
            I am a third-year Information Technology student at Kasetsart University,  
            </p>
            <button className="bg-red-800 hover:bg-red-600
            text-white text-2xl py-2 px-4 rounded">
              <Link to="/">Get Started
              </Link>
            
            </button>
            </div>

            {/* img */}
            <div className="sm:flex space-y-10 pr-10 pt-10 ">
            <img src={img1} alt="" className='sm:flex w-full h-135 '/>
            </div>
          
            
            </div>
            
    </div>
  )
}

export default Home
