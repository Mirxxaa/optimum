// src/Pages/Home.jsx
import { section } from "framer-motion/client";
import React from "react";
import { motion } from "framer-motion";
import ManpowerImage from "../assets/Images/Manpower.png";
import ServicesCardSlider from "../components/ServicesCardSlider";
import ProfessionalServicesImg from "../assets/Images/professionalServices.jpeg";
import AutoCounter from "../components/AutoCounter";
import ExecutiveRecruitment from "../assets/Images/Executive_Recruitment.jpeg";
import RecruitmentServicesImage from "../assets/Images/Recruitment.png";
import TalentAssesment from "../assets/Images/TalentAssesment.png";
import payroll from "../assets/Images/payroll.png";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import Iridescence from "../components/Iridescence";
import FooterSection from "../components/landingPage/FooterSection";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation();

  const handleClick = () => {
    navigate("/"); // This will navigate to /home
  };
  const navigate = useNavigate();
  return (
    <div className="w-full lg:h-[80vh] h-[70vh]  bg-white absolute bottom-0 rounded-t-4xl">
      <div className="w-full h-screen z-[-100] absolute bottom-0 ">
        <Iridescence
          color={[0, 0, 0.8]}
          mouseReact={true}
          amplitude={0.1}
          speed={1.0}
        />
      </div>
      <section className="h-full">
        <div className="w-[80vw] m-auto  h-screen flex flex-col mt-10 gap-10 ">
          <div className="w-full flex flex-col items-center justify-center">
            <div className="flex items-center text-center justify-center">
              <motion.h2
                className="text-3xl md:text-4xl text-blue-700 font-semibold mb-4 tracking-wider"
                initial={{ y: 60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {t("ourServices")}
              </motion.h2>
            </div>
            <motion.p
              className="text-base md:text-lg text-black text-center leading-relaxed"
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {t("ourServiceDescription")}
            </motion.p>
          </div>
          <div className="h-[300px] bg-blue-700 rounded-t-4xl ">
            <ServicesCardSlider />
          </div>
        </div>
      </section>
      <section className="lg:my-20 md:my-20 sm:my-10 my-25 ">
        <div className="w-80 h-80 z-[-10]  opacity-5 bg-blue-700 absolute rounded-full left-0 t-0 "></div>

        <div className="h-auto  w-[80vw] m-auto">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-10 px-4 md:px-8 lg:px-12">
            {/* Text Section */}
            <div className="w-full lg:w-1/2 flex flex-col">
              <h3 className="text-2xl sm:text-3xl font-semibold mb-4 text-blue-700 text-center lg:text-left">
                {t("professionalServices")}
              </h3>
              <p className="text-sm sm:text-base text-center lg:text-justify leading-relaxed text-gray-700">
                {t("professionalServicesDescription")}
              </p>
            </div>

            {/* Image Section */}
            <div className="w-full lg:w-1/2 flex items-center justify-center relative">
              <div className="rounded-tr-3xl rounded-bl-3xl overflow-hidden w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
                <img
                  src={ProfessionalServicesImg}
                  alt="Professional Services"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-10 px-4 md:px-8 lg:px-12 my-10">
            {/* Image Section */}
            <div className="w-full lg:w-1/2 flex items-center justify-center">
              <div className="rounded-tr-3xl rounded-bl-3xl overflow-hidden w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
                <img
                  src={ManpowerImage}
                  alt="Manpower Solutions"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Text Section */}
            <div className="w-full lg:w-1/2 flex flex-col">
              <h3 className="text-2xl sm:text-3xl font-semibold mb-4 text-blue-700 text-center lg:text-left">
                {t("manpowerSolutions")}
              </h3>
              <p className="text-sm sm:text-base text-center lg:text-justify leading-relaxed text-gray-700">
                {t("manpowerSolutionsDescription")}
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-10 px-4 md:px-8 lg:px-12 my-10">
            {/* Text Section */}
            <div className="w-full lg:w-1/2 flex flex-col text-center lg:text-left">
              <h3 className="text-2xl sm:text-3xl font-semibold mb-4 text-blue-700">
                {t("executiveRecruitment")}
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-gray-700">
                {t("executiveRecruitmentDescription")}
              </p>
            </div>

            {/* Image Section */}
            <div className="w-full lg:w-1/2 flex items-center justify-center relative">
              <div className="rounded-tr-3xl rounded-bl-3xl overflow-hidden w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
                <img
                  src={ExecutiveRecruitment}
                  alt="Executive Recruitment"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-10 px-4 md:px-8 lg:px-12 my-10">
            {/* Image Section */}
            <div className="w-full lg:w-1/2 flex items-center justify-center">
              <img
                src={RecruitmentServicesImage}
                alt="Recruitment Services"
                className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-cover rounded-tr-3xl rounded-bl-3xl"
              />
            </div>

            {/* Text Section */}
            <div className="w-full lg:w-1/2 flex flex-col text-center lg:text-left">
              <h3 className="text-2xl sm:text-3xl font-semibold mb-4 text-blue-700">
                {t("recruitmentAsAService")}
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-gray-700">
                {t("recruitmentAsAServiceDescription")}
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-10 px-4 md:px-8 lg:px-12 my-10">
            {/* Text Section */}
            <div className="w-full lg:w-1/2 flex flex-col text-center lg:text-left">
              <h3 className="text-2xl sm:text-3xl font-semibold mb-4 text-blue-700">
                {t("talentAssessment")}
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-gray-700">
                {t("talentAssessmentDescription")}
              </p>
            </div>

            {/* Image Section */}
            <div className="w-full lg:w-1/2 flex items-center justify-center">
              <img
                src={TalentAssesment}
                alt="Talent Assessment"
                className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-cover rounded-tr-3xl rounded-bl-3xl"
              />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-10 px-4 md:px-8 lg:px-12 my-10">
            {/* Image Section */}
            <div className="w-full lg:w-1/2 flex items-center justify-center">
              <img
                src={payroll}
                alt="Payroll Services"
                className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-cover rounded-tr-3xl rounded-bl-3xl"
              />
            </div>

            {/* Text Section */}
            <div className="w-full lg:w-1/2 flex flex-col text-center lg:text-left">
              <h3 className="text-2xl sm:text-3xl font-semibold mb-4 text-blue-700">
                {t("payrollAsAService")}
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-gray-700">
                {t("payrollAsAServiceDescription")}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="w-full max-h-[300px] h-[200px] my-20 bg-[#BBA14E] flex items-center justify-center">
          <div className="flex flex-col gap-4 ">
            <h3 className="text-4xl font-semibold text-white">
              {t("connectWithUs")}
            </h3>

            <button
              className="outline-2 outline-white text-white font-semibold transition-all duration-200 hover:bg-white hover:text-[#1974B8] px-4 py-2 cursor-pointer"
              onClick={() => navigate("/contact")}
            >
              {t("connectWithUs")}
            </button>
          </div>
        </div>
      </section>
      <section>
        <FooterSection />
      </section>
    </div>
  );
};

export default Services;
