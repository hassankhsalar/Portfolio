import React from "react";
import logo from "../assets/logo.jpg";
import { FaDownload } from "react-icons/fa6";
import { ToastContainer, toast } from 'react-toastify';

const Navbar = () => {
  const notify = () => toast("Dowload will start Shortly!");
  return (
    <nav className="navbar fixed z-10 w-full bg-gray-950 shadow-lg px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="flex w-full items-center justify-between">
        {/* Logo & Mobile Menu */}
        <div className="flex items-center">
          <div className="dropdown lg:hidden">
            <button tabIndex={0} className="btn btn-ghost p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 sm:h-7 sm:w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </button>
            <ul
              tabIndex={0}
              className="dropdown-content menu menu-sm mt-3 w-52 space-y-2 rounded-lg bg-gray-900 p-2 text-white shadow-lg"
            >
              <li>
                <a href="#education" className="hover:text-fuchsia-400">
                  Education
                </a>
              </li>
              <li>
                <a href="#training" className="hover:text-fuchsia-400">
                  Training
                </a>
              </li>
            </ul>
          </div>
          <a href="/" className="btn btn-ghost">
            <img className="w-10  rounded-lg" src={logo} alt="Logo" />
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal space-x-6 text-lg font-medium text-white">
            <li>
              <a href="#education" className="hover:text-fuchsia-400">
                Education
              </a>
            </li>
            <li>
              <a href="#training" className="hover:text-fuchsia-400">
                Training
              </a>
            </li>
          </ul>
        </div>

        {/* Download CV Button */}
        <div>
          <a onClick={notify}
            href="https://drive.usercontent.google.com/download?id=1pAyWJLq7Z00wXCc1FcBvjfoVCQdT8J-f&export=download"
            className="btn btn-outline border-0 border-b-4 bg-fuchsia-950 text-fuchsia-400 hover:bg-fuchsia-800 hover:text-white sm:text-lg"
            download
          >
            Resume <FaDownload></FaDownload>
          </a>
          <ToastContainer />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
