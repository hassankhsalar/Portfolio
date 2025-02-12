import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaLink } from "react-icons/fa6";

const VisaNavigator = () => {
  const images = [
    "/vn1.png",
    "/vn2.png",
    "/vn3.png",
    "/vn4.png",
    
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 text-gray-800 dark:text-gray-200">
      <h1 className="text-4xl font-extrabold text-center mb-8">Visa Navigator</h1>

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
              alt={`Visa Navigator ${index + 1}`}
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
            Visa Navigator is a comprehensive platform that provides users with information,
            guidelines, and application assistance for various visa processes. It features
            an intuitive UI, real-time updates, and an extensive knowledge base to assist travelers.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">Live Project</h2>
          <p className="mt-2 text-blue-500 underline"><FaLink></FaLink>https://visa-navigator-portal-152e9.web.app/</p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">GitHub Repository</h2>
          <p className="mt-2 text-blue-500 underline"><FaLink></FaLink>https://github.com/hassankhsalar/Visa-Navigator.git</p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">Challenges Faced</h2>
          <ul className="mt-2 list-disc list-inside">
            <li>Ensuring accurate and up-to-date visa information</li>
            <li>Managing user authentication and data privacy</li>
            <li>Optimizing performance for real-time updates</li>
            <li>Implementing a user-friendly and responsive UI</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">Potential Improvements & Future Plans</h2>
          <ul className="mt-2 list-disc list-inside">
            <li>Integrating AI-based visa eligibility assessment</li>
            <li>Adding a chatbot for real-time visa consultation</li>
            <li>Enhancing security for document uploads</li>
            <li>Expanding coverage for more visa categories</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default VisaNavigator;
