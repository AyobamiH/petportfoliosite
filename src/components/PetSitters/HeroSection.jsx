


// import React, { useEffect, useRef } from "react";
// import { motion } from "framer-motion";
// import Lottie from "lottie-react";
// import { gsap } from "gsap";
// import petAnimation from "./animations/petanimations.json";
// import heroBackground from "./animations/hero-background.json";

// const HeroSection = () => {
 
  
   

    

//   // Function to split the text into individual words

//   return (
//     <section className="relative min-h-[calc(100vh-64px)]  flex items-center justify-center overflow-hidden bg-blue-50">
//       {/* Hero Background Animation */}
//       <div className="absolute inset-0 z-0">
//         <Lottie
//           className="w-full h-full object-cover opacity-30"
//           animationData={heroBackground}
//           loop={true}
//         />
//       </div>

//       {/* Text Content */}
//       <div className="relative z-10 text-center text-gray-800 max-w-4xl mx-auto px-4">
//         {/* Responsive Headline */}
//         <h1
       
//           className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold mb-4 leading-loose"
//         >
          
//             "I Design Pet-Friendly Websites for Sitters and Care Providers"
        
//         </h1>

//         {/* Responsive Subtext */}
//         <motion.p
//           className="text-lg xs:text-xl sm:text-2xl lg:text-3xl mb-8"
//           initial={{ opacity: 0, y: -30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.2 }}
//         >
//           Helping pet care businesses create playful, engaging, and effective
//           websites.
//         </motion.p>

//         {/* Call to Action Buttons */}
//         <div className="flex justify-center flex-wrap space-x-4">
//           <motion.button
//             className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 sm:py-3 px-4 sm:px-6 text-sm sm:text-base rounded-full transition duration-300"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             Get a Free Consultation
//           </motion.button>
//           <motion.button
//             className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 sm:py-3 px-4 sm:px-6 text-sm sm:text-base rounded-full transition duration-300"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             Let's Revamp Your Site
//           </motion.button>
//         </div>
//       </div>

//       {/* Pet Animation in the Bottom-Left */}
//       <div className="absolute bottom-0 left-0 w-1/3 xs:w-1/4 sm:w-1/5 lg:w-1/6 xl:w-1/8">
//         <Lottie animationData={petAnimation} loop={true} />
//       </div>
//     </section>
//   );
// };

// export default HeroSection;


import React from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import petAnimation from "./animations/petanimations.json";
import heroBackground from "./animations/hero-background.json";

const HeroSection = () => {
  return (
    <section className="relative min-h-[calc(100vh-64px)] flex items-center justify-center overflow-hidden bg-blue-50">
      {/* Hero Background Animation */}
      <div className="absolute inset-0 z-0">
        <Lottie
          className="w-full h-full object-cover opacity-30"
          animationData={heroBackground}
          loop={true}
        />
      </div>

      {/* Text Content */}
      <div className="relative z-10 text-center text-gray-800 max-w-4xl mx-auto px-4">
        {/* Responsive Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight sm:leading-tight md:leading-snug lg:leading-snug">
          "I Design Pet-Friendly Websites for Sitters and Care Providers"
        </h1>

        {/* Responsive Subtext */}
        <motion.p
          className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Helping pet care businesses create playful, engaging, and effective
          websites.
        </motion.p>

        {/* Call to Action Buttons */}
        <div className="flex justify-center flex-wrap gap-4">
          <motion.button
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 sm:py-3 sm:px-8 text-base sm:text-lg rounded-full transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get a Free Consultation
          </motion.button>
          <motion.button
            className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-6 sm:py-3 sm:px-8 text-base sm:text-lg rounded-full transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Revamp Your Site
          </motion.button>
        </div>
      </div>

      {/* Pet Animation in the Bottom-Left */}
      <div className="absolute bottom-0 left-0 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6">
        <Lottie animationData={petAnimation} loop={true} />
      </div>
    </section>
  );
};

export default HeroSection;