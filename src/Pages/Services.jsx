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

const Services = () => {
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
                OUR SERVICES
              </motion.h2>
            </div>
            <motion.p
              className="text-base md:text-lg text-black text-center leading-relaxed"
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Steer Your Business Towards Success with Optimum Excellence
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
                Professional Services
              </h3>
              <p className="text-sm sm:text-base text-center lg:text-justify leading-relaxed text-gray-700">
                Our Professional Services offer customized solutions designed to
                enhance your strategies, improve operational efficiency, and
                foster sustainable growth for your business. We focus on
                understanding your unique challenges and objectives to deliver
                actionable insights and processes that align with your goals. By
                leveraging our expertise, you can optimize your approach,
                streamline workflows, and achieve lasting success in a
                competitive market.
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
                Manpower Solutions
              </h3>
              <p className="text-sm sm:text-base text-center lg:text-justify leading-relaxed text-gray-700">
                Our manpower solutions provide you with skilled and dependable
                talent tailored to your business requirements. We focus on
                enhancing operational efficiency and driving success by
                connecting you with qualified professionals within KSA and
                internationally.
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-10 px-4 md:px-8 lg:px-12 my-10">
            {/* Text Section */}
            <div className="w-full lg:w-1/2 flex flex-col text-center lg:text-left">
              <h3 className="text-2xl sm:text-3xl font-semibold mb-4 text-blue-700">
                Executive Recruitment
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-gray-700">
                Our Executive Recruitment services specialize in identifying and
                securing high-caliber leaders to boost your organization's
                success and foster growth. With a tailored approach, we leverage
                an extensive network and comprehensive assessment techniques to
                ensure the perfect alignment between candidates and your
                strategic objectives. Our team of experts is dedicated to
                understanding your unique organizational needs, enabling us to
                deliver exceptional talent that drives impactful results and
                supports long-term success.
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
                Recruitment as a Service
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-gray-700">
                Our Recruitment as a Service connects businesses with highly
                qualified candidates, delivering the right talent for each
                position. We streamline the hiring process by utilizing advanced
                strategies and industry expertise to identify and engage
                top-tier professionals. Our approach not only enhances your
                recruitment efficiency but also aligns with your organizational
                needs, ensuring a perfect fit for your team.
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-10 px-4 md:px-8 lg:px-12 my-10">
            {/* Text Section */}
            <div className="w-full lg:w-1/2 flex flex-col text-center lg:text-left">
              <h3 className="text-2xl sm:text-3xl font-semibold mb-4 text-blue-700">
                Talent Assessment
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-gray-700">
                Our Talent Assessment services objectively evaluate candidates'
                skills and potential, aligning them with your organization's
                specific requirements. By utilizing a comprehensive set of
                assessment tools, we identify the best matches for your team,
                enhancing overall productivity and ensuring a strong cultural
                fit. Our data-driven approach allows for informed
                decision-making, ultimately leading to improved hiring outcomes
                and reduced turnover rates.
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
                Payroll as a Service
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-gray-700">
                Our Payroll as a Service offers precise, timely, and compliant
                payroll processing, enabling you to concentrate on business
                growth. We handle all aspects of payroll management, ensuring
                adherence to regulations and minimizing the risk of errors. Our
                comprehensive solution simplifies your payroll operations,
                allowing you to allocate resources effectively and enhance
                productivity. Partner with us to streamline payroll tasks,
                ensuring employees are paid accurately and on time.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="w-full max-h-[300px] h-[200px] my-20 bg-[#BBA14E] flex items-center justify-center">
          <div className="flex flex-col gap-4 ">
            <h3 className="text-4xl font-semibold text-white">
              Connect With Us?
            </h3>

            <button
              className="outline-2 outline-white text-white font-semibold transition-all duration-200 hover:bg-white hover:text-[#1974B8] px-4 py-2 cursor-pointer"
              onClick={() => navigate("/contact")}
            >
              Contact
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
