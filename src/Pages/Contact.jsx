// src/Pages/Home.jsx
import React from "react";
import ContactUsSection from "../components/landingPage/ContactUsSection";
import FooterSection from "../components/landingPage/FooterSection";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

const Contact = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/"); // This will navigate to /home
  };
  return (
    <div>
      <div>
        <div
          className="absolute flex items-center m-12  z-100    hover:text-[#BBA14E]  cursor-pointer transition duration-200 text-[#1974B8]  rounded-full "
          onClick={handleClick}
        >
          <IoIosArrowBack /> Home
        </div>
      </div>
      <section>
        <ContactUsSection />
      </section>
      <section>
        <FooterSection />
      </section>
    </div>
  );
};

export default Contact;
