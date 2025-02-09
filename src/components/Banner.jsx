import React from "react";
import { motion } from "motion/react";
import "../components/Banner.css";
import { easeOut } from "motion";
import reactlogo from "../assets/React.png";

const Banner = () => {
  return (
    <div className="banner-bg w-11/12 mt-20 h-2/3 md:mt-24 md:h-full rounded-xl mx-auto p-4">
      {/* Text Section */}
      <div className="w-full md:w-7/12 md:ml-32 text-slate-300 mx-auto md:mx-0 lg:ml-52">
        <motion.h1
          initial={{ scale: 1 }}
          animate={{ scale: 1.5, x: 0, md: 480 }}
          transition={{ duration: 3, delay: 1, ease: easeOut }}
          className="text-xl md:text-4xl lg:text-6xl text-center md:text-left mt-4 md:mt-6"
        >
          HASSAN KH SALAR
        </motion.h1>
        <motion.h3
          initial={{ scale: 1 }}
          animate={{ scale: 1.8, x: 0, md: 70 }}
          transition={{ duration: 4, delay: 1, ease: easeOut }}
          className="text-lg md:text-2xl lg:text-3xl text-center md:text-right mt-4"
        >
          MERN STACK DEVELOPER
        </motion.h3>
      </div>

      {/* React Logo */}
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: 1.1, y: 40, md: 80, x: 0 }}
        transition={{ duration: 3, delay: 1, ease: easeOut }}
        className="flex justify-center mt-10 md:justify-end md:mt-6 "
      >
        <img
          className="w-8/12 md:w-5/12 lg:w-4/12"
          src={reactlogo}
          alt="React Logo"
        />
      </motion.div>

      {/* Introduction Section */}
      <motion.div
        animate={{ y: 40, md: 80 }}
        transition={{ duration: 3, delay: 1, ease: easeOut }}
        className="mt-8"
      >
        <div className="w-full md:w-10/12 bg-slate-900 opacity-80 p-6 rounded-3xl backdrop-blur-lg mx-auto mt-0 md:mt-48">
          <h1 className="text-white text-lg md:text-2xl lg:text-3xl opacity-100 text-center">
            Hi! I am a Full Stack developer with a passion for crafting engaging
            user experiences with great performance.
          </h1>
        </div>
      </motion.div>
    </div>
  );
};

export default Banner;
