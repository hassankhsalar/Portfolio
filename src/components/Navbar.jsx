import React from 'react';
import logo from '../assets/logo.png';

const Navbar = () => {
    return (
        <div className="navbar fixed z-10 bg-gray-950">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><a href="#education" className='bg-fuchsia-950 text-fuchsia-400'>Education</a></li>
                        <li><a href="#training" className='bg-fuchsia-950 text-fuchsia-400'>Training</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl"><img className='w-10 rounded-lg' src={logo} alt="" /></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-4">
                    <li><a href="#education" className='bg-fuchsia-950 text-fuchsia-400'>Education</a></li>
                    <li><a href="#training" className='bg-fuchsia-950 text-fuchsia-400'>Training</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a href="https://drive.usercontent.google.com/download?id=1JXR5rl3DqlHwYaQtpD9TeFfjvTCoPa0n&export=download&authuser=0&confirm=t&uuid=596bb26c-7d3a-40ba-bf6b-06abfb4e2f88&at=APvzH3pntob89VwBZFIuVQMOY1CF:1736073640145" className="btn btn-outline border-0 border-b-4 bg-fuchsia-950 text-fuchsia-400 border-b-4" download>Download CV</a>
            </div>
        </div>
    );
};

export default Navbar;
