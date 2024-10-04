import React from 'react';
import { FaCheck } from 'react-icons/fa';
import AnimatedButton from './AnimatedButton'
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // Import framer-motion for animations


const PricingPlan = () => {
  const plans = [
    {
      name: 'Basic Plan',
      price: '$500/Project',
      description: 'Personal Pet Care Portfolios or Small Pet Care Websites',
      features: [
        'Responsive Design: Ensure the site works across all devices',
        'Mobile Friendly: Optimized for mobile users',
        'Basic SEO Setup: Simple keyword and on-page optimization to make the site searchable',
        'User-friendly Navigation: Easy for visitors to navigate',
        'Integration with Basic Booking System (if needed): Simple calendar or form integration',
        'High-quality Images and Graphics: Basic-level design elements for aesthetic appeal',
      ],
    },
    {
      name: 'Premium Plan',
      price: '$1000/Project',
      description: 'Small to Medium Pet Care Businesses',
      features: [
        'Custom Design: Fully tailored to your brand and business',
        'Mobile Optimization: Advanced mobile responsiveness for smooth experience',
        'Advanced SEO Setup: Improved keyword optimization, metadata, and local SEO integration',
        'Enhanced Performance and Speed: Improved site load times and performance',
        'Content Restructuring: Organized content for better user flow and SEO rankings',
        'Security Updates: Basic-level security implementation to protect the website',
        'Integration with Booking Systems: More robust appointment scheduling system',
        'Custom Branding and Logos: Tailored to your pet care business',
      ],
    },
    {
      name: 'Corporate Plan',
      price: '$1500/Project',
      description: 'Large Pet Care Businesses with Multi-Location Services',
      features: [
        'Custom Design & Branding: Fully customized to reflect your unique branding',
        'Full SEO Optimization: Local SEO, keyword research, backlink building, and Google My Business integration',
        'Performance Improvements: Advanced speed and performance optimization',
        'Mobile Responsiveness & Optimization: Cutting-edge techniques for flawless mobile performance',
        'Advanced Security: Full-scale updates ensuring data and privacy protection',
        'Accessibility Improvements: Enhanced to meet web standards (WCAG compliance)',
        'Regular Maintenance and Updates: Post-launch support and regular maintenance',
        'Integration with Advanced Booking Systems: Full-featured booking system with notifications, reminders, etc.',
      ],
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-lg text-orange-500 font-semibold mb-2">
          Pricing Plan
        </h2>
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          I Make Creating Websites Simple And Faster...
        </h3>
        <p className="text-lg text-gray-600 mb-10">
          Choose the perfect plan that suits your needs.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div 
              whileHover={{ scale: 1.05 }} // Animation to scale up card on hover
              initial={{ opacity: 0, y: 50 }} // Initial animation state
              animate={{ opacity: 1, y: 0 }} // Animate into view
              transition={{ duration: 0.5, delay: index * 0.1 }} // Transition settings 
              key={index} className="p-8 bg-white rounded-lg shadow-lg flex flex-col h-full">
              <h4 className="text-2xl font-bold mb-2">{plan.name}</h4>
              <p className="text-4xl font-bold text-orange-500 mb-4">{plan.price}</p>
              <p className="mb-4 font-bold">{plan.description}</p>
              <ul className="text-left space-y-2 mb-4 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <FaCheck className="text-green-500 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
                <Link to="/choose">
                    <AnimatedButton className="bg-orange-500">Choose Plan</AnimatedButton>
                </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlan;