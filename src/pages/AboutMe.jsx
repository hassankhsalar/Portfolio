import React from "react";
import self from "../assets/self.jpg";
import reactlogo from "../assets/React.png";
import htmllogo from "../assets/html.png";
import jslogo from "../assets/js.png";
import mongodb from "../assets/mongodb.png";
import express from "../assets/express.png";
import node from "../assets/node.png";

const AboutMe = () => {
  return (
    <div className="w-11/12 md:mt-80">
      <div>
        <h1 className="text-5xl text-slate-400">About Me</h1>
      </div>
      <div>
        <div className="hero bg-black opacity-70 min-h-screen rounded-xl mt-4">
          <div className="flex flex-col mt-2 items-center lg:flex-row-reverse ">
            <img src={self} className="w-full mx-auto md:max-w-sm px-4 py-4 rounded-lg shadow-2xl md:px-0 md:py-0" />
            <div className="flex flex-col justify-center items-center">
              <p className="py-6 text-slate-400 text-xl px-4">
                I am a dedicated Full Stack Developer with expertise in building
                dynamic, responsive, and user-friendly web applications. With
                proficiency in modern technologies like React, Tailwind CSS,
                Node.js, jwt and Firebase, I thrive on crafting seamless user
                experiences and efficient backend systems. Constantly learning
                and adapting, I aim to combine creativity and technical skills
                to solve real-world problems and deliver high-quality digital
                solutions. Let's create something amazing together!
              </p>
              <h1 className="text-5xl font-bold text-slate-500 mt-10">
                SKILLS
              </h1>
              <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center px-2">
                <img
                  className="w-24 h-16 border-2 rounded-xl border-slate-500 object-contain"
                  src={reactlogo}
                  alt="React Logo"
                />
                <img
                  className="w-24 h-16 border-2 rounded-xl border-slate-500 object-contain"
                  src={htmllogo}
                  alt="HTML Logo"
                />
                <img
                  className="w-24 h-16 border-2 rounded-xl border-slate-500 object-contain"
                  src={jslogo}
                  alt="JavaScript Logo"
                />
                <img
                  className="w-24 h-16 border-2 rounded-xl border-slate-500 object-contain"
                  src={mongodb}
                  alt="MongoDB Logo"
                />
                <img
                  className="w-24 h-16 border-2 rounded-xl border-slate-500 object-contain"
                  src={express}
                  alt="Express Logo"
                />
                <img
                  className="w-24 h-16 border-2 rounded-xl border-slate-500 object-contain"
                  src={node}
                  alt="Node.js Logo"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
