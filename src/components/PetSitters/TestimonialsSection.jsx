import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules"; // Correct path for Pagination
import { Autoplay } from "swiper/modules";   // Correct path for Autoplay

import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    quote:
      "The Tail-Wagging Websites Design Factory transformed my pet sitting website into something truly special.",
    author: " Pamela Marbett",
    company: "Pamela's Pampered Pets, Washington USA.",
    image: "/images/8.png",
  },
  {
    quote:
      "We've seen a significant increase in web traffic. The design is amazing!",
    author: "John Smith",
    company: "Furry Friends Dog Walking",
    image: "/images/testimonial-2.jpg",
  },
  {
    quote: "Our clients love the new look of our site. Thank you, RAK Design!",
    author: "Emily Brown",
    company: "Kitty Care Cattery",
    image: "/images/testimonial-3.jpg",
  },
  {
    quote:
      "The Tail-Wagging Websites Design Factory transformed my pet sitting website into something truly special.",
    author: " Pamela Marbett",
    company: "Pamela's Pampered Pets, Washington USA.",
    image: "/images/8.png",
  },
  {
    quote:
      "We've seen a significant increase in web traffic. The design is amazing!",
    author: "John Smith",
    company: "Furry Friends Dog Walking",
    image: "/images/testimonial-2.jpg",
  },
  {
    quote: "Our clients love the new look of our site. Thank you, RAK Design!",
    author: "Emily Brown",
    company: "Kitty Care Cattery",
    image: "/images/testimonial-3.jpg",
  },
  {
    quote:
      "The Tail-Wagging Websites Design Factory transformed my pet sitting website into something truly special.",
    author: " Pamela Marbett",
    company: "Pamela's Pampered Pets, Washington USA.",
    image: "/images/8.png",
  },
  {
    quote:
      "We've seen a significant increase in web traffic. The design is amazing!",
    author: "John Smith",
    company: "Furry Friends Dog Walking",
    image: "/images/testimonial-2.jpg",
  },
  {
    quote: "Our clients love the new look of our site. Thank you, RAK Design!",
    author: "Emily Brown",
    company: "Kitty Care Cattery",
    image: "/images/testimonial-3.jpg",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-center text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          My Clients are Barking with Joy!
        </motion.h2>
        <Swiper
          modules={[Pagination, Autoplay]} // Initialize the modules here
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 5000 }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="bg-gray-100 rounded-lg p-6 shadow-lg h-full flex flex-col justify-between"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <p className="text-gray-600 mb-4 flex-grow">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="h-12 w-12 rounded-full mr-4"
                  />
                  <div>
                    <p className="text-gray-900 font-semibold">
                      {testimonial.author}
                    </p>
                    <p className="text-gray-600">{testimonial.company}</p>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialsSection;
