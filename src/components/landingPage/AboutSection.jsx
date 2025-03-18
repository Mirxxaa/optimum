import React, { useTransition } from "react";
import { motion } from "framer-motion";
import BG from "../../assets/Images/about_us.png";
import "../../styles/AboutSection.css";
import { useTranslation } from "react-i18next";

const AboutSection = () => {
  const { t } = useTranslation();
  return (
    <div className="">
      <div className="w-full lg:h-[80vh] md:h-[80vh] bottom-0 sm:h-[80vh] h-[80vh] lg:absolute md:absolute sm:absolute lg:rounded-t-4xl md:rounded-t-4xl sm:rounded-t-4xl flex  justify-center bg-white overflow-hidden">
        <div className="flex flex-col md:flex-row items-center gap-10 w-full md:w-[80vw] px-6 md:px-16 py-10 relative z-10 text-white">
          {/* Left Content */}
          <div className="w-full  md:w-1/2 text-center md:text-left mb-6 md:mb-0">
            <motion.h2
              className="text-xl md:text-4xl lg:text-4xl sm:text-lg mt-10  text-blue-700 font-semibold mb-4 tracking-wider"
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {t("aboutOptimum")}
            </motion.h2>

            <motion.p
              className=" text-sm lg:text-lg md:text-lg sm:text-sm text-black text-justify leading-relaxed"
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {t("aboutOptimumDescription")}
            </motion.p>

            <motion.button
              className="px-4 py-2 mt-6 text-sm md:text-base font-semibold text-blue-700 bg-transparent border-2 border-blue-700   transition-all hover:bg-[#BBA14E] hover:border-[#BBA14E] cursor-pointer hover:text-white focus:outline-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              onClick={() => alert("Learn More button clicked!")}
            >
              {t("learnMore")}
            </motion.button>
          </div>

          {/* Right Side Image */}
          <div className="w-full md:w-1/2  flex justify-center">
            <motion.img
              src={BG}
              alt="About Us"
              className="lg:w-full lg:max-w-[300px] md:w-1/2 sm:w-[200px] w-[200px]  h-auto "
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
