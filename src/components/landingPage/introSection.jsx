import React from "react";
import { motion } from "framer-motion";
import Logo from "../../assets/Logo/LOGO_MAIN.png";
import RotatingText from "../../components/RotatingText";
import Particles from "../Particles";
const IntroSection = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-gradient-to-b from-[#1974B8] to-blue-700 text-white">
      <div className="w-full h-screen absolute">
        <Particles
          particleColors={["#1974B8", "#1974B8"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="flex flex-col items-center justify-center"
      >
        {/* Replace with your actual logo */}
        <div className="lg:w-120 sm:w-40 w-80 m-8 flex items-center justify-center">
          <img src={Logo} alt="" />
        </div>

        <motion.div className="flex items-center gap-1 transition-all duration-300 ease-in-out">
          <RotatingText
            texts={["Development", "Professional", "Services"]}
            mainClassName="px-2 sm:px-2 md:px-3 text-white text-black text-4xl overflow-hidden  transition-all duration-300 ease-in-out py-0.5 sm:py-1 md:py-2 justify-center font-semibold rounded-lg"
            staggerFrom={"last"}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2000}
          />
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-0 w-full flex justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <div className="flex flex-col items-center">
          <p className="mb-2 text-white/70">Scroll down to learn more</p>
          <svg
            className="w-6 h-6 animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            ></path>
          </svg>
        </div>
      </motion.div>
    </div>
  );
};

export default IntroSection;
