import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-white ">
      <nav className="sm:flex justify-between items-center bg-gray-100 bg-opacity-50 rounded-lg shadow-lg p-8 pl-10 pr-10">
        {/* LOGO */}
        <div className="sm:flex items-center pl-4">
          <Link to="/" className="text-5xl font-semibold text-gray-800 hover:text-red-800">
            My Portfolio
          </Link>
        </div>

        {/* NAV LINKS (hidden on mobile) */}
        <div className="hidden sm:flex pr-8 gap-8 text-2xl font-semibold ">
          <Link to="/" className="text-gray-800 hover:text-red-800">หน้าหลัก</Link>
          <Link to="/about" className="text-gray-800 hover:text-red-800">เกี่ยวกับฉัน</Link>
          <Link to="/skills" className="text-gray-800 hover:text-red-800">ทักษะ</Link>
          <Link to="/certificate" className="text-gray-800 hover:text-red-800">เกียรติบัตร</Link>
          <Link to="/experience" className="text-gray-800 hover:text-red-800">ประสบการณ์</Link>
          <Link to="/contact" className="text-gray-800 hover:text-red-800">ช่องทางการติดต่อ</Link>
        </div>

        {/* HAMBURGER MENU (visible on mobile) */}
        <div className="sm:hidden flex items-center z-20">
          <button onClick={toggleMenu} className="text-3xl text-gray-800 hover:text-red-800">
            {isMenuOpen ? "X" : "☰"}
          </button>
        </div>
      </nav>

      {/* Mobile Menu (shown when hamburger is clicked) */}
      {isMenuOpen && (
        <div className="sm:hidden flex flex-col items-center bg-gray-100 p-6 space-y-5 z-20 absolute top-0 left-0 w-full">
          <button onClick={toggleMenu} className="py-10 absolute top-4 left-4 text-3xl text-gray-800 hover:text-red-800">
            X
          </button>
          <Link to="/" className="text-4xl font-semibold text-gray-800 hover:text-red-800">
            My Portfolio
          </Link>
          <Link to="/" className="text-xl text-gray-800 hover:text-red-800 py-2">
            หน้าหลัก
          </Link>
          <Link to="/about" className="text-xl text-gray-800 hover:text-red-800 py-2">
            เกี่ยวกับฉัน
          </Link>
          <Link to="/skills" className="text-xl text-gray-800 hover:text-red-800 py-2">
            ทักษะ
          </Link>
          <Link to="/certificate" className="text-xl text-gray-800 hover:text-red-800 py-2">
            เกียรติบัตร
          </Link>
          <Link to="/experience" className="text-xl text-gray-800 hover:text-red-800 py-2">
          ประสบการณ์
          </Link>
          <Link to="/contact" className="text-xl text-gray-800 hover:text-red-800 py-2">
          ช่องทางการติดต่อ
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
