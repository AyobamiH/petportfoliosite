
// import React from "react";
// import { motion } from "framer-motion";
// import Lottie from "lottie-react";
// import specializedAnimation from "./animations/nicheFocused.json";
// import featuresAnimation from "./animations/features.json";
// import engagingAnimation from "./animations/engaging.json";
// import seoAnimation from "./animations/seoVisibility.json";
// import trustAnimation from "./animations/trustanimation.json";
// import scalabilityAnimation from "./animations/scalable.json";

// const reasons = [
//   { 
//     icon: specializedAnimation, 
//     text: "Niche-Focused Design: I create pet care website designs that incorporate user-friendly booking systems, pet profiles, and testimonials, ensuring your clients trust and choose you." 
//   },
//   { 
//     icon: featuresAnimation, 
//     text: "Pet-Focused Features: I design websites with dedicated sections for pet profiles, where your clients can easily upload their pets’ care preferences and medical details, making your services more credible and professional." 
//   },
//   { 
//     icon: engagingAnimation, 
//     text: "Emotionally Engaging Design: I design pet care websites that feature high-quality imagery and storytelling, building an emotional connection with pet owners and setting your business apart from traditional designs." 
//   },
//   { 
//     icon: seoAnimation, 
//     text: "SEO and Local Optimization: I optimise your pet care website design for local search terms like 'pet sitters near me', ensuring your business ranks high and attracts more clients online." 
//   },
//   { 
//     icon: trustAnimation, 
//     text: "Trust and Credibility Tools: I include easy-to-use review systems, certification badges, and safety protocols in your pet care website to build trust and credibility with pet owners." 
//   },
//   { 
//     icon: scalabilityAnimation, 
//     text: "Scalable and Supportive: I provide scalable pet care website designs with appointment management and client databases, ensuring your website evolves as your business grows." 
//   },
// ];

// const WhyChooseUsSection = () => {
//   return (
//     <section className="py-10 xs:py-12 sm:py-16 min-h-[calc(100vh-64px)] bg-stone-50"> 
//       <div className="w-full max-w-7xl mx-auto px-4 xs:px-6 sm:px-8">
//         <motion.h2
//           className="text-3xl xs:text-4xl sm:text-5xl font-bold text-gray-900 text-center mb-6 xs:mb-8 sm:mb-12"
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           viewport={{ once: true }}
//         >
//           Why You Should Choose Us
//         </motion.h2>

//         {/* New introduction paragraph */}
//         <motion.p
//           className="text-base xs:text-lg sm:text-xl text-gray-700 text-center max-w-2xl mx-auto mb-8 xs:mb-10 sm:mb-12"
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           viewport={{ once: true }}
//         >
//           I specialize in web design for pet care professionals. I create websites that reflect your passion for animals, help you stand out, and connect deeply with pet owners. Let your online presence showcase the trust and care you bring to your work.
//         </motion.p>

//         {/* Responsive grid with dynamic column adjustment based on screen size */}
//         <div className="grid grid-cols-1 gap-6 xs:gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-3 w-full h-auto">
//           {reasons.map((reason, index) => {
//             const [heading, description] = reason.text.split(":");
//             return (
//               <motion.div
//                 key={index}
//                 className="bg-gray-50 flex flex-col items-center w-full h-auto px-4 xs:px-6 sm:px-8 py-6 xs:py-8 sm:py-10 mt-6 xs:mt-8 sm:mt-10 shadow-md rounded-lg hover:shadow-lg"
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//               >
//                 <div className="mx-auto object-cover w-full h-auto rounded-tl-lg aspect-video">
//                   <Lottie animationData={reason.icon} loop={true} className="mb-4 w-full aspect-video" />
//                 </div>
//                 <h3 className="text-base xs:text-lg sm:text-xl text-gray-900 font-semibold text-center">{heading}</h3>
//                 <p className="text-sm xs:text-md sm:text-lg text-gray-600 text-center mt-2">{description}</p>
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhyChooseUsSection;
import React from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import specializedAnimation from "./animations/nicheFocused.json";
import featuresAnimation from "./animations/features.json";
import engagingAnimation from "./animations/engaging.json";
import seoAnimation from "./animations/seoVisibility.json";
import trustAnimation from "./animations/trustanimation.json";
import scalabilityAnimation from "./animations/scalable.json";

const reasons = [
  { 
    icon: specializedAnimation, 
    text: "Niche-Focused Design: I create pet care website designs that incorporate user-friendly booking systems, pet profiles, and testimonials, ensuring your clients trust and choose you." 
  },
  { 
    icon: featuresAnimation, 
    text: "Pet-Focused Features: I design websites with dedicated sections for pet profiles, where your clients can easily upload their pets’ care preferences and medical details, making your services more credible and professional." 
  },
  { 
    icon: engagingAnimation, 
    text: "Emotionally Engaging Design: I design pet care websites that feature high-quality imagery and storytelling, building an emotional connection with pet owners and setting your business apart from traditional designs." 
  },
  { 
    icon: seoAnimation, 
    text: "SEO and Local Optimization: I optimise your pet care website design for local search terms like 'pet sitters near me', ensuring your business ranks high and attracts more clients online." 
  },
  { 
    icon: trustAnimation, 
    text: "Trust and Credibility Tools: I include easy-to-use review systems, certification badges, and safety protocols in your pet care website to build trust and credibility with pet owners." 
  },
  { 
    icon: scalabilityAnimation, 
    text: "Scalable and Supportive: I provide scalable pet care website designs with appointment management and client databases, ensuring your website evolves as your business grows." 
  },
];

const WhyChooseUsSection = () => {
  return (
    <section className="py-10 xs:py-12 sm:py-16 min-h-[calc(100vh-64px)] bg-stone-50"> 
      <div className="w-full max-w-7xl mx-auto px-4 xs:px-6 sm:px-8">
        <motion.h2
          className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 text-center mb-6 xs:mb-8 sm:mb-12"
          style={{
            fontSize: 'clamp(1.5rem, 3vw + 1rem, 3.5rem)' // Fluid scaling font size
          }}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Why You Should Choose Us
        </motion.h2>

        {/* New introduction paragraph */}
        <motion.p
          className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-700 text-center max-w-2xl mx-auto mb-8 xs:mb-10 sm:mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          I specialize in web design for pet care professionals. I create websites that reflect your passion for animals, help you stand out, and connect deeply with pet owners. Let your online presence showcase the trust and care you bring to your work.
        </motion.p>

        {/* Responsive grid with dynamic column adjustment based on screen size */}
        <div className="grid grid-cols-1 gap-6 xs:gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-3 w-full h-auto">
          {reasons.map((reason, index) => {
            const [heading, description] = reason.text.split(":");
            return (
              <motion.div
                key={index}
                className="bg-gray-50 flex flex-col items-center w-full h-auto px-4 xs:px-6 sm:px-8 py-6 xs:py-8 sm:py-10 mt-6 xs:mt-8 sm:mt-10 shadow-md rounded-lg hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="mx-auto object-cover w-full h-auto rounded-tl-lg aspect-video">
                  <Lottie animationData={reason.icon} loop={true} className="mb-4 w-full aspect-video" />
                </div>
                <h3 className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-900 font-semibold text-center mt-2">
                  {heading}
                </h3>
                <p className="text-xs xs:text-sm sm:text-md md:text-lg text-gray-600 text-center mt-2 leading-relaxed">
                  {description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
