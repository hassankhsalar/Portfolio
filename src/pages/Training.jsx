import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import bc1 from "../assets/bc1.png";
import vn1 from "../assets/vn1.png";
import lb1 from "../assets/lb1.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { AnimatedTestimonialsDemo } from "../components/AccertainityComponents/AnimatedTestimonials";

const Training = () => {
  return (
    <div className="w-11/12">
      <div>
        <h1 className="text-5xl text-slate-400">Training & Projects</h1>
      </div>
      <div>
        <div className="hero bg-black opacity-70 min-h-screen rounded-xl mt-4">
          <div className="flex flex-col xl:flex-row justify-center items-center">
            
            <div className="w-full xl:w-5/12">
              <div className="px-4">
                <h1 className="text-5xl font-bold text-slate-500 mt-10">
                  Training
                </h1>
                <h1 className="text-3xl font-bold text-slate-500 mt-10">
                  Programming Hero
                </h1>
                <p className="py-6 text-slate-400 text-xl ">
                  This web Development course allowed me to sharpen up my
                  basics and learn new things.I have worked with Next.js React Nodejs
                  ExpressJs MongoDB Firebase authentication JWT NextAuth Stripe SSLcommerz and many more.
                </p>
              </div>
              <div className="px-4 text-slate-500">
                <h1 className="text-5xl font-bold  mt-5">Projects</h1>
                <h3 className="text-xl mt-6">
                  Monster Factory fitness Portal [ React Firebase Nodejs Express JWT Stripe SSLcommerz ]
                </h3>
                <h3 className="text-xl mt-2">
                  Boi-chai library Portal [ React Firebase Nodejs Express JWT ]
                </h3>
                <h3 className="text-xl mt-2">
                  Visa Navigator          [ React Firebase Nodejs Expressjs MongoDB ]
                </h3>
                <h3 className="text-xl mt-2">
                  Lingo-Bingo [ React firebase js ]
                </h3>
                <h3 className="text-2xl mt-2 text-fuchsia-600">
                  And Many more
                </h3>
              </div>
            </div>
            {/* slider */}
            <div>
              <AnimatedTestimonialsDemo></AnimatedTestimonialsDemo>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Training;
