import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-white">
      <div className="sm:flex justify-between items-center">
        <nav className="text-2xl items-center gap-4 sm:grid grid-cols-3 h-25 w-full bg-gray-100 bg-opacity-50 rounded-lg shadow-lg py-2 px-4">
          {/* LOGO */}
          <div className="sm:flex items-center pl-4">
            <Link to="/" className="text-6xl font-semibold text-gray-800 hover:text-red-800">
              LOGO
            </Link>
          </div>

          {/* NAV LINKS (hidden on mobile) */}
          <div className="hidden sm:flex pl-4 gap-8 text-2xl font-semibold">
            <a className="text-gray-800 hover:text-red-800">
              <Link to="/">HOME</Link>
            </a>
            <a className="text-gray-800 hover:text-red-800">
              <Link to="/register">REGISTER</Link>
            </a>
            <a className="text-gray-800 hover:text-red-800">
              <Link to="/report">REPORT</Link>
            </a>
            <a className="text-gray-800 hover:text-red-800">
              <Link to="/contact">CONTACT</Link>
            </a>
          </div>

          {/* BUTTONS (hidden on mobile) */}
          <div className="hidden sm:flex items-center justify-end gap-8 pr-4">
            <button className="bg-red-800 hover:bg-red-600 text-white text-2xl py-2 px-4 rounded">
              <Link to="/login" className="text-2xl font-semibold">
                LOGIN
              </Link>
            </button>

            <button className="bg-gray-500 hover:bg-gray-400 text-white text-2xl py-2 px-4 rounded">
              <Link to="/" className="text-2xl font-semibold">
                SIGNUP
              </Link>
            </button>
          </div>

          {/* HAMBURGER MENU (visible on mobile) */}
          <div className="sm:hidden flex items-center z-20">
            <button onClick={toggleMenu} className="text-3xl text-gray-800 hover:text-red-800">
              {isMenuOpen ? "X" : "☰"}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu (shown when hamburger is clicked) */}
      {isMenuOpen && (
        <div className=" sm:hidden flex flex-col items-center bg-gray-100 p-6 space-y-5 z-20 absolute top-0 left-0 py-30 w-50 ">
          <button onClick={toggleMenu} className="py-10 absolute top-4 left-4 text-3xl text-gray-800 hover:text-red-800">
            X
          </button>
          <Link to="/" className="text-6xl font-semibold text-gray-800 hover:text-red-800">
              LOGO
            </Link>

          <Link to="/" className="text-xl text-gray-800 hover:text-red-800 py-2">
            HOME
          </Link>
          <Link to="/register" className="text-xl text-gray-800 hover:text-red-800 py-2">
            REGISTER
          </Link>
          <Link to="/report" className="text-xl text-gray-800 hover:text-red-800 py-2">
            REPORT
          </Link>
          <Link to="/contact" className="text-xl text-gray-800 hover:text-red-800 py-2">
            CONTACT
          </Link>
          <Link to="/login" className="text-xl text-gray-800 hover:text-red-800 py-2">
            LOGIN
          </Link>
          <Link to="/" className="text-xl text-gray-800 hover:text-red-800 py-2">
            SIGNUP
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
