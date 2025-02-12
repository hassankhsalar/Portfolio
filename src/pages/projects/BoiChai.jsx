import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaLink } from "react-icons/fa6";

const BoiChai = () => {
  const images = [
    "/bc.png",
    "/bc1.png",
    "/bc2.png",
    "/bc3.png",
    "/bc4.png",
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 text-gray-800 dark:text-gray-200">
      <h1 className="text-4xl font-extrabold text-center mb-8">BoiChai</h1>

      {/* Image Slider */}
      <Swiper
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
        modules={[Navigation, Pagination, Autoplay]}
        className="w-full h-72 sm:h-80 md:h-96 lg:h-[500px] rounded-lg overflow-hidden"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              alt={`BoiChai ${index + 1}`}
              className="w-full h-full object-cover rounded-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Project Details */}
      <div className="mt-8 space-y-6">
        <div>
          <h2 className="text-2xl font-semibold">Main Technology Stack</h2>
          <p className="mt-2">React, Tailwind CSS, Swiper.js, Node.js, Express.js, MongoDB</p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">Brief Description</h2>
          <p className="mt-2">
            BoiChai is an online book-sharing platform that allows users to borrow, lend, and explore
            a wide variety of books. The project features an intuitive UI, real-time interactions, and
            a robust backend for managing book transactions.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">Live Project</h2>
          <p className="mt-2 text-blue-500 underline"><FaLink></FaLink>https://boi-chai-3669a.web.app/</p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">GitHub Repository</h2>
          <p className="mt-2 text-blue-500 underline"><FaLink></FaLink>https://github.com/hassankhsalar/Boi-chai.git</p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">Challenges Faced</h2>
          <ul className="mt-2 list-disc list-inside">
            <li>Managing user authentication and book transactions</li>
            <li>Ensuring a seamless book lending experience</li>
            <li>Optimizing search and filtering functionality</li>
            <li>Implementing a scalable backend for efficient data handling</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">Potential Improvements & Future Plans</h2>
          <ul className="mt-2 list-disc list-inside">
            <li>Adding a recommendation system based on user preferences</li>
            <li>Integrating AI-driven book summaries</li>
            <li>Introducing a community discussion forum for book lovers</li>
            <li>Enhancing the UI with more accessibility features</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BoiChai;
