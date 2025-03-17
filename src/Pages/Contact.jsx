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
    <div className="w-full h-[80vh] rounded-t-4xl absolute bottom-0 bg-white  ">
      <div className="w-full h-screen z-[-100] absolute bottom-0 ">
        <Iridescence
          color={[0, 0, 0.8]}
          mouseReact={true}
          amplitude={0.1}
          speed={1.0}
        />
      </div>
      <section className="w-full h-screen z-100">
        <ContactUsSection />
      </section>
    </div>
  );
};

export default Contact;
