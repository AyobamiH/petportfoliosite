
import React from 'react';
import { motion } from 'framer-motion';
import { useSpring, animated } from 'react-spring';

const services = [
  {
    title: 'Pet Sitting',
    description: "Professional in-home pet care while you're away.",
    icon: '🐾',
  },
  {
    title: 'Dog Walking',
    description: 'Regular exercise and outdoor activities for your furry friends.',
    icon: '🐕',
  },
  {
    title: 'Grooming',
    description: 'Keep your pets looking and feeling their best with our grooming services.',
    icon: '✂️',
  },
  {
    title: 'Training',
    description: 'Behavioral training and obedience classes for all breeds.',
    icon: '🦮',
  },
];

const ServiceCard = ({ service, index }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const springProps = useSpring({
    transform: isHovered ? 'scale(1.05)' : 'scale(1)',
    boxShadow: isHovered ? '0 10px 20px rgba(0,0,0,0.2)' : '0 5px 10px rgba(0,0,0,0.1)',
  });

  return (
    <animated.div
      style={springProps}
      className="bg-white p-6 rounded-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        <div className="text-4xl mb-4">{service.icon}</div>
        <h3 className="text-xl font-semibold mb-2 text-purple-700">{service.title}</h3>
        <p className="text-gray-600">{service.description}</p>
      </motion.div>
    </animated.div>
  );
};

const ServicesSection = () => {
  return (
    <section className="py-16 bg-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl font-bold text-center text-purple-800 mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Anime-Inspired Pet Care Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;