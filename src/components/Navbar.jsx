import React from 'react';
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <div className="navbar fixed z-10 bg-gray-950 w-full">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a href="#education" className="bg-fuchsia-950 text-fuchsia-400">
                Education
              </a>
            </li>
            <li>
              <a href="#training" className="bg-fuchsia-950 text-fuchsia-400">
                Training
              </a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">
          <img className="w-10 rounded-lg" src={logo} alt="" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-4">
          <li>
            <a href="#education" className="bg-fuchsia-950 text-fuchsia-400">
              Education
            </a>
          </li>
          <li>
            <a href="#training" className="bg-fuchsia-950 text-fuchsia-400">
              Training
            </a>
          </li>
        </ul>
      </div>
      <div className="navbar-end flex justify-end">
        <a
          href="https://drive.usercontent.google.com/download?id=1pAyWJLq7Z00wXCc1FcBvjfoVCQdT8J-f&export=download&authuser=0&confirm=t&uuid=0ee2d6c4-6b48-4dcb-937d-3e6057a9f676&at=AIrpjvMLLEoWxMYEtIDqjfngoood:1738903949626"
          className="btn btn-outline border-0 border-b-4 bg-fuchsia-950 text-fuchsia-400"
          download
        >
          Download CV
        </a>
      </div>
    </div>
  );
};

export default Navbar;
