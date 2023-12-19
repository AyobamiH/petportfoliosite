
import React from "react";
import ServicesSlider from "./ServicesSlider";
import ServicePackages from "./ServicePackages";
import CallToAction from "./CallToAction";
import TestimonialsSection from "./TestimonialsSection";
import PricingPlan from'./PricingPlan';
import petAnimation from "./animations/petanimations.json";
import Lottie from "lottie-react";
const ServicesPage = () => {
  return (
    <div className="bg-[#bf3f4f7]">
      {/* Header Section */}
      <section className="bg-white py-8">
        <div className="max-w-3xl mx-auto text-center px-4 md:px-6 lg:px-8">
          <h1 className="text-4xl  p-4 sm:text-5xl lg:text-6xl font-semibold text-gray-700 leading-snug mb-4">
            Website Design Services For Pet Care Professionals
            
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-2">
            Explore our professional pet care services designed to meet the needs of pet sitters, pet owners, and pet grooming businesses.
          </p>
        </div>
      </section>


      

      {/* Services Slider Section */}
      <section className="py-8 bg-[#bf3f4f7]">
        <div className="max-w-7xl mx-auto ">
          <ServicesSlider />
        
        </div>
      </section>

      {/* Service Packages Section */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto ">
          <ServicePackages />
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto ">
          <CallToAction />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <TestimonialsSection />
        </div>
      </section>

      {/* Pricing Plan Section */}
      <PricingPlan />

     
    </div>
  );
};

export default ServicesPage;
