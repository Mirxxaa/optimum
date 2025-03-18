import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import IntroSection from "../components/landingPage/introSection.jsx";
import AboutSection from "../components/landingPage/AboutSection.jsx";
import Navbar from "../components/Navbar";
import OurServicesSections from "../components/landingPage/OurServicesSections.jsx";
import ClientsSection from "../components/landingPage/OurClients.jsx";
import ContactUsSection from "../components/landingPage/ContactUsSection.jsx";
import "../styles/Home.css";

const Home = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isSectionLoaded, setIsSectionLoaded] = useState(true); // Track section loading state
  const [isTransitioning, setIsTransitioning] = useState(false); // New transition state
  const scrollThreshold = (80 * window.innerHeight) / 100; // Adjusted for 80vh sections

  const sectionData = [
    { component: <IntroSection key="intro" />, name: "Intro" },
    { component: <AboutSection key="about" />, name: "About" },
    { component: <OurServicesSections key="services" />, name: "Services" },
    { component: <ClientsSection key="clients" />, name: "Clients" },
    { component: <ContactUsSection key="contact" />, name: "Contact" },
  ];

  const sections = sectionData.map((item) => item.component);
  const totalSections = sections.length;

  // Check if mobile on mount and on resize
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

  // Super simple scroll handler
  useEffect(() => {
    if (isMobile) return;

    let lastWheelTime = 0;
    const cooldownTime = 500;
    let scrollAmount = 0;
    const scrollThreshold = 100;

    const handleWheel = (e) => {
      e.preventDefault();

      if (!isSectionLoaded || isTransitioning) return; // Prevent scroll if section is still transitioning

      const now = Date.now();
      if (now - lastWheelTime < cooldownTime) return;

      scrollAmount += e.deltaY;

      if (
        scrollAmount > scrollThreshold &&
        currentSection < totalSections - 1
      ) {
        setIsSectionLoaded(false);
        setIsTransitioning(true); // Block input while transitioning
        setTimeout(() => {
          setCurrentSection((current) => current + 1);
          setIsTransitioning(false);
        }, 0); // Delay section change by 500ms for smoothness
        lastWheelTime = now;
        scrollAmount = 0;
      } else if (scrollAmount < -scrollThreshold && currentSection > 0) {
        setIsSectionLoaded(false);
        setIsTransitioning(true);
        setTimeout(() => {
          setCurrentSection((current) => current - 1);
          setIsTransitioning(false);
        }, 0);
        lastWheelTime = now;
        scrollAmount = 0;
      }
    };

    const handleKeyDown = (e) => {
      if (!isSectionLoaded || isTransitioning) return;

      const now = Date.now();
      if (now - lastWheelTime < cooldownTime) return;

      lastWheelTime = now;

      if (
        (e.key === "ArrowDown" || e.key === "PageDown") &&
        currentSection < totalSections - 1
      ) {
        setIsSectionLoaded(false);
        setIsTransitioning(true);
        setTimeout(() => {
          setCurrentSection((current) => current + 1);
          setIsTransitioning(false);
        }, 500);
      } else if (
        (e.key === "ArrowUp" || e.key === "PageUp") &&
        currentSection > 0
      ) {
        setIsSectionLoaded(false);
        setIsTransitioning(true);
        setTimeout(() => {
          setCurrentSection((current) => current - 1);
          setIsTransitioning(false);
        }, 500);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [
    currentSection,
    totalSections,
    isMobile,
    isSectionLoaded,
    isTransitioning,
  ]);

  // Ensures section is fully loaded before allowing new scroll
  useEffect(() => {
    const loadTimeout = setTimeout(() => {
      setIsSectionLoaded(true);
    }, 700); // Adjust based on animation duration

    return () => clearTimeout(loadTimeout);
  }, [currentSection]);

  // Add dot navigation for desktop view
  const renderDotNavigation = () => {
    if (isMobile) return null;

    return (
      <div className="fixed right-8 p-2 rounded-full top-1/2 z-50  backdrop-blur-md ">
        <div className="flex flex-col space-y-4">
          {sectionData.map((section, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSection === index ? "bg-blue-700 w-3 h-3" : "bg-gray-400"
              }`}
              onClick={() => setCurrentSection(index)}
              aria-label={`Go to ${section.name} section`}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <>
      {/* Navbar - only show after first section */}
      {currentSection > 0 && <Navbar showNavbar={true} />}

      {/* Dot Navigation */}
      {renderDotNavigation()}

      {isMobile ? (
        // Mobile View: Standard scrolling layout
        <div className="w-full">
          <div className="w-full relative">
            <IntroSection />
          </div>
          <div className="w-full relative">
            <AboutSection />
          </div>
          <div className="w-full relative">
            <OurServicesSections />
          </div>
          <div className="w-full h-screen flex items-center justify-center relative overflow-hidden">
            <ClientsSection />
          </div>
          <div className="w-full relative  flex items-center justify-center">
            <ContactUsSection />
          </div>
        </div>
      ) : (
        // Desktop View: Animated section transitions
        <div className="fixed-sections-container h-screen w-full overflow-hidden">
          {/* First section is always rendered at the bottom layer */}
          <div className="fixed top-0 left-0 w-full h-full">{sections[0]}</div>

          {/* Animated sections that slide up from bottom */}
          {sections.slice(1).map((section, index) => {
            const sectionIndex = index + 1;

            return (
              <AnimatePresence key={sectionIndex} mode="wait">
                {currentSection === sectionIndex && (
                  <motion.div
                    className="fixed top-0 left-0 w-full h-full h-[80vh]"
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "100%" }}
                    transition={{
                      duration: 0.6,
                      ease: "easeOut",
                    }}
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
