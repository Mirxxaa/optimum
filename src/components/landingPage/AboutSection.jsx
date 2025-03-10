import React from "react";
import { motion } from "framer-motion";
import BG from "../../assets/Images/about_us.png";

const AboutSection = () => {
  return (
    <div>
      <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-[#D7F0FF] to-white overflow-hidden">
        <div className="flex flex-col md:flex-row items-center w-full md:w-[80vw] px-6 md:px-16 py-10 relative z-10 text-white">
          {/* Left Content */}
          <div className="w-full md:w-1/2 text-center md:text-left mb-6 md:mb-0">
            <motion.h2
              className="text-3xl md:text-4xl text-[#1974B8] font-semibold mb-4 tracking-wider"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              About Us
            </motion.h2>

            <motion.p
              className="text-base md:text-lg text-black leading-relaxed"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Established in 2021, Optimum Business Solutions has positioned
              itself as a leading provider of professional and business services
              in the Kingdom of Saudi Arabia (KSA) and beyond. We serve a
              diverse portfolio of over 15 clients, spanning various industries.
            </motion.p>

            <motion.button
              className="px-4 py-2 mt-6 text-sm md:text-base font-semibold text-[#1974B8] bg-transparent border-2 border-[#1974B8] rounded-lg  transition-all hover:bg-[#BBA14E] hover:border-[#BBA14E] cursor-pointer hover:text-white focus:outline-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              onClick={() => alert("Learn More button clicked!")}
            >
              Learn More
            </motion.button>
          </div>

          {/* Right Side Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <motion.img
              src={BG}
              alt="About Us"
              className="w-full max-w-[400px] h-auto "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            />
          </div>
        </div>
      </div>
      <div>
        <div className="w-full h-20"></div>
      </div>
    </div>
  );
};

export default AboutSection;
