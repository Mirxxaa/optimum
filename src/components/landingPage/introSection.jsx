import React from "react";
import { motion } from "framer-motion";
import Logo from "../../assets/Logo/Logo_landing.png";
import RotatingText from "../../components/RotatingText";
import Particles from "../Particles";
import Iridescence from "../Iridescence";
import Marquee from "react-fast-marquee";

const IntroSection = () => {
  return (
    <div className="h-screen w-full flex flex-col justify-center ">
      <div className=" w-[80vw] h-screen flex items-center z-2  m-auto">
        <div className="w-full p-8 flex flex-col items-center justify-center ">
          <h1 className="md:text-3xl text-2xl lg:text-3xl mb-6 font-semibold text-center text-white  ">
            Navigating Success in the Saudi Market & Beyond
          </h1>

          <p className=" lg:w-1/2 md:w1/2 w-full text-center mb-4 text-white">
            At Optimum Business Solutions, we specialize in helping businesses
            thrive in the dynamic Saudi Arabian market and expand globally.
          </p>

          <button className="text-left my-4 px-4 border-1 border-white duration-200 text-white hover:bg-white w-fit py-2 hover:text-[#1974B7] font-semibold cursor-pointer">
            Explore more
          </button>
        </div>
      </div>
      <div className="w-full h-8 bg-white z-2 absolute bottom-20 flex items-center">
        <Marquee direction="reverse">
          <p className="text-sm mx-10 font-semibold">Trust</p>
          <p className="text-sm mx-10 font-semibold">|</p>
          <p className="text-sm mx-10 font-semibold">Reliability</p>
          <p className="text-sm mx-10 font-semibold">|</p>
          <p className="text-sm mx-10 font-semibold">Excellence</p>
          <p className="text-sm mx-10 font-semibold">|</p>
          <p className="text-sm mx-10 font-semibold">Trust</p>
          <p className="text-sm mx-10 font-semibold">|</p>
          <p className="text-sm mx-10 font-semibold">Reliability</p>
          <p className="text-sm mx-10 font-semibold">|</p>
          <p className="text-sm mx-10 font-semibold">Excellence</p>
          <p className="text-sm mx-10 font-semibold">|</p>
        </Marquee>
      </div>
      <div className="w-full h-screen absolute z-1 ">
        <Iridescence
          color={[0, 0, 0.8]}
          mouseReact={true}
          amplitude={0.1}
          speed={1.0}
        />
      </div>
    </div>
  );
};

export default IntroSection;
