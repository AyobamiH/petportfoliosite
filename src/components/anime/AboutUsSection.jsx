/**
 * This code was generated by Builder.io.
 */
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutUsSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  React.useEffect(() => {
    const section = sectionRef.current;
    gsap.fromTo(
      section.querySelectorAll(".gsap-fade-in"),
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="py-16 bg-purple-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-4xl font-bold text-center text-purple-800 mb-12 gsap-fade-in"
          style={{ y }}
        >
          Our Story: Anime-Inspired Pet Care
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div className="gsap-fade-in">
            <img
              src="/images/anime-pet-caretakers.jpg"
              alt="Anime-style pet caretakers"
              className="rounded-lg shadow-lg"
            />
          </motion.div>
          <motion.div className="space-y-6 gsap-fade-in">
            <p className="text-lg text-purple-700">
              At PetAnime, we combine our love for pets with the vibrant world
              of anime to create unique, engaging websites for pet care
              businesses.
            </p>
            <p className="text-lg text-purple-700">
              Our team of passionate designers and developers work tirelessly to
              bring your pet care services to life with colorful characters and
              playful animations.
            </p>
            <p className="text-lg text-purple-700">
              We believe that every pet deserves to be treated like a star, and
              every pet care business deserves a website that reflects their
              dedication and love.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
