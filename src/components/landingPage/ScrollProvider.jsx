import React, { createContext, useContext, useState, useEffect } from "react";

const ScrollContext = createContext();

export const useScrollContext = () => useContext(ScrollContext);

const ScrollProvider = ({ children }) => {
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  // Track scroll direction
  const [scrollDirection, setScrollDirection] = useState("down");
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }

      setLastScrollY(currentScrollY);

      // Prevent multiple scroll triggers
      if (!isScrolling) {
        setIsScrolling(true);

        // Calculate which section should be visible based on scroll position
        const windowHeight = window.innerHeight;
        const scrollPosition = window.scrollY;
        const sectionIndex = Math.round(scrollPosition / windowHeight);

        setCurrentSection(sectionIndex);

        setTimeout(() => {
          setIsScrolling(false);
        }, 1000);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isScrolling]);

  // Handle keyboard and wheel events
  useEffect(() => {
    const handleWheel = (e) => {
      if (isScrolling) return;

      e.preventDefault();

      const direction = e.deltaY > 0 ? "down" : "up";
      setScrollDirection(direction);

      if (
        direction === "down" &&
        currentSection < document.querySelectorAll(".section").length - 1
      ) {
        setCurrentSection((prev) => prev + 1);
      } else if (direction === "up" && currentSection > 0) {
        setCurrentSection((prev) => prev - 1);
      }

      setIsScrolling(true);
      setTimeout(() => setIsScrolling(false), 1000);
    };

    const mainElement = document.querySelector("main");
    if (mainElement) {
      mainElement.addEventListener("wheel", handleWheel, { passive: false });
    }

    return () => {
      if (mainElement) {
        mainElement.removeEventListener("wheel", handleWheel);
      }
    };
  }, [currentSection, isScrolling]);

  return (
    <ScrollContext.Provider
      value={{
        currentSection,
        setCurrentSection,
        isScrolling,
        scrollDirection,
      }}
    >
      {children}
    </ScrollContext.Provider>
  );
};

export default ScrollProvider;
