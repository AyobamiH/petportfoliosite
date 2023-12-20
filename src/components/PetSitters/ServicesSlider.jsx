
// import React, { useState, useRef, useEffect } from "react";
// import "tailwindcss/tailwind.css"; // Ensure Tailwind is set up in your project.
// import AnimatedButton from './AnimatedButton';

// const services = [
//   {
//     id: 1,
//     image: './images/designandDevelopment.gif',
//     title: "Pet-Friendly Website Design",
//     description: "Custom designs tailored for pet care services.",
//   },
//   {
//     id: 2,
//     image: './images/websiteRevamp.gif',
//     title: "Website Revamps",
//     description: "Refresh outdated designs to improve performance and appeal.",
//   },
//   {
//     id: 3,
//     image: './images/websiteOptimization.gif',
//     title: "Website Optimization",
//     description: "Ensure your site works perfectly on all devices.",
//   },
//   {
//     id: 4,
//     image: './images/seoAndLocalVisibility.gif',
//     title: "SEO and Local Visibility",
//     description: "Get found by more pet owners in your area.",
//   },
// ];

// const ServicesSlider = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isNextClicked, setIsNextClicked] = useState(false);
//   const [isPrevClicked, setIsPrevClicked] = useState(false);

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % services.length);
//     setIsPrevClicked(false);
//     setIsNextClicked(true);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
//     setIsNextClicked(false);
//     setIsPrevClicked(true);
//   };

//   return (
//     < >
//         <div className="min-h-[calc(100vh-64px)] py-4 mb-4  relative"> 
//        <div className="w-full p-8 text-center rounded-lg">
//           <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 ">
//             Web Design Services
//           </h2>
//           <p className="text-lg sm:text-xl text-gray-600 mb-6 ">
//             Explore our professional pet sitting, dog walking, and grooming services that ensure your furry friends are well taken care of.
//           </p>
//         </div>
//       <div className=" w-full  text-center   max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
//         {/* Static Section - Hero Text */}
        

//         {/* Slider Section */}
//         <div className="relative w-full lg:w-4/5 overflow-hidden">
//           <div
//             className="flex transition-transform duration-700 ease-in-out"
//             style={{
//               transform: `translateX(-${currentSlide * 100}%)`,
//             }}
//           >
//             {services.map((service) => (
//               <div key={service.id} className="min-w-full flex flex-col py-2 items-center">
    
//                 <div  className="w-full  rounded-lg mx-auto ">
//                   <img src={service.image} alt={service.title}  className="mx-auto w-1/2 "/>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="relative  w-full lg:w-4/5  overflow-hidden">
//           <div
//             className="flex transition-transform duration-700 ease-in-out"
//             style={{ transform: `translateX(-${currentSlide * 100}%)` }}
//           >
//             {services.map((service) => (
//               <div key={service.id} className="min-w-full flex flex-col items-center  bg-white">
//                 {/* Text Content */}
//                 <div className="w-full h-[265px] shadow-left mt-4 ">
//                   <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-2">
//                     {service.title}
//                   </h3>
//                   <p className="text-lg text-gray-600 mb-6">{service.description}</p>
//                   <AnimatedButton className="bg-orange-500">
//                       Learn More
//                     </AnimatedButton>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Navigation Arrows and Pagination */}
//       <div className="flex  w-full max-w-8xl mx-auto justify-around">
//         {/* Previous Slide Arrow */}
//         <button
//           onClick={prevSlide}
//           aria-label="Previous Slide"
//           className={` p-4  text-4xl font-bold rounded-full w-[80px] border-2 bg-white shadow-lg transition duration-300 ${
//             isPrevClicked ? "border-dashed border-gray-800 scale-105 shadow-orange-500" : "border-orange-100"
//           }`}
//         >
//           &#8249;
//         </button>
//         {/* Next Slide Arrow */}
//         <button
//           onClick={nextSlide}
//           aria-label="Next Slide"
//           className={`ml-4 p-4 text-4xl font-bold rounded-full w-[80px] border-2 bg-white shadow-lg transition duration-300 ${
//             isNextClicked ? "border-dashed border-gray-800 scale-105 shadow-orange-500" : "border-orange-100"
//           }`}
//         >
//           &#8250;
//         </button>

