// import React from "react";
// import Lottie from "lottie-react";
// import contactImage from './animations/blackPaw.json'; // Assuming you have a Lottie animation or an image here
// import "tailwindcss/tailwind.css"; // Assuming you have Tailwind CSS installed

// const ContactPage = () => {
//   return (
//     <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center max-w-7xl mx-auto p-6 lg:p-12">
//       {/* Left Section - Image */}
//       <div className="w-full lg:w-1/2 flex justify-center">
//         <Lottie
//           animationData={contactImage} // Use your Lottie animation or image here
//           loop={true}
//           className="w-full max-w-sm md:max-w-md lg:max-w-lg"
//         />
//       </div>

//       {/* Right Section - Contact Form */}
//       <div className="w-full lg:w-1/2 mt-10 lg:mt-0">
//         <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center lg:text-left">
//           Contact Us
//         </h2>
//         <p className="text-lg sm:text-xl text-gray-600 mb-8 text-center lg:text-left">
//           Connect with us. We'd love to hear from you.
//         </p>

//         <form className="space-y-6">
//           <div>
//             <label
//               htmlFor="name"
//               className="block text-lg font-medium text-gray-700"
//             >
//               Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               placeholder="Your Full Name"
//               className="mt-2 block w-full px-4 py-3 text-gray-900 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-opacity-50 focus:ring-orange-500"
//             />
//           </div>

//           <div>
//             <label
//               htmlFor="email"
//               className="block text-lg font-medium text-gray-700"
//             >
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               placeholder="Your Email Address"
//               className="mt-2 block w-full px-4 py-3 text-gray-900 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-opacity-50 focus:ring-orange-500"
//             />
//           </div>

//           <div>
//             <label
//               htmlFor="message"
//               className="block text-lg font-medium text-gray-700"
//             >
//               Message
//             </label>
//             <textarea
//               id="message"
//               rows="4"
//               placeholder="How can we assist you?"
//               className="mt-2 block w-full px-4 py-3 text-gray-900 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-opacity-50 focus:ring-orange-500"
//             ></textarea>
//           </div>

//           <div className="text-center lg:text-left">
//             <button
//               type="submit"
//               className="px-8 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition duration-300"
//             >
//               Send
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ContactPage;

import AnimatedButton from "./AnimatedButton"
import React from "react"; 
import Lottie from "lottie-react";
import contactImage from './animations/blackPaw.json'; // Assuming you have a Lottie animation or an image here
import "tailwindcss/tailwind.css"; // Assuming you have Tailwind CSS installed

const ContactPage = () => {
  return (
    <div className="bg-white min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-6">Contact Us</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
        
        {/* Top Section with Logos */}
        <div className="flex justify-around mb-8">
          <img src="logo1.png" alt="Logo 1" className="w-20 opacity-50" />
          <img src="logo2.png" alt="Logo 2" className="w-20 opacity-50" />
          <img src="logo3.png" alt="Logo 3" className="w-20 opacity-50" />
          <img src="logo4.png" alt="Logo 4" className="w-20 opacity-50" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="p-6 bg-gray-100 rounded-lg shadow">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">Leave A Message</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
              
            </div>
            <form className="space-y-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email</label>
                  <input type="email" id="email" placeholder="Your Email" className="mt-2 block w-full px-4 py-3 text-gray-900 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-opacity-50 focus:ring-orange-500" />
                </div>
                <div className="flex-1">
                  <label htmlFor="phone" className="block text-lg font-medium text-gray-700">Phone</label>
                  <input type="tel" id="phone" placeholder="Your Phone" className="mt-2 block w-full px-4 py-3 text-gray-900 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-opacity-50 focus:ring-orange-500" />
                </div>
              </div>
              
              <div>
                <label htmlFor="name" className="block text-lg font-medium text-gray-700">Name</label>
                <input type="text" id="name" placeholder="Your Full Name" className="mt-2 block w-full px-4 py-3 text-gray-900 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-opacity-50 focus:ring-orange-500" />
              </div>

              <div>
                <label htmlFor="message" className="block text-lg font-medium text-gray-700">Message</label>
                <textarea id="message" rows="4" placeholder="How can I assist you?" className="mt-2 block w-full px-4 py-3 text-gray-900 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-opacity-50 focus:ring-orange-500"></textarea>
              </div>
              <AnimatedButton className="bg-orange-500">
                Send Message
              </AnimatedButton>
              
            </form>
          </div>

          {/* Contact Details*/}
          <div className="p-6 bg-gray-100 rounded-lg shadow space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">Contact Information</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
              
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-800 text-lg font-bold">
                  📞
                </div>
                <p className="text-lg text-gray-700">
                  (+44) 07402342694
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-800 text-lg font-bold">
                  📧
                </div>
                <p className="text-lg text-gray-700">
                  heryourbarme@live.com
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-800 text-lg font-bold">
                  📍
                </div>
                <p className="text-lg text-gray-700">
                  Turners Gardens, Northampton.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Google Maps Section */}
        <div className="mt-12">
          <iframe
            title="Map Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24312.726164192864!2d-0.124625!3d51.5033245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604cb05d18a15%3A0xfafc19bc92b5d2e9!2sLondon%20Eye!5e0!3m2!1sen!2suk!4v1600000000000!5m2!1sen!2suk"
            width="100%"
            height="300"
            className="border-0 w-full rounded-lg shadow"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        
      </div>
    </div>
  );
};

export default ContactPage;
