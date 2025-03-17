import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import IntroSection from "../components/landingPage/introSection.jsx";
import AboutSection from "../components/landingPage/AboutSection.jsx";
import Navbar from "../components/Navbar";
import OurServicesSections from "../components/landingPage/OurServicesSections.jsx";
import ClientsSection from "../components/landingPage/OurClients.jsx";
import ContactUsSection from "../components/landingPage/ContactUsSection.jsx";

const Home = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const touchStartY = useRef(0);

  // Define our sections with their names
  const sectionData = [
    { component: <IntroSection key="intro" />, name: "Intro" },
    { component: <AboutSection key="about" />, name: "About" },
    { component: <OurServicesSections key="services" />, name: "Services" },
    { component: <ClientsSection key="Clients" />, name: "Clients" },
    { component: <ContactUsSection key="Contact" />, name: "Contact" },
    // Add more sections here as needed
  ];

  const sections = sectionData.map((item) => item.component);
  const totalSections = sections.length;

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check
    checkMobile();

    // Add event listener for window resize
    window.addEventListener("resize", checkMobile);

    // Cleanup
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

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

  // Function to navigate to a specific section when clicking on a nav indicator
  const navigateToSection = (index) => {
    if (index !== currentSection && !isScrolling) {
      setIsScrolling(true);
      setCurrentSection(index);
      setTimeout(() => setIsScrolling(false), 1000);
    }
  };

  return (
    <>
      {/* Navbar with animation - only render when not on the first section */}
      {currentSection > 0 && <Navbar showNavbar={true} />}

      {/* Navigation Indicator - responsive positioning and only visible when not on the first section */}
      {currentSection > 0 && (
        <div
          className={`fixed z-50 ${
            isMobile
              ? "bottom-6 left-1/2 transform -translate-x-1/2 flex flex-row"
              : "left-6 top-1/2 transform -translate-y-1/2 flex flex-col"
          } items-center`}
        >
          <div
            className={`py-2 px-1 backdrop-blur-sm rounded-full ${
              isMobile ? "flex flex-row" : "flex flex-col"
            }`}
          >
            {sectionData.slice(1).map((section, index) => {
              const sectionIndex = index + 1;
              return (
                <div
                  key={sectionIndex}
                  className={`relative ${
                    isMobile ? "mx-3" : "my-3"
                  } cursor-pointer group`}
                  onClick={() => navigateToSection(sectionIndex)}
                >
                  <div
                    className={`h-3 w-3 rounded-full transition-all duration-300 ${
                      currentSection === sectionIndex
                        ? "bg-blue-700 border-2 border-blue-900 scale-125"
                        : "bg-blue-700/10 hover:bg-gray-200"
                    }`}
                  />

                  <div
                    className={`absolute opacity-0 group-hover:opacity-100 text-white text-xs py-1 px-2 rounded whitespace-nowrap transition-opacity duration-300 bg-blue-700 ${
                      isMobile
                        ? "top-0 left-1/2 -translate-x-1/2 -translate-y-full mb-2"
                        : "left-6 top-1/2 -translate-y-1/2"
                    }`}
                  >
                    {section.name}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      <div className="fixed-sections-container h-screen w-full">
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
