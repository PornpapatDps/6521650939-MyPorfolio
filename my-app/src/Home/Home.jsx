import 'react';
import img1 from '../assets/porfile.jpg';
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex justify-center bg-gray-200 w-full py-10 px-5">
      <div className="bg-gray-100 rounded-3xl max-w-7xl w-full flex flex-col-reverse sm:flex-row items-center justify-between p-5 sm:p-10 gap-10">
        
        {/* Text Section */}
        <div className="text-left space-y-5 w-full sm:w-1/2">
          <h6 className="text-4xl sm:text-6xl font-semibold text-gray-800">
            Welcome to My PORTFOLIO
          </h6>
          <h2 className="text-xl sm:text-4xl font-semibold text-gray-800">
            นางสาว พรปภัสร์ ดวงเพชรแสง
          </h2>
          <p className="text-lg sm:text-xl text-gray-800">
            ดิฉันเป็นนิสิตชั้นปีที่3 ภาคพิเศษ สาขาเทคโนโลยีสารสนเทศ <br/> คณะศิลปศาสตร์และวิทยาศาสตร์ มหาวิทยาเกษตรศาสตร์
            <br/> วิทยาเขตกำแพงแสน สนใจในการพัฒนาเว็บไซต์ และการเขียนโปรแกรม
          </p>
          <Link to="/about">
            <button className="bg-red-800 hover:bg-red-600 text-white text-lg sm:text-2xl py-2 px-6 rounded">
              ทำความรู้จักเพิ่มเติม
            </button>
          </Link>
        </div>

        {/* Image Section */}
        <div className="w-full sm:w-1/2 flex justify-center">
          <img src={img1} alt="profile" className="rounded-2xl w-full max-w-sm sm:max-w-md object-cover" />
        </div>
        
      </div>
    </div>
  );
};

export default Home;
