
import React from "react";
import Lottie from "lottie-react";
import webDesign from "./animations/webDesign.json";
import websiteRevamp from "./animations/websiteRevamp.json";
import websiteOptimization from "./animations/websiteOptimization.json";
import seoAnimation from "./animations/seoVisibility.json";
import AnimatedButton from "./AnimatedButton";
import { FaCheck } from "react-icons/fa"; // Import check icon
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // Import framer-motion for animations

const servicePackages = [
  {
    id: 1,
    image: webDesign,
    title: "Website Design",
    description: "Custom designs tailored for pet care services.",
    features: [
      "Responsive design for all devices",
      "Custom branding and logos",
      "User-friendly navigation",
      "Integration with booking systems",
      "SEO-friendly structure",
      "High-quality images and graphics",
    ],
  },
  {
    id: 2,
    image: websiteRevamp,
    title: "Website Revamps",
    description: "Refresh outdated designs to improve performance and appeal.",
    features: [
      "Modern design updates",
      "Improved site speed and performance",
      "Enhanced user experience",
      "Mobile optimization",
      "Content restructuring",
      "SEO improvements",
    ],
  },
  {
    id: 3,
    image: websiteOptimization,
    title: "Website Optimization",
    description: "Ensure your site works perfectly on all devices.",
    features: [
      "Performance enhancements",
      "Mobile responsiveness",
      "SEO optimization",
      "Accessibility improvements",
      "Security updates",
      "Regular maintenance and updates",
    ],
  },
  {
    id: 4,
    image: seoAnimation,
    title: "SEO and Local Visibility",
    description: "Get found by more pet owners in your area.",
    features: [
      "Keyword research and optimization",
      "Local SEO strategies",
      "Google My Business setup",
      "Content creation and optimization",
      "Backlink building",
      "Analytics and reporting",
    ],
  },
];

const ServicePackages = () => {
  return (
    <section className="py-8 bg-white text-center md:text-left">
      <div className="max-w-7xl min-h-[calc(100vh-64px)] mx-auto px-4 sm:px-6 lg:px-8">
       

        <div className="max-w-7xl mx-auto text-center px-4">
           <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12">My Services </h2>
            <p className=" text-gray-600 mb-6">
              I understand the unique challenges of running a pet care business on your own. That's why I've created specialized service packages to help your pet care professionals shine online.
            </p>
        </div>
        {/* Service Cards Container */}
        <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-8">
          {servicePackages.map((service, index) => (
            <motion.div 
              key={index}
              whileHover={{ scale: 1.05 }} // Animation to scale up card on hover
              initial={{ opacity: 0, y: 50 }} // Initial animation state
              animate={{ opacity: 1, y: 0 }} // Animate into view
              transition={{ duration: 0.5, delay: index * 0.1 }} // Transition settings 
              className="flex flex-col h-full bg-white rounded-lg "
              >
              {/* Lottie Animation */}
              <div className="w-full mb-4 relative">
                <Lottie
                  animationData={service.image}
                  loop={true}
                  className="h-32 w-auto mx-auto object-cover"
                />
              </div>
              
              {/* Service Details with Full Shadow */}
              <div className="flex flex-col bg-white rounded-lg p-6 shadow-lg  flex-grow">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                <ul className="mb-4 space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="text-gray-600 text-sm sm:text-base flex items-center">
                      <FaCheck className="text-green-500 mr-2" /> {feature}
                    </li>
                  ))}
                </ul>

                {/* Contact Me Button with Link to Contact Page */}
                {/* <Link to="/contact" className="mx-auto">
                  <button className="px-6 py-3 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition duration-300">
                    Contact Me
                  </button>
                </Link> */}
                <Link to="/contact" className="mx-auto">
                  <AnimatedButton className="bg-orange-500">Contact Me</AnimatedButton>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicePackages;

