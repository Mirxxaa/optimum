// src/Pages/Home.jsx
import React from "react";
import OurVisionPic from "../assets/Images/OurVision.png";
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

const About = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="w-full h-[80vh] bg-white absolute bottom-0 rounded-t-4xl">
      <div className="w-full h-screen z-[-100] absolute bottom-0 ">
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
        className="w-[80vw] my-20 items-center justify-center m-auto flex flex-col"
      >
        <div className="">
          <div className="  items-center  flex flex-col justify-center text-black">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex gap-10 items-center mb-4"
            >
              <h1 className="text-4xl font-bold text-blue-700">
                ABOUT OPTIMUM
              </h1>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center text-xl w-full lg:w-1/2 sm:w-full md:w-full "
            >
              Established in 2021, Optimum Business Solutions offers a range of
              professional and business services in the Kingdom of Saudi Arabia
              (KSA) and internationally. We have built a diverse portfolio that
              includes over 15 clients across various industries.
            </motion.p>
          </div>
          <div className="flex justify-between text-black/70 gap-18 text-center mt-8">
            <div className=" p-6 rounded-2xl flex flex-col justify-center items-center ">
              <div className="text-3xl bg-blue-500 p-6 text-white rounded-full my-8">
                <CgSearchFound />
              </div>

              <p>
                Founded in 2021, Optimum Business Solutions has emerged as a
                trusted provider of professional and business services in Saudi
                Arabia and internationally.{" "}
              </p>
            </div>
            <div className=" p-6 rounded-2xl flex flex-col justify-center items-center">
              <div className="text-3xl bg-blue-500 p-6 text-white rounded-full my-8">
                <FaStar />
              </div>
              <p>
                We specialize in guiding businesses through the complexities of
                the market by delivering customized solutions that promote
                operational efficiency, regulatory compliance, and sustainable
                growth.
              </p>
            </div>
            <div className="  p-6 rounded-2xl flex flex-col justify-center items-center">
              <div className="text-3xl bg-blue-500 p-6 text-white rounded-full my-8">
                <PiBuildingsFill />
              </div>
              <p>
                Our expertise equips organizations to adapt effectively to
                changing environments, ensuring they remain competitive and
                successful in their respective industries.
              </p>
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
        <div className="flex w-[80vw] m-auto  gap-20 justify-center items-center">
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
                  OUR VISION
                </h2>
                <p className="text-left">
                  Become the trusted partner for businesses in Saudi Arabia and
                  globally, providing innovative, strategic solutions for
                  sustainable success.
                </p>
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
                  OUR MISSION
                </h2>
                <p className="text-left">
                  To empower businesses through expert workforce management,
                  compliance, and operational excellence solutions.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>
      <motion.section>
        <div>
          {/* Our Values */}
          <div className="w-[80vw] h-auto m-auto justify-center ">
            <motion.div className="flex  items-center justify-center   rounded-2xl">
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
                className="  p-4"
              >
                <h2 className="text-2xl my-3 font-semibold text-blue-700">
                  OUR VALUES
                </h2>
                <ul className=" flex flex-col gap-8 text-md my-8 text-justify">
                  <li>
                    1. Integrity: We uphold the highest standards of honesty and
                    transparency, ensuring compliance in all our dealings to
                    build trust with our clients and employees.
                  </li>
                  <li>
                    2. Excellence: We strive for operational efficiency and
                    quality in our services, continually seeking ways to improve
                    and exceed client expectations.
                  </li>
                  <li>
                    3. Sustainability: We are committed to promoting sustainable
                    growth practices that benefit our clients and the community,
                    ensuring a responsible approach to business.
                  </li>
                  <li>
                    4. Collaboration: We foster a culture of teamwork and
                    cooperation, leveraging the diverse talents of our
                    experienced team to deliver innovative solutions and meet
                    the needs of our clients effectively.
                  </li>
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>
      <motion.section className="w-full max-h-[300px] flex items-center justify-center">
        <motion.div className="w-[80vw] h-[200px] flex items-center ">
          <div className="flex items-center justify-evenly w-full">
            <div className="flex flex-col gap-4 items-center justify-center">
              <AutoCounter />
              <p className="text-2xl text-black/60">Employees</p>
            </div>
            <div className="flex flex-col gap-4 items-center justify-center">
              <ClientCounter />
              <p className="text-2xl text-black/60"> Clients</p>
            </div>
            <div className="flex flex-col gap-4 items-center justify-center">
              <GrowthCounter />
              <p className="text-2xl text-black/60"> Growth</p>
            </div>
          </div>
        </motion.div>
      </motion.section>
      <motion.section className="h-screen flex flex-col  justify-center w-full">
        <motion.div className="h-[50vh] bg-[#BAA04E]   flex items-center justify-center">
          <motion.div className="flex w-[80vw]  items-center bg-blue-700   gap-10 justify-evenly ">
            <motion.div className="flex flex-col text-white px-8  items-left justify-center">
              <h2 className="text-2xl font-semibold  my-4">
                WHAT SETS US APART?
              </h2>
              <p className=" text-left ">
                We offer customized, market-oriented solutions that not only
                adhere to Saudi regulations but also enhance operational
                excellence. Our commitment to understanding our clients' unique
                needs enables us to deliver effective strategies that drive
                success in a competitive landscape
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

      <motion.section className="max-h-[500px] h-screen  flex">
        <motion.div className="w-[80vw] m-auto flex items-center justify-center ">
          <motion.div className="flex items-center justify-center gap-12 flex-col text-black/70">
            <div className="flex flex-col items-center">
              <h1 className="text-4xl mb-4 font-semibold text-blue-700">
                INDUSTRIES WE SERVE
              </h1>
              <p className="w-full text-xl text-center ">
                We support businesses in diverse sectors, including
              </p>
            </div>
            <motion.div className="flex flex-wrap w-full justify-evenly items-center my-8  ">
              <motion.div className="mx-12 flex flex-col items-center justify-center gap-4">
                <div className="w-15 h-15 flex items-center justify-center">
                  <img src={FinanceIcon} alt="" className="" />
                </div>
                <h3 className="text-black/70 text-xl">Finance</h3>
              </motion.div>
              <motion.div className="mx-12 flex flex-col items-center justify-center gap-4">
                <div className="w-15 h-15 flex items-center justify-center">
                  <img src={RetailIcon} alt="" />
                </div>
                <h3 className="text-black/70 text-xl">Retail</h3>
              </motion.div>
              <motion.div className="mx-12 flex flex-col items-center justify-center gap-4">
                <div className="w-15 h-15 flex items-center justify-center">
                  <img src={ConstructionIcon} alt="" />
                </div>
                <h3 className="text-black/70 text-xl">Construction</h3>
              </motion.div>
              <motion.div className="mx-12 flex flex-col items-center justify-center gap-4">
                <div className="w-15 h-15 flex items-center justify-center">
                  <img src={HealthCareIcon} alt="" />
                </div>
                <h3 className="text-black/70 text-xl">Health Care</h3>
              </motion.div>
              <motion.div className="mx-12 flex flex-col items-center justify-center gap-4">
                <div className="w-15 h-15 flex items-center justify-center">
                  <img src={HospitalityIcon} alt="" />
                </div>
                <h3 className="text-black/70 text-xl">Hospitality</h3>
              </motion.div>
              <motion.div className="mx-12 flex flex-col items-center justify-center gap-4">
                <div className="w-15 h-15 flex items-center justify-center">
                  <img src={ITIcon} alt="" />
                </div>
                <h3 className="text-black/70 text-xl"> IT</h3>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>

      <motion.section className="h-auto my-12">
        <div className="w-[80vw] flex gap-10 items-center m-auto">
          <div className="w-full relative">
            <div className="bg-blue-500 absolute w-[50vw] z-[-10] h-[10vh]"></div>
            <div className="bg-[#bba14e] absolute bottom-0 w-[60vw] h-[10vh]"></div>
            <div className="w-full h-full rounded-tr-4xl  overflow-hidden">
              <img src={Saudization} alt="" />
            </div>
          </div>
          <div className="w-full justify-center items-center  ">
            <h2 className="text-2xl font-semibold text-blue-500 mb-4">
              Commitment to Saudization & Compliance
            </h2>
            <p className="">
              We actively contribute to Saudization, creating employment
              opportunities and ensuring businesses stay compliant with local
              laws.
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
