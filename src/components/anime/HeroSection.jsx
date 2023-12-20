
import React from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import petMascotAnimation from "./animations/petMascot.json";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-blue-200 to-green-200">
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <img
          src="/images/anime-pet.jpg"
          alt="Bright and colorful anime landscape"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="relative z-10 text-center text-gray-800 max-w-4xl mx-auto px-4">
        <motion.h1
          className="text-5xl font-bold mb-4 text-purple-800"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Welcome to PetAnime: Where Your Pets Get the VIP Anime Treatment!
        </motion.h1>
        <motion.p
          className="text-xl mb-8 text-purple-600"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          We design tail-wagging websites for pet sitters that are playful,
          engaging, and effective!
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <motion.button
            className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 mr-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get a Free Consultation
          </motion.button>
          <motion.button
            className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-6 rounded-full transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Revamp Your Site
          </motion.button>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-0 left-0 w-1/3"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <Lottie animationData={petMascotAnimation} loop={true} />
      </motion.div>
    </section>
  );
};

export default HeroSection;
