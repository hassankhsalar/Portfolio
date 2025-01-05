import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import bc1 from '../assets/bc1.png';
import vn1 from '../assets/vn1.png';
import lb1 from '../assets/lb1.png';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

const Training = () => {
  return (
    <div className="w-10/12 ">
      <div>
        <h1 className="text-5xl text-slate-400">Training & Projects</h1>
      </div>
      <div>
        <div className="hero bg-black opacity-70 min-h-screen rounded-xl mt-4">
          <div className="grid grid-cols-2">
            <div>
            <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={bc1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={vn1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={lb1} />
        </SwiperSlide>
      </Swiper>
            </div>

            <div>
              <div className="px-4">
                <h1 className="text-5xl font-bold text-slate-500 mt-10">
                  Training
                </h1>
                <h1 className="text-3xl font-bold text-slate-500 mt-10">
                  Programming Hero
                </h1>
                <p className="py-6 text-slate-400 text-xl ">
                 This web Development training allowed me to sharpen up my basics and learn new things.I have worked with 
                 React  Nodejs  ExpressJs  MongoDB  Firebase authentication  JWT and many more. 
                </p>
              </div>
              <div className="px-4 text-slate-500">
                <h1 className="text-5xl font-bold  mt-5">Projects</h1>
                <h3 className="text-xl mt-6">
                  Boi-chai  library Portal --React firebase nodejs express jwt--
                </h3>
                <h3 className="text-xl mt-2">
                 Visa Navigator --React firebase nodejs express--
                </h3>
                <h3 className="text-xl mt-2">
                  Lingo-Bingo--React firebase js--
                </h3>
                <h3 className="text-2xl mt-10">
                  check silder for Project demo
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Training;
