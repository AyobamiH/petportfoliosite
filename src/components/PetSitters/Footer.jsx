
import React from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#portfolio"
                  className="hover:text-blue-300 transition duration-300"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-blue-300 transition duration-300"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="hover:text-blue-300 transition duration-300"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-blue-300 transition duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <p>Phone: (123) 456-7890</p>
            <p>Email: info@petwebdesign.com</p>
            <p>Address: 123 Pet Street, Pawsome City, PC 12345</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.2 }}
                className="text-2xl"
              >
                <FaFacebook />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.2 }}
                className="text-2xl"
              >
                <FaTwitter />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.2 }}
                className="text-2xl"
              >
                <FaInstagram />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.2 }}
                className="text-2xl"
              >
                <FaLinkedin />
              </motion.a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="mb-4">
              Stay updated with our latest pet web design tips!
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-grow px-4 py-2 rounded-l-md text-gray-900"
                aria-label="Email for newsletter"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; 2023 Pet Web Design Agency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
