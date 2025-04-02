// src/Pages/Home.jsx
import React from "react";
import ContactUsSection from "../components/landingPage/ContactUsSection";
import FooterSection from "../components/landingPage/FooterSection";
import { useNavigate } from "react-router-dom";
import Iridescence from "../components/Iridescence";
import { IoIosArrowBack } from "react-icons/io";

const Contact = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/"); // This will navigate to /home
  };
  return (
    <div className="w-full lg:h-[80vh] md:h-[80vh] sm:h-[70vh] h-[70vh] rounded-t-4xl absolute bottom-0 bg-white">
      <div className="w-full h-screen z-[-100] absolute bottom-0 ">
        <Iridescence
          color={[0.0, 0.04, 0.2]}
          mouseReact={false}
          amplitude={0.5}
          speed={4.0}
        />
      </div>
      <section className="w-full h-screen z-100">
        <ContactUsSection />
      </section>
    </div>
  );
};

export default Contact;
