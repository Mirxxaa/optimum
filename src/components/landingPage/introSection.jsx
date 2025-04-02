import React from "react";
import { motion } from "framer-motion";
import Logo from "../../assets/Logo/Logo_landing.png";
import RotatingText from "../../components/RotatingText";
import Particles from "../Particles";
import Iridescence from "../Iridescence";
import Marquee from "react-fast-marquee";
import { useTranslation } from "react-i18next";

const IntroSection = () => {
  const { t } = useTranslation();
  return (
    <div className="h-screen w-full flex flex-col justify-center ">
      <div className=" w-[80vw] h-screen flex items-center z-2  m-auto">
        <div className="w-full p-8 flex flex-col items-center justify-center ">
          <h1 className="md:text-3xl text-2xl lg:text-3xl mb-6 font-semibold text-center text-[#f4b41a]  ">
            {t("welcomeMessagage")}
          </h1>

          <p className=" lg:w-1/2 md:w1/2 w-full text-center mb-4 text-white">
            {t("welcomeText")}
          </p>

          <button className="text-left my-4 px-4 border-1 border-white hover:border-[#f4b41a] duration-200 text-white hover:bg-[#f4b41a] w-fit py-2 hover:text-[#143d59] font-semibold cursor-pointer">
            {t("exploreMore")}
          </button>
        </div>
      </div>
      <div className="w-full h-8 bg-white z-2 absolute bottom-20 flex items-center">
        <Marquee direction="reverse">
          <p className="text-sm mx-10 font-semibold">{t("trust")}</p>
          <p className="text-sm mx-10 font-semibold">|</p>
          <p className="text-sm mx-10 font-semibold">{t("reliability")}</p>
          <p className="text-sm mx-10 font-semibold">|</p>
          <p className="text-sm mx-10 font-semibold">{t("excellence")}</p>
          <p className="text-sm mx-10 font-semibold">|</p>
          <p className="text-sm mx-10 font-semibold">{t("trust")}</p>
          <p className="text-sm mx-10 font-semibold">|</p>
          <p className="text-sm mx-10 font-semibold">{t("reliability")}</p>
          <p className="text-sm mx-10 font-semibold">|</p>
          <p className="text-sm mx-10 font-semibold">{t("excellence")}</p>
          <p className="text-sm mx-10 font-semibold">|</p>
        </Marquee>
      </div>
      <div className="w-full h-screen absolute z-1 ">
        <Iridescence
          color={[0.0, 0.04, 0.2]}
          mouseReact={false}
          amplitude={0.5}
          speed={4.0}
        />
      </div>
    </div>
  );
};

export default IntroSection;
