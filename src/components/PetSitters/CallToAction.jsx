// import websiteRevamp from "./animations/websiteRevamp.json";
// import React from "react";
// import AnimatedButton from "./AnimatedButton"; // Import the reusable button
// import Lottie from "lottie-react";
// const CallToAction = () => {
//   return (
//     <div className="flex items-center justify-around max-w-7xl h-[80vh]  mx-auto my-12 p-6 mt-12">
//       {/* Left Section - Text */}
//       <hr/>
//       <div className="w-1/2">
//         <h2 className="text-5xl font-bold text-gray-900 mb-4">
//           Need help deciding the design for your website?
//         </h2>
//         <p className="text-xl text-gray-600 mb-6">
//           Answer a few simple questions and we’ll recommend a design that suits
//           your specific needs.
//         </p>
        
//         <AnimatedButton className="bg-orange-500">
//         Help Me Choose
//       </AnimatedButton>
//       </div>

//       {/* Right Section - Image */}
//       <div className="w-1/2">
//         {/* <img
//           src="https://via.placeholder.com/600x400"
//           alt="AI PC"
//           className="w-full h-auto rounded-lg shadow-lg"
//         /> */}
//         <div className=" mx-auto  w-full rounded-tl-lg  ">
//                 <Lottie animationData={websiteRevamp} loop={true} className="w-full h-auto rounded-lg shadow-lg" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CallToAction;
// import React from "react";
// import Lottie from "lottie-react";
// import websiteRevamp from "./animations/websiteRevamp.json";
// import AnimatedButton from "./AnimatedButton"; // Import the reusable button

// const CallToAction = () => {
//   return (
//     <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl h-auto md:h-[80vh] mx-auto my-12 p-4 md:p-6">
//       {/* Left Section - Text */}
//       <div className="w-full md:w-1/2 mb-8 md:mb-0">
//         <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center md:text-left">
//           Need help deciding the design for your website?
//         </h2>
//         <p className="text-lg sm:text-xl text-gray-600 mb-6 text-center md:text-left">
//           Answer a few simple questions and we’ll recommend a design that suits
//           your specific needs.
//         </p>
//         <div className="flex justify-center md:justify-start">
//           <AnimatedButton className="bg-orange-500">
//             Help Me Choose
//           </AnimatedButton>
//         </div>
//       </div>

//       {/* Right Section - Image */}
//       <div className="w-full md:w-1/2">
//         <div className="w-full mx-auto rounded-lg shadow-lg">
//           <Lottie
//             animationData={websiteRevamp}
//             loop={true}
//             className="w-full h-auto rounded-lg"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CallToAction;


import React from "react";
import Lottie from "lottie-react";
import websiteRevamp from "./animations/websiteRevamp.json";
import AnimatedButton from "./AnimatedButton"; // Import the reusable button

const CallToAction = () => {
  return (
    <div className="flex  bg-neutral-50 max-w-7xl xs:flex-col-reverse  md:flex-row items-center justify-around   min-h-[calc(100vh-64px)] mx-auto p-4 md:p-6 mt-12">
      {/* Left Section - Text */}
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
        <h2 className="text-3xl sm:text-4xl md:text-5xl  font-bold text-gray-900 mb-4 text-center md:text-left">
          Need help deciding the design for your website?
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 mb-6 text-center md:text-left">
          Answer a few simple questions and we’ll recommend a design that suits
          your specific needs.
        </p>
        <div className="flex justify-center md:justify-start">
          <AnimatedButton className="bg-orange-500">
            Help Me Choose
          </AnimatedButton>
        </div>
      </div>

      {/* Right Section - Image */}
      <div className="w-full md:w-1/2">
        <div className="w-full  ">
          <Lottie
            animationData={websiteRevamp}
            loop={true}
            className="w-full mx-auto h-auto rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
