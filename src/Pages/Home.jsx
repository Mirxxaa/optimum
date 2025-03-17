import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import IntroSection from "../components/landingPage/introSection.jsx";
import AboutSection from "../components/landingPage/AboutSection.jsx";
import Navbar from "../components/Navbar";
import OurServicesSections from "../components/landingPage/OurServicesSections.jsx";
import ClientsSection from "../components/landingPage/OurClients.jsx";
import ContactUsSection from "../components/landingPage/ContactUsSection.jsx";
import { div } from "framer-motion/client";

const Home = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const sectionData = [
    { component: <IntroSection key="intro" />, name: "Intro" },
    { component: <AboutSection key="about" />, name: "About" },
    { component: <OurServicesSections key="services" />, name: "Services" },
    { component: <ClientsSection key="Clients" />, name: "Clients" },
    { component: <ContactUsSection key="Contact" />, name: "Contact" },
  ];

  const sections = sectionData.map((item) => item.component);
  const totalSections = sections.length;

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  // Enable scroll effect only on desktop
  useEffect(() => {
    if (isMobile) return;

    const handleWheel = (e) => {
      if (isScrolling) return;

      e.preventDefault();

      if (e.deltaY > 0 && currentSection < totalSections - 1) {
        setIsScrolling(true);
        setCurrentSection((prev) => prev + 1);
        setTimeout(() => setIsScrolling(false), 1000);
      } else if (e.deltaY < 0 && currentSection > 0) {
        setIsScrolling(true);
        setCurrentSection((prev) => prev - 1);
        setTimeout(() => setIsScrolling(false), 1000);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [currentSection, isScrolling, totalSections, isMobile]);

  return (
    <>
      {/* Navbar */}
      {currentSection > 0 && <Navbar showNavbar={true} />}

      {isMobile ? (
        // Mobile View: Completely Blank
        <div className="w-full overflow-y-hidden">
          <div className="w-full ">
            <div className="w-full relative ">
              <IntroSection />
            </div>
            <div className="w-full relative">
              <AboutSection />
            </div>
            <div className="w-full  relative">
              <OurServicesSections />
            </div>
            <div className="w-full h-screen flex items-center justify-center relative overflow-hidden  ">
              <ClientsSection />
            </div>
            <div className="w-full  relative mb-20  flex items-center justify-center">
              <ContactUsSection />
            </div>
          </div>
        </div>
      ) : (
        // Desktop View: Scroll Animation
        <div className="fixed-sections-container h-screen w-full">
          <div className="fixed top-0 left-0 w-full h-full">{sections[0]}</div>

          {sections.slice(1).map((section, index) => {
            const sectionIndex = index + 1;

            return (
              <AnimatePresence key={sectionIndex}>
                {currentSection === sectionIndex && (
                  <motion.div
                    className="fixed top-0 left-0 w-full h-full"
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "100%" }}
                    transition={{ type: "spring", stiffness: 80, damping: 20 }}
                  >
                    {section}
                  </motion.div>
                )}
              </AnimatePresence>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Home;
