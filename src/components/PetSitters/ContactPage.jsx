import React from "react";
import Lottie from "lottie-react";
import contactImage from './animations/blackPaw.json'; // Assuming you have a Lottie animation or an image here
import "tailwindcss/tailwind.css"; // Assuming you have Tailwind CSS installed

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center max-w-7xl mx-auto p-6 lg:p-12">
      {/* Left Section - Image */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <Lottie
          animationData={contactImage} // Use your Lottie animation or image here
          loop={true}
          className="w-full max-w-sm md:max-w-md lg:max-w-lg"
        />
      </div>

      {/* Right Section - Contact Form */}
      <div className="w-full lg:w-1/2 mt-10 lg:mt-0">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center lg:text-left">
          Contact Us
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 mb-8 text-center lg:text-left">
          Connect with us. We'd love to hear from you.
        </p>

        <form className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-lg font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your Full Name"
              className="mt-2 block w-full px-4 py-3 text-gray-900 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-opacity-50 focus:ring-orange-500"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-lg font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Your Email Address"
              className="mt-2 block w-full px-4 py-3 text-gray-900 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-opacity-50 focus:ring-orange-500"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-lg font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              placeholder="How can we assist you?"
              className="mt-2 block w-full px-4 py-3 text-gray-900 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-opacity-50 focus:ring-orange-500"
            ></textarea>
          </div>

          <div className="text-center lg:text-left">
            <button
              type="submit"
              className="px-8 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition duration-300"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
