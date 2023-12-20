
// import React from "react";
// import { motion } from "framer-motion";
// import Lottie from "lottie-react";
// import discoveryAnimation from "./animations/discoveryCallOne.json";
// import developmentAnimation from "./animations/designAndDevelopment.json";
// import launchAnimation from "./animations/launchnSupport.json";

// const steps = [
//   {
//     icon: discoveryAnimation,
//     title: "Discovery Call",
//     description: "I will discuss your needs and goals for your pet care website.",
//   },
//   {
//     icon: developmentAnimation,
//     title: "Design and Development",
//     description: "I will create a custom design and build your website with care.",
//   },
//   {
//     icon: launchAnimation,
//     title: "Launch and Support",
//     description:
//       "I will launch your site and provide ongoing support and maintenance.",
//   },
// ];

// const ProcessSection = () => {
//   return (
//     <section className="py-16 bg-gray-100">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.h2
//           className="text-5xl font-bold text-gray-900 text-center mb-12"
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           viewport={{ once: true }}
//         >
//           My web design process
//         </motion.h2>
//         <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
//           {steps.map((step, index) => (
//             <motion.div
//               key={index}
//               className="bg-white rounded-lg shadow-lg p-6"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               viewport={{ once: true }}
//             >
//               <div className="h-auto w-42 mx-auto mb-4">
//                 <Lottie animationData={step.icon} loop={true} />
//               </div>
//               <h3 className="text-xl font-semibold text-gray-900 text-center mb-2">
//                 {step.title}
//               </h3>
//               <p className="text-gray-600 text-center">{step.description}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProcessSection;


import React from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import discoveryAnimation from "./animations/discoveryCallOne.json";
import developmentAnimation from "./animations/designAndDevelopment.json";
import launchAnimation from "./animations/launchnSupport.json";

const steps = [
  {
    icon: discoveryAnimation,
    title: "Discovery Call",
    description: "I will discuss your needs and goals for your pet care website.",
  },
  {
    icon: developmentAnimation,
    title: "Design and Development",
    description: "I will create a custom design and build your website with care.",
  },
  {
    icon: launchAnimation,
    title: "Launch and Support",
    description:
      "I will launch your site and provide ongoing support and maintenance.",
  },
];

const ProcessSection = () => {
  return (
    <section className="py-16 bg-white "> {/* Adjusted background to white */}
      <div className="w-full  min-h-[calc(100vh-64px)]  max-w-7xl lg:px-8 mx-auto my-12 px-6 py-6 mb-12">
        {/* Title Section */}
        <motion.h2 
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          My Web Design Process
        </motion.h2>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8  ">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 mt-10 rounded-lg shadow-lg p-6 flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Icon / Animation Section */}
              <div className="w-56 h-auto mx-auto mb-6">
                <Lottie animationData={step.icon} loop={true} />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-center text-lg sm:text-xl">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
