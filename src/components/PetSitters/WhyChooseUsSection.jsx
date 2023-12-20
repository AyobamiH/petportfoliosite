
import React from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import specializedAnimation from "./animations/petCare.json";
import engagingAnimation from "./animations/engaging.json";
import mobileAnimation from "./animations/mobilefirst.json";
import trackRecordAnimation from "./animations/proventrack.json";

const reasons = [
  { icon: specializedAnimation, text: "Specialized in Pet Care Industry" },
  { icon: engagingAnimation, text: "Engaging and Fun Animations" },
  { icon: mobileAnimation, text: "Mobile-First and SEO-Friendly" },
  {
    icon: trackRecordAnimation,
    text: "Proven Track Record with Pet Care Clients",
  },
];

const WhyChooseUsSection = () => {
  return (
    <section className="py-16 min-h-[calc(100vh-64px)] bg-stone-50 "> 
      <div className="w-full   max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-5xl font-bold text-gray-900 text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Why You Should Use My Services
        </motion.h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 w-full h-auto">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className=" bg-gray-50 flex flex-col items-center w-full h-auto px-6 py-8 mt-10 shadow-md rounded-lg hover:shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="mx-auto object-cover w-full h-auto rounded-tl-lg aspect-video">
                <Lottie animationData={reason.icon} loop={true} className="mb-4  w-full  aspect-video"/>
              </div>
              <p className="text-lg sm:text-xl text-gray-600 text-center">{reason.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
