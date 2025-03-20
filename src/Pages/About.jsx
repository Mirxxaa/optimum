// src/Pages/Home.jsx
import React from "react";
import OurVisionPic from "../assets/Images/OurVision.png";
import { useLocation } from "react-router-dom";
import Mission from "../assets/Images/Mission.png";
import Values from "../assets/Images/Values.png";
import { useNavigate } from "react-router-dom";
import { CgSearchFound } from "react-icons/cg";
import { FaStar } from "react-icons/fa";
import { PiBuildingsFill } from "react-icons/pi";
import Saudization from "../assets/Images/Saudization.jpeg";
import { motion } from "framer-motion";
import FooterSection from "../components/landingPage/FooterSection";
import Iridescence from "../components/Iridescence";
import AutoCounter from "../components/AutoCounter";
import ClientCounter from "../components/ClientCounter";
import GrowthCounter from "../components/GrowthCounter";
import SaudiComplaince from "../assets/Images/Saudi_complaince.png";
import FinanceIcon from "../assets/Icons/FinanceIcon.png";
import RetailIcon from "../assets/Icons/RetailIcon.png";
import HospitalityIcon from "../assets/Icons/Hospitality.png";
import HealthCareIcon from "../assets/Icons/HealthCare.png";
import ConstructionIcon from "../assets/Icons/ConstructionIcon.png";
import ITIcon from "../assets/Icons/ITIcon.png";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="w-full lg:h-[80vh] h-[70vh]  bg-white absolute bottom-0 rounded-t-4xl">
      <div className="w-full h-screen z-[-100] absolute bottom-0">
        <Iridescence
          color={[0, 0, 0.8]}
          mouseReact={true}
          amplitude={0.1}
          speed={1.0}
        />
      </div>
      {/* Our Company Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="lg:w-[80vw] w-full my-20 items-center justify-center m-auto flex flex-col"
      >
        <div className="">
          <div className=" px-4 items-center  flex flex-col justify-center text-black">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex gap-10 items-center mb-4"
            >
              <h1 className="lg:text-4xl text-2xl font-bold text-blue-700">
                {t("aboutOptimum")}
              </h1>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center lg:text-xl w-full lg:w-1/2 sm:w-full md:w-full "
            >
              {t("aboutOptimumDescription")}
            </motion.p>
          </div>
          <div className="lg:flex justify-between text-black/70 gap-18 text-center mt-8">
            <div className=" p-6 rounded-2xl flex flex-col  justify-center items-center ">
              <div className="text-3xl bg-blue-500 p-6 text-white rounded-full my-8">
                <CgSearchFound />
              </div>

              <p>{t("about1")}</p>
            </div>
            <div className=" p-6 rounded-2xl flex flex-col justify-center items-center">
              <div className="text-3xl bg-blue-500 p-6 text-white rounded-full my-8">
                <FaStar />
              </div>
              <p>{t("about2")}</p>
            </div>
            <div className="  p-6 rounded-2xl flex flex-col justify-center items-center">
              <div className="text-3xl bg-blue-500 p-6 text-white rounded-full my-8">
                <PiBuildingsFill />
              </div>
              <p>{t("about3")}</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Our Vision - Mission - Value Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="h-auto my-16 p-8 flex items-center justify-center bg-white "
      >
        <div className="lg:flex flex flex-col lg:flex-row  w-[80vw] m-auto  gap-20 justify-center items-center">
          {/* Our Vision */}
          <div className="">
            <motion.div className="w-[350px]  hover:shadow-xl shadow-blue-700/20 transition-all duration-300 bg-blue-50 flex flex-col items-center justify-center  p-8 rounded-2xl">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                viewport={{ once: true }}
                className="w-full flex items-center justify-center"
              >
                <img
                  src={OurVisionPic}
                  alt="Our Vision "
                  className="w-auto h-20 my-3"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                viewport={{ once: true }}
                className="  p-4"
              >
                <h2 className="text-xl my-3 font-semibold text-blue-700">
                  {t("ourVision")}
                </h2>
                <p className="text-left">{t("ourVisionDescription")}</p>
              </motion.div>
            </motion.div>
          </div>
          {/* Our  Mission */}
          <div className="">
            <motion.div className="w-[350px] hover:shadow-xl shadow-blue-700/20 transition-all duration-300 bg-blue-50 flex flex-col items-center justify-center  p-8 rounded-2xl">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                viewport={{ once: true }}
                className="w-full flex items-center justify-center"
              >
                <img
                  src={Mission}
                  alt="Our Vision "
                  className="w-auto h-20 my-3"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                viewport={{ once: true }}
                className="  p-4"
              >
                <h2 className="text-xl my-3 font-semibold text-blue-700">
                  {t("ourMission")}
                </h2>
                <p className="text-left">{t("ourMissionDescription")}</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>
      <motion.section>
        <div>
          {/* Our Values */}
          <div className="lg:w-[80vw] h-auto m-auto justify-center ">
            <motion.div className="lg:flex   items-center justify-center   rounded-2xl">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                viewport={{ once: true }}
                className="w-full flex items-center justify-center"
              >
                <img src={Values} alt="Our Vision " className="w-1/2 my-3" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                viewport={{ once: true }}
                className="p-4 "
              >
                <h2 className="text-2xl my-3 text-center lg:text-left md:text-left sm:text-center font-semibold text-blue-700">
                  {t("ourValues")}
                </h2>
                <ul className=" flex flex-col gap-8 p-4 text-md my-8 text-justify">
                  <li>{t("ourValuesDescription1")}</li>
                  <li>{t("ourValuesDescription2")}</li>
                  <li>{t("ourValuesDescription3")}</li>
                  <li>{t("ourValuesDescription4")}</li>
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>
      <motion.section className="w-full max-h-[300px]  flex  items-center justify-center">
        <motion.div className="w-[80vw] h-[200px] flex items-center ">
          <div className="flex items-center justify-evenly w-full">
            <div className="flex flex-col gap-2 items-center justify-center">
              <AutoCounter />
              <p className="lg:text-2xl md:text-2xl sm:text-sm text-sm text-black/60">
                {t("employees")}
              </p>
            </div>
            <div className="flex flex-col gap-2 items-center justify-center">
              <ClientCounter />
              <p className="lg:text-2xl md:text-2xl sm:text-sm text-sm text-black/60">
                {" "}
                {t("clients")}
              </p>
            </div>
            <div className="flex flex-col gap-2 items-center justify-center">
              <GrowthCounter />
              <p className="lg:text-2xl md:text-2xl sm:text-sm text-sm text-black/60">
                {" "}
                {t("growth")}
              </p>
            </div>
          </div>
        </motion.div>
      </motion.section>
      <motion.section className="h-screen lg:flex lg:flex-col  lg:justify-center  w-full">
        <motion.div className="lg:flex lg:items-center lg:justify-center">
          <div className="w-full absolute bg-[#BAA04E] h-screen lg:h-[30vh] z-[-100]"></div>
          <motion.div className="lg:flex  lg:w-[80vw] w-full lg:h-[60vh] lg:items-center bg-blue-700 overflow-hidden  justify-evenly ">
            <motion.div className="flex flex-col text-white px-8  items-left justify-center  lg:text-left md:text-left sm:text-center text-center  ">
              <h2 className="text-2xl font-semibold  my-4">
                {t("whatSetUsApart")}
              </h2>
              <p className=" lg:text-left md:text-left sm:text-center text-center  ">
                {t("whatSetUsApartDescription")}
              </p>
            </motion.div>
            <motion.div className="flex items-center  justify-center ">
              <img
                src={SaudiComplaince}
                alt=""
                className="max-w-[400px] mt-4"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>

      <motion.section className="max-h-[700px] h-screen lg:my-0 my-10 flex">
        <motion.div className="w-[80vw] m-auto flex items-center justify-center ">
          <motion.div className="flex items-center justify-center lg:gap-8  flex-col text-black/70">
            <div className="flex flex-col items-center">
              <h1 className="lg:text-4xl text-2xl mb-2 font-semibold text-blue-700">
                {t("IndustriesWeServe")}
              </h1>
              <p className="w-full text-xl text-center ">
                {t("IndustriesDescription")}
              </p>
            </div>
            <motion.div className="lg:flex lg:flex-wrap grid grid-cols-2 lg:gap-0 gap-8 w-full justify-evenly items-center my-8  ">
              <motion.div className="mx-6 flex flex-col items-center justify-center gap-4">
                <div className="w-15 h-15 flex items-center justify-center">
                  <img src={FinanceIcon} alt="" className="" />
                </div>
                <h3 className="text-black/70  text-xl">{t("finance")}</h3>
              </motion.div>
              <motion.div className="mx-6 flex flex-col items-center justify-center gap-4">
                <div className="w-15 h-15 flex items-center justify-center">
                  <img src={RetailIcon} alt="" />
                </div>
                <h3 className="text-black/70 text-xl">{t("retail")}</h3>
              </motion.div>
              <motion.div className="mx-6 flex flex-col items-center justify-center gap-4">
                <div className="w-15 h-15 flex items-center justify-center">
                  <img src={ConstructionIcon} alt="" />
                </div>
                <h3 className="text-black/70 text-xl">{t("construction")}</h3>
              </motion.div>
              <motion.div className="mx-6 flex flex-col items-center justify-center gap-4">
                <div className="w-15 h-15 flex items-center justify-center">
                  <img src={HealthCareIcon} alt="" />
                </div>
                <h3 className="text-black/70 text-xl">{t("healthCare")}</h3>
              </motion.div>
              <motion.div className="mx-6 flex flex-col items-center justify-center gap-4">
                <div className="w-15 h-15 flex items-center justify-center">
                  <img src={HospitalityIcon} alt="" />
                </div>
                <h3 className="text-black/70 text-xl">{t("Hospitality")}</h3>
              </motion.div>
              <motion.div className="mx-6 flex flex-col items-center justify-center gap-4">
                <div className="w-15 h-15 flex items-center justify-center">
                  <img src={ITIcon} alt="" />
                </div>
                <h3 className="text-black/70 text-xl"> {t("IT")}</h3>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>

      <motion.section className="h-screen  flex items-center justify-center ">
        <div className="lg:w-[80vw] gap-12  lg:flex  lg:mt-0 items-center m-auto">
          <div className="w-full relative ">
            <div className="bg-blue-500 absolute lg:w-[50vw] z-[-10] h-[10vh]"></div>
            <div className="bg-[#bba14e] absolute bottom-0 w-[60vw] h-[10vh]"></div>
            <div className="lg:w-full lg:h-full   rounded-tr-4xl flex items-center justify-center   overflow-hidden">
              <img
                src={Saudization}
                alt=""
                className="w-[80vw] lg:w-full md:w-full sm:w-[80vw]"
              />
            </div>
          </div>
          <div className="w-full  justify-center items-center  lg:p-0 p-6">
            <h2 className="lg:text-2xl text-xl lg:text-left text-center font-semibold text-blue-500 mb-4">
              {t("commitmenttoSaudization&Compliance")}
            </h2>
            <p className="lg:text-left text-center">
              {t("commitmenttoSaudization&ComplianceDescription")}
            </p>
          </div>
        </div>
      </motion.section>

      <motion.section>
        <FooterSection />
      </motion.section>
    </div>
  );
};

export default About;
