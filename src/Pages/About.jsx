// src/Pages/Home.jsx
import React from "react";
import AboutUsPic from "../assets/Images/Aboutus.jpg";
import OurVisionPic from "../assets/Images/OurVision.png";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { motion } from "framer-motion";
import FooterSection from "../components/landingPage/FooterSection";
import OurServicesSection from "../components/landingPage/OurServicesSections";

const About = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="h-auto">
      {/* Back Button */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="absolute flex items-center m-12 z-100 hover:text-[#BBA14E] cursor-pointer transition duration-200 text-white rounded-full"
        onClick={handleClick}
      >
        <IoIosArrowBack /> Home
      </motion.div>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full h-[300px] overflow-hidden z-[-10] flex items-center bg-black"
      >
        <img
          src={AboutUsPic}
          alt="About Us"
          className="object-cover opacity-65 w-full"
        />
      </motion.section>

      {/* Our Company Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="w-[80vw] m-auto flex flex-col"
      >
        <div className="flex items-center">
          <div className="my-15 p-8 flex flex-col justify-center text-black">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex gap-10 items-center mb-10"
            >
              <h1 className="text-6xl font-bold text-[#1974B8]">OUR COMPANY</h1>
              <div className="h-1 w-1/2 bg-[#BBA14E]"></div>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-justify"
            >
              Established in 2021, Optimum Business Solutions has swiftly
              positioned itself as a leading provider of professional and
              business services in the Kingdom of Saudi Arabia (KSA) and for
              global clients operating within this dynamic market. Our
              commitment to excellence and innovation has allowed us to
              cultivate strong relationships with a diverse portfolio of over 15
              clients, spanning various industries. At Optimum Business
              Solutions, we pride ourselves on our capacity to manage a
              workforce of over 200 dedicated employees, all while ensuring full
              compliance with local labor regulations and Saudization mandates.
              Our comprehensive suite of services is designed to support our
              clients in navigating the unique challenges of the KSA market,
              enhancing operational efficiency, and fostering sustainable
              growth. With a team of highly skilled professionals, we leverage
              our in-depth understanding of the regulatory landscape and market
              dynamics to deliver tailored solutions that meet the specific
              needs of our clients. As we continue to expand our footprint in
              KSA and beyond, Optimum Business Solutions remains committed to
              providing exceptional service, fostering local talent, and
              contributing to the economic growth.
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Our Vision Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="h-auto bg-white"
      >
        <div className="w-[80vw]  flex gap-20 items-center m-auto">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
            className="w-1/2 p-12"
          >
            <img src={OurVisionPic} alt="Our Vision" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
            className="w-1/2"
          >
            <h2 className="text-3xl mb-5 font-semibold text-[#1974B8]">
              OUR VISION
            </h2>
            <p className="text-justify">
              At Optimum Business Solutions, our vision is to be the trusted
              partner of choice for businesses navigating the complexities of
              the Saudi Arabian market and beyond. We aim to drive sustainable
              growth, innovation, and operational excellence by providing
              customized solutions that empower our clients to thrive in a
              dynamic global landscape. Through a commitment to fostering local
              talent, adhering to regulatory standards, and building lasting
              partnerships, we aspire to contribute significantly to the
              economic development of the Kingdom of Saudi Arabia and the wider
              region.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Our Services Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="h-screen m-auto"
      >
        <div className="h-screen flex items-center">
          <OurServicesSection />
        </div>
      </motion.section>

      {/* Footer Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <FooterSection />
      </motion.section>
    </div>
  );
};

export default About;