//         {/* Pagination Dots */}
//         <div className="flex justify-start w-full max-w-7xl mt-8 ml-20">
//           {services.map((_, index) => (
//             <button
//               key={index}
//               aria-label={`Go to slide ${index + 1}`}
//               className={`h-2  md:block hidden w-full mx-6 ${currentSlide === index ? "bg-gray-600" : "bg-gray-300"}`}
//             ></button>
//           ))}
//         </div>
//       </div>
//       </div>
//     </>
//   );
// };

// export default ServicesSlider;


import React, { useState } from "react";
import "tailwindcss/tailwind.css"; // Ensure Tailwind is set up in your project.
import AnimatedButton from './AnimatedButton';

const services = [
  {
    id: 1,
    image: './images/designandDevelopment.gif',
    title: "Pet-Friendly Website Design",
    description: "Custom designs tailored for pet care services.",
  },
  {
    id: 2,
    image: './images/websiteRevamp.gif',
    title: "Website Revamps",
    description: "Refresh outdated designs to improve performance and appeal.",
  },
  {
    id: 3,
    image: './images/websiteOptimization.gif',
    title: "Website Optimization",
    description: "Ensure your site works perfectly on all devices.",
  },
  {
    id: 4,
    image: './images/seoAndLocalVisibility.gif',
    title: "SEO and Local Visibility",
    description: "Get found by more pet owners in your area.",
  },
];

const ServicesSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isNextClicked, setIsNextClicked] = useState(false);
  const [isPrevClicked, setIsPrevClicked] = useState(false);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length);
    setIsPrevClicked(false);
    setIsNextClicked(true);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
    setIsNextClicked(false);
    setIsPrevClicked(true);
  };

  return (
    <>
      <div className="min-h-[calc(100vh-64px)] py-4 mb-4 relative">
        <div className="w-full p-8 text-center rounded-lg">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Web Design Services
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-6">
            Explore our professional pet sitting, dog walking, and grooming services that ensure your furry friends are well taken care of.
          </p>
        </div>

        <div className="w-full text-center max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
          {/* Slider Section */}
          <div className="relative w-full lg:w-4/5 overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
              }}
            >
              {services.map((service) => (
                <div key={service.id} className="min-w-full flex flex-col py-2 items-center">
                  <div className="w-full rounded-lg mx-auto">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="mx-auto w-1/2"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative w-full lg:w-4/5 overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {services.map((service) => (
                <div key={service.id} className="min-w-full flex flex-col items-center bg-white">
                  {/* Text Content */}
                  <div className="w-full h-[265px] shadow-left mt-4">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-lg text-gray-600 mb-6">
                      {service.description}
                    </p>
                    <AnimatedButton className="bg-orange-500">
                      Learn More
                    </AnimatedButton>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex  items-center w-full absolute bottom-0 transform -translate-y-1/2 justify-between lg:static lg:top-auto lg:transform-none">
          {/* Previous Slide Arrow */}
          <button
            onClick={prevSlide}
            aria-label="Previous Slide"
            className={`p-4 text-4xl font-bold rounded-full w-[60px] lg:w-[80px] border-2 bg-white shadow-lg transition duration-300 ${
              isPrevClicked
                ? "border-dashed border-gray-800 scale-105 shadow-orange-500"
                : "border-orange-100"
            }`}
          >
            &#8249;
          </button>
          {/* Next Slide Arrow */}
          <button
            onClick={nextSlide}
            aria-label="Next Slide"
            className={`ml-4 p-4 text-4xl font-bold rounded-full w-[60px] lg:w-[80px] border-2 bg-white shadow-lg transition duration-300 ${
              isNextClicked
                ? "border-dashed border-gray-800 scale-105 shadow-orange-500"
                : "border-orange-100"
            }`}
          >
            &#8250;
          </button>
        </div>

        {/* Pagination Dots - hidden on xs, sm, md screens */}
        <div className="hidden lg:flex justify-start w-full max-w-7xl mt-8 ml-20">
          {services.map((_, index) => (
            <button
              key={index}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-2 w-full mx-6 ${
                currentSlide === index ? "bg-gray-600" : "bg-gray-300"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </>
  );
};

export default ServicesSlider;
