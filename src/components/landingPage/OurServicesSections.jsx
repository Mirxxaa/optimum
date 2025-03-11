import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const OurServicesSection = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const sliderRef = useRef(null);

  const navigate = useNavigate();

  // Services data
  const services = [
    {
      id: 1,
      title: "Professional Services",
      description:
        "Our Professional Services provide tailored solutions to optimize strategies, streamline processes, and drive sustainable growth for your business.",
      image:
        "https://media.istockphoto.com/id/1322158065/photo/business-people-contract-agreement-was-signed-co-investment-business.jpg?s=612x612&w=0&k=20&c=QE_ydA8qCzFkzAuTmzoCcQNg6nyKEBULRnlzp7Xihtc=",
      link: "#",
    },
    {
      id: 2,
      title: "Manpower Solutions",
      description:
        "Our Manpower services deliver skilled and reliable talent to meet your business needs, ensuring efficiency and success.",
      image:
        "https://www.aleiman.ae/wp-content/uploads/2023/06/manpower-supply.jpg",
      link: "#",
    },
    {
      id: 3,
      title: "Executive Recruitment",
      description:
        "Our Executive Recruitment services help you find top-tier leaders to drive your organization's success and growth.",
      image:
        "https://media.istockphoto.com/id/1359838986/photo/the-manager-is-reading-the-resume-and-is-interviewing-the-new-employee-negotiating-business.jpg?s=612x612&w=0&k=20&c=x6gpp9jg1zb0rJ3Xnvor4dZT8-mAGQ4XAza4y3cN_-w=",
      link: "#",
    },
    {
      id: 4,
      title: "Recruitment Services",
      description:
        "Our Recruitment Services connect businesses with qualified candidates, ensuring the right talent for every role.",
      image:
        "https://jobs.heise.de/fileadmin/user_upload/product_management.png",
      link: "#",
    },
    {
      id: 5,
      title: "Talent Assessment",
      description:
        "Our Talent Assessment services evaluate candidates' skills and potential, ensuring the best fit for your organization's needs.",
      image:
        "https://media.licdn.com/dms/image/v2/D4D12AQFnqwPO4WP22w/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1686671222852?e=2147483647&v=beta&t=yfLoeU4L4Im2Ah3EnTOb5_8V1D8Rl9oNY60LoF_R6_M",
      link: "#",
    },
    {
      id: 6,
      title: "Payroll Services",
      description:
        "Our Payroll Services ensure accurate, timely, and compliant payroll processing, allowing you to focus on growing your business.",
      image:
        "https://paybooks.in/wp-content/uploads/2020/04/Glossary-of-100-Payroll-Terms-in-India.png",
      link: "#",
    },
  ];

  // Handle mouse events for dragging with improved smoothness
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
    // Add a dragging class for smoother visual feedback
    sliderRef.current.classList.add("dragging");
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    // Remove the dragging class when released
    if (sliderRef.current) {
      sliderRef.current.classList.remove("dragging");
    }
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // Slightly lower multiplier for smoother movement
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  // Handle touch events for mobile with improved smoothness
  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
    // Add a dragging class for smoother visual feedback
    sliderRef.current.classList.add("dragging");
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  // Navigation buttons
  const scrollLeftHandler = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  const scrollRightHandler = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };

  // Clean up event listeners
  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      const handleMouseLeave = () => {
        setIsDragging(false);
        slider.classList.remove("dragging");
      };

      slider.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        slider.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, []);

  return (
    <div className="w-full h-screen flex items-center justify-center py-4 bg-gradient-to-br from-[#D7F0FF] to-white">
      <div className="w-full mx-auto h-screen mt-60">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl text-[#1974B8] font-semibold mb-4 tracking-wider text-center"
        >
          Our Services
        </motion.h2>

        <motion.dev
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative px-4 md:px-8"
        >
          <motion.dev
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            ref={sliderRef}
            className={`flex gap-6 overflow-x-auto py-6 px-2 ${
              isDragging ? "cursor-grabbing" : "cursor-grab"
            } transition-all duration-300 ease-out`}
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch",
              scrollBehavior: "smooth",
            }}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleMouseUp}
            onTouchMove={handleTouchMove}
          >
            {services.map((service) => (
              <div
                key={service.id}
                className="min-w-[320px] flex-none select-none bg-[#1974B8] hover:bg-[#BBA14E] rounded-lg shadow-lg overflow-hidden transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="relative h-64 overflow-hidden select-none">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t select-none from-black/70 to-transparent flex flex-col justify-end p-6">
                    <h3 className="text-white text-xl select-none font-bold">
                      {service.title}
                    </h3>
                    <p className="text-white/80 text-sm select-none mt-2">
                      {service.description}
                    </p>
                  </div>
                </div>
                <div className="p-5">
                  <a
                    href={service.link}
                    className="text-white select-none  font-medium hover:underline flex items-center transition-all duration-300 ease-out hover:translate-x-1"
                    onClick={() => navigate("/services")}
                  >
                    Learn More
                    <svg
                      className="w-4 h-4 ml-1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </motion.dev>

          {/* Navigation arrows with enhanced animations */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={scrollLeftHandler}
              className="w-12 h-12 rounded-full bg-[#1974B8] text-white flex items-center justify-center shadow-md hover:bg-[#BBA14E] cursor-pointer transition-all duration-300 ease-out hover:scale-110 focus:outline-none"
              aria-label="Previous"
            >
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <button
              onClick={scrollRightHandler}
              className="w-12 h-12 rounded-full bg-[#1974B8] text-white flex items-center justify-center shadow-md hover:bg-[#BBA14E] cursor-pointer transition-all duration-300 ease-out hover:scale-110 focus:outline-none"
              aria-label="Next"
            >
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </motion.dev>
      </div>
    </div>
  );
};

export default OurServicesSection;
