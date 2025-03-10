import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import IntroSection from "../components/landingPage/IntroSection.jsx";
import AboutSection from "../components/landingPage/AboutSection.jsx";
import Navbar from "../components/Navbar";
import OurServicesSections from "../components/landingPage/OurServicesSections.jsx";
import ClientsSection from "../components/landingPage/OurClients.jsx";

import ContactUsSection from "../components/landingPage/ContactUsSection.jsx";

const Home = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const touchStartY = useRef(0);

  // Define our sections
  const sections = [
    <IntroSection key="intro" />,
    <AboutSection key="about" />,
    <OurServicesSections key="services" />,
    <ClientsSection key="Clients" />,
    <ContactUsSection key="Contact" />,
    // Add more sections here as needed
  ];

  const totalSections = sections.length;

  // Handle wheel events for desktop
  useEffect(() => {
    const handleWheel = (e) => {
      if (isScrolling) return;

      e.preventDefault();

      if (e.deltaY > 0 && currentSection < totalSections - 1) {
        // Scrolling down to next section
        setIsScrolling(true);
        setCurrentSection((prev) => prev + 1);
        setTimeout(() => setIsScrolling(false), 1000);
      } else if (e.deltaY < 0 && currentSection > 0) {
        // Scrolling up to previous section
        setIsScrolling(true);
        setCurrentSection((prev) => prev - 1);
        setTimeout(() => setIsScrolling(false), 1000);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    // Clean up event listener
    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [currentSection, isScrolling, totalSections]);

  // Handle touch events for mobile
  useEffect(() => {
    const handleTouchStart = (e) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      if (isScrolling) return;

      const touchY = e.touches[0].clientY;
      const touchDiff = touchStartY.current - touchY;

      // Threshold to determine if user intends to scroll (20px)
      if (Math.abs(touchDiff) > 20) {
        e.preventDefault();

        if (touchDiff > 0 && currentSection < totalSections - 1) {
          // Swiping up (to go down to next section)
          setIsScrolling(true);
          setCurrentSection((prev) => prev + 1);
          setTimeout(() => setIsScrolling(false), 1000);
        } else if (touchDiff < 0 && currentSection > 0) {
          // Swiping down (to go up to previous section)
          setIsScrolling(true);
          setCurrentSection((prev) => prev - 1);
          setTimeout(() => setIsScrolling(false), 1000);
        }
      }
    };

    document.addEventListener("touchstart", handleTouchStart, {
      passive: true,
    });
    document.addEventListener("touchmove", handleTouchMove, { passive: false });

    return () => {
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchmove", handleTouchMove);
    };
  }, [currentSection, isScrolling, totalSections]);

  return (
    <>
      {/* Navbar with animation - only render when not on the first section */}
      {currentSection > 0 && <Navbar showNavbar={true} />}

      <div className="fixed-sections-container h-screen w-full overflow-hidden">
        {/* The first section stays fixed in place */}
        <div className="fixed top-0 left-0 w-full h-full">{sections[0]}</div>

        {/* All other sections animate in from bottom when active */}
        {sections.slice(1).map((section, index) => {
          const sectionIndex = index + 1; // Actual index in sections array

          return (
            <AnimatePresence key={sectionIndex}>
              {currentSection === sectionIndex && (
                <motion.div
                  className="fixed top-0 left-0 w-full h-full"
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "100%" }}
                  transition={{
                    type: "spring",
                    stiffness: 80,
                    damping: 20,
                  }}
                >
                  {section}
                </motion.div>
              )}
            </AnimatePresence>
          );
        })}
      </div>
    </>
  );
};

export default Home;
