
// import React from "react";
// import Lottie from "lottie-react";
// import websiteRevamp from "./animations/websiteRevamp.json";
// import AnimatedButton from "./AnimatedButton"; // Import the reusable button
// import { Link } from "react-router-dom";
// const CallToAction = () => {
//   return (
//     <div className="flex  bg-neutral-50 max-w-7xl xs:flex-col-reverse  md:flex-row items-center justify-around  mx-auto p-4 md:p-6 ">
//       {/* Left Section - Text */}
//       <div className="w-full md:w-1/2 mb-8 md:mb-0">
//         <h2 className="text-3xl sm:text-4xl md:text-5xl  font-bold text-gray-900 mb-4 text-center md:text-left">
//           Need help deciding the design for your website?
//         </h2>
//         <p className="text-lg sm:text-xl text-gray-600 mb-6 text-center md:text-left">
//           Answer a few simple questions and we’ll recommend a design that suits
//           your specific needs.
//         </p>
//         <div className="flex justify-center md:justify-start">
//           {/* <AnimatedButton className="bg-orange-500">
//             Help Me Choose
//           </AnimatedButton> */}
          
//           <Link to="/questionaire">
//             <AnimatedButton className="bg-orange-500">Help Me Choose</AnimatedButton>
//           </Link>
//         </div>
//       </div>

//       {/* Right Section - Image */}
//       <div className="w-full md:w-1/2">
//         <div className="w-full  ">
//           <Lottie
//             animationData={websiteRevamp}
//             loop={true}
//             className="w-full md:w-2/4 mx-auto h-auto rounded-lg"
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
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row bg-neutral-50 max-w-7xl items-center justify-around mx-auto p-4 md:p-8">
      {/* Left Section - Text */}
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
        <h2
          className="font-bold text-gray-900 mb-4 text-center md:text-left"
          style={{
            fontSize: "clamp(1.75rem, 4vw + 1rem, 3rem)", // Fluid typography for the heading
          }}
        >
          Need help deciding the design for your website?
        </h2>
        <p
          className="text-gray-600 mb-6 text-center md:text-left"
          style={{
            fontSize: "clamp(1rem, 2.5vw + 0.5rem, 1.5rem)", // Fluid typography for paragraph
          }}
        >
          Answer a few simple questions and we’ll recommend a design that suits
          your specific needs.
        </p>
        <div className="flex justify-center md:justify-start">
          <Link to="/questionaire">
            <AnimatedButton className="bg-orange-500 ">
              Help Me Choose
            </AnimatedButton>
          </Link>
        </div>
      </div>

      {/* Right Section - Animation */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end">
        <Lottie
          animationData={websiteRevamp}
          loop={true}
          className="w-full mx-auto h-auto rounded-lg"
        />
      </div>
    </div>
  );
};

export default CallToAction;
