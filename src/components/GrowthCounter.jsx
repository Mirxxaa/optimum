import React, { useState, useEffect, useRef } from "react";

const GrowthCounter = () => {
  const [count, setCount] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const counterRef = useRef(null); // Reference to the counter section

  // Function to start counting
  const startCounting = () => {
    let counter = 0;
    const interval = setInterval(() => {
      if (counter < 25) {
        counter++;
        setCount(counter);
      } else {
        clearInterval(interval); // Stop the interval once it reaches 200
      }
    }, 60); // Speed of the counter (in milliseconds)
  };

  // Set up Intersection Observer to detect when the section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInView) {
          setIsInView(true);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [isInView]);

  // Start counting when the section is in view
  useEffect(() => {
    if (isInView) {
      startCounting();
    }
  }, [isInView]);

  return (
    <div ref={counterRef} className="counter-container ">
      <h1 className="lg:text-6xl md:text-4xl sm:text-xl text-3xl text-blue-700 font-semibold">
        {count}%{" "}
      </h1>
    </div>
  );
};

export default GrowthCounter;
