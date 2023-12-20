
// import React, { useEffect, useRef } from "react";
// import { motion } from "framer-motion";
// import Lottie from "lottie-react";
// // import { Lottie} from '@lottiefiles/dotlottie-react';
// import { gsap } from "gsap";
// import petAnimation from "./animations/petanimations.json";
// import heroBackground from "./animations/hero-background.json";
// const HeroSection = () => {
//   const h1Ref = useRef(null);
  
  
//   useEffect(() => {
//     const words = h1Ref.current.querySelectorAll(".word");

//     // GSAP drop and impact animation
//     gsap.fromTo(
//       words,
//       { opacity: 0, y: -200 }, // Start far above the screen
//       {
//         opacity: 1,
//         y: 0,
//         stagger: 0.1,
//         ease: "bounce.out", // Use bounce easing for impact effect
//         duration: 0.8
//       }
//     );


    
//   }, []);

//   // Function to split the text into individual words
//   const splitText = (text) => {
//     return text.split(" ").map((word, index) => (
//       <span key={index} className="word inline-block mr-2">
//         {word}
//       </span>
//     ));
//   };

//   return (
//     <section className="relative md:h-screen flex items-center justify-center overflow-hidden bg-blue-50">
//       <div className="absolute inset-0 z-0">
//         <Lottie className="w-full h-full object-cover opacity-30" animationData={heroBackground} loop={true} />
//       </div>
//       <div className="relative z-10 text-center text-gray-800 max-w-4xl mx-auto px-4">
//         <h1 ref={h1Ref} className="text-5xl font-bold mb-4 leading-relaxed">
//           {splitText("I Design Pet-Friendly Websites for Sitters and Care Providers")}
//         </h1>
//         <motion.p
//           className="text-xl mb-8"
//           initial={{ opacity: 0, y: -30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.2 }}
//         >
//           Helping pet care businesses create playful, engaging, and effective websites.
//         </motion.p>
//         <div className="flex justify-center space-x-4">
//           <motion.button
//             className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full transition duration-300"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             Get a Free Consultation
//           </motion.button>
//           <motion.button
//             className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 mr-4"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             Let's Revamp Your Site
//           </motion.button>
//         </div>
//       </div>
//       <div className="absolute bottom-0 left-0 w-1/4">
//         <Lottie animationData={petAnimation} loop={true} />
//       </div>

//     </section>
//   );
// };

// export default HeroSection;




// import React, { useEffect, useRef } from "react";
// import { motion } from "framer-motion";
// import Lottie from "lottie-react";
// import { gsap } from "gsap";
// import petAnimation from "./animations/petanimations.json";
// import heroBackground from "./animations/hero-background.json";

// const HeroSection = () => {
//   const h1Ref = useRef(null);
  
//   useEffect(() => {
//     const words = h1Ref.current.querySelectorAll(".word");

//     // GSAP drop and impact animation
//     gsap.fromTo(
//       words,
//       { opacity: 0, y: -200 }, // Start far above the screen
//       {
//         opacity: 1,
//         y: 0,
//         stagger: 0.1,
//         ease: "bounce.out", // Use bounce easing for impact effect
//         duration: 0.8
//       }
//     );
//   }, []);

//   // Function to split the text into individual words
//   const splitText = (text) => {
//     return text.split(" ").map((word, index) => (
//       <span key={index} className="word inline-block mr-2">
//         {word}
//       </span>
//     ));
//   };

//   return (
//     <section className="relative h-screen md:h-screen flex items-center justify-center overflow-hidden bg-blue-50">
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
//           ref={h1Ref}
//           className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold mb-4 md:leading-loose"
//         >
//           {splitText(
//             "I Design Pet-Friendly Websites for Sitters and Care Providers"
//           )}
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


import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import { gsap } from "gsap";
import petAnimation from "./animations/petanimations.json";
import heroBackground from "./animations/hero-background.json";

const HeroSection = () => {
 
  
   

    

  // Function to split the text into individual words

  return (
    <section className="relative min-h-[calc(100vh-64px)]  flex items-center justify-center overflow-hidden bg-blue-50">
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
        <h1
       
          className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold mb-4 leading-loose"
        >
          
            "I Design Pet-Friendly Websites for Sitters and Care Providers"
        
        </h1>

        {/* Responsive Subtext */}
        <motion.p
          className="text-lg xs:text-xl sm:text-2xl lg:text-3xl mb-8"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Helping pet care businesses create playful, engaging, and effective
          websites.
        </motion.p>

        {/* Call to Action Buttons */}
        <div className="flex justify-center flex-wrap space-x-4">
          <motion.button
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 sm:py-3 px-4 sm:px-6 text-sm sm:text-base rounded-full transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get a Free Consultation
          </motion.button>
          <motion.button
            className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 sm:py-3 px-4 sm:px-6 text-sm sm:text-base rounded-full transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Revamp Your Site
          </motion.button>
        </div>
      </div>

      {/* Pet Animation in the Bottom-Left */}
      <div className="absolute bottom-0 left-0 w-1/3 xs:w-1/4 sm:w-1/5 lg:w-1/6 xl:w-1/8">
        <Lottie animationData={petAnimation} loop={true} />
      </div>
    </section>
  );
};

export default HeroSection;
