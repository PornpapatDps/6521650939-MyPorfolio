import 'react'
import img1 from '../assets/porfile.jpg'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className='flex justify-center bg-gray-200 w-full py-10 px-5'>
    
    <div className="max-w-2xl mx-auto p-5 bg-gray-100 text-gray-800 rounded-lg shadow-xl">
      <h1 className="text-4xl font-bold text-center mb-8 text-red-600">เกี่ยวกับฉัน</h1>
      
      {/* Profile Picture */}
      <div className="text-center mb-6">
        <img src={img1} alt="profile" className="w-40 h-40 rounded-full mx-auto border-4 border-red-600 shadow-lg hover:scale-110 transition-transform duration-300 ease-in-out" />
      </div>

        
      {/* Name Section */}
      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <h2 className="text-2xl font-semibold mb-2 text-red-600">Name:</h2>
        <p className="text-xl text-gray-800">นางสาว พรปภัสร์ ดวงเพชรแสง</p>
        <p className="text-xl text-gray-800">ชื่อเล่น: ไนซ์</p>
      </div>

      {/* Age Section */}
      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <h2 className="text-2xl font-semibold mb-2 text-red-600">Age:</h2>
        <p className="text-xl text-gray-800">อายุ: 21 ปี</p>
      </div>

      {/* Education Section */}
      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <h2 className="text-2xl font-semibold mb-2 text-red-600">Education:</h2>
        <p className="text-xl text-gray-800">ระดับมัธยมตอนต้นและปลาย: โรงเรียนสตรีวัดมหาพฤฒาราม ในพระบรมรามชินูปถัมภ์</p>
        <p className="text-xl text-gray-800">เกรดเฉลี่ยสะสม: 3.27</p>
        <p className="text-xl text-gray-800">ระดับมหาวิทยาลัย: มหาวิทยาลัยเกษตรศาสตร์ วิทยาเขตกำแพงแสน</p>
        <p className="text-xl text-gray-800">เกรดเฉลี่ยสะสม: 3.15 (ปัจจุบัน)</p>
      </div>

      {/* Add button for more */}
      <div className="text-center mt-6">
        <button className="bg-red-600 px-8 py-3 rounded-full text-lg text-white hover:bg-red-500 transition-colors duration-300">
            <Link to="/contact">
          ช่องทางการติดต่อ
            </Link>
        </button>
      </div>
    </div>
    </div>
  )
}

export default About
