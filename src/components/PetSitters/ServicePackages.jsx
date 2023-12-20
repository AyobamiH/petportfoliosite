
import React from "react";
import AnimatedButton from "./AnimatedButton"; // Import the reusable button
import Lottie from "lottie-react";
import webDesign from "./animations/webDesign.json";
import websiteRevamp from "./animations/websiteRevamp.json";
import websiteOptimization from "./animations/websiteOptimization.json";
import seoAnimation from "./animations/seoVisibility.json";

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
      "High-quality images and graphics"
    ]
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
      "SEO improvements"
    ]
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
      "Regular maintenance and updates"
    ]
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
      "Analytics and reporting"
    ]
  }
];

const ServicePackages = () => {
  return (
    <>


    <section className="py-16 bg-white text-center md:text-left">
      <div className="max-w-7xl min-h-[calc(100vh-64px)] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12">My Service Packages</h2>
        
        {/* Service Cards Container */}
        <div className="flex flex-wrap -mx-4">
          {servicePackages.map((service, index) => (
            <div key={index} className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 py-8">
              <div className="flex flex-col h-full bg-white rounded-lg p-6 shadow-lg">
                {/* Lottie Animation */}
                <div className="w-full mb-4">
                  <Lottie
                    animationData={service.image}
                    loop={true}
                    className="h-auto mb-4 object-cover w-full rounded-tl-lg aspect-video"
                  />
                </div>
                
                {/* Service Details */}
                <div className="bg-white rounded-lg p-6">
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <ul className="mb-4">
                    {service.features.map((feature, index) => (
                      <li key={index} className="text-gray-600 text-sm sm:text-base">
                        • {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Placeholder price */}
                  <p className="text-lg font-bold text-gray-800 mb-4">Price: TBD</p>

                  {/* Learn More Button */}
                  <AnimatedButton>
                    Learn More
                  </AnimatedButton>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default ServicePackages;
