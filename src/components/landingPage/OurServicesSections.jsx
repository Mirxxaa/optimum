import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const OurServicesSection = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [expandedDescriptions, setExpandedDescriptions] = useState({});
  const sliderRef = useRef(null);

  const navigate = useNavigate();

  // Services data
  const services = [
    {
      id: 1,
      title: "Professional Services",
      description:
        "Our Professional Services offer customized solutions designed to enhance your strategies, improve operational efficiency, and foster sustainable growth for your business. ",
      image:
        "https://media.istockphoto.com/id/1322158065/photo/business-people-contract-agreement-was-signed-co-investment-business.jpg?s=612x612&w=0&k=20&c=QE_ydA8qCzFkzAuTmzoCcQNg6nyKEBULRnlzp7Xihtc=",
      link: "#",
    },
    {
      id: 2,
      title: "Manpower Solutions",
      description:
        "Our manpower solutions provide you with skilled and dependable talent tailored to your business requirements. We focus on enhancing operational efficiency and driving success by connecting you with qualified professionals within KSA & internationally.",
      image:
        "https://www.aleiman.ae/wp-content/uploads/2023/06/manpower-supply.jpg",
      link: "#",
    },
    {
      id: 3,
      title: "Executive Recruitment",
      description:
        "Our Executive Recruitment services specialize in identifying and securing high-caliber leaders to boost your organization's success and foster growth. ",
      image:
        "https://media.istockphoto.com/id/1359838986/photo/the-manager-is-reading-the-resume-and-is-interviewing-the-new-employee-negotiating-business.jpg?s=612x612&w=0&k=20&c=x6gpp9jg1zb0rJ3Xnvor4dZT8-mAGQ4XAza4y3cN_-w=",
      link: "#",
    },
    {
      id: 4,
      title: "Recruitment as a Services",
      description:
        "Our Recruitment as a Service connects businesses with highly qualified candidates, delivering the right talent for each position. We streamline the hiring process by utilizing advanced strategies and industry expertise to identify and engage top-tier professionals. ",
      image:
        "https://jobs.heise.de/fileadmin/user_upload/product_management.png",
      link: "#",
    },
    {
      id: 5,
      title: "Talent Assessment",
      description:
        "Our Talent Assessment services objectively evaluate candidates' skills and potential, aligning them with your organization's specific requirements. By utilizing a comprehensive set of assessment tools, we identify the best matches for your team, enhancing overall productivity and ensuring a strong cultural fit.",
      image:
        "https://media.licdn.com/dms/image/v2/D4D12AQFnqwPO4WP22w/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1686671222852?e=2147483647&v=beta&t=yfLoeU4L4Im2Ah3EnTOb5_8V1D8Rl9oNY60LoF_R6_M",
      link: "#",
    },
    {
      id: 6,
      title: "Payroll as a Services",
      description:
        "Our Payroll as a Service offers precise, timely, and compliant payroll processing, enabling you to concentrate on business growth. We handle all aspects of payroll management, ensuring adherence to regulations and minimizing the risk of errors.",
      image:
        "https://paybooks.in/wp-content/uploads/2020/04/Glossary-of-100-Payroll-Terms-in-India.png",
      link: "#",
    },
  ];

  // Helper function to truncate text and return first 25 words
  const truncateText = (text, wordCount = 25) => {
    const words = text.split(" ");
    if (words.length <= wordCount) return text;
    return words.slice(0, wordCount).join(" ") + "...";
  };

  // Toggle description expansion
  const toggleDescription = (id) => {
    setExpandedDescriptions((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

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
    <div className="w-full h-[80vh]  lg:absolute md:absolute sm:absolute bottom-0 rounded-t-4xl flex items-center justify-center py-4 bg-white">
      <div className="w-full mx-auto h-screen flex flex-col">
        <div className="w-full h-full absolute top-0 mt-16">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl mb-8 text-blue-700 font-semibold tracking-wider text-center"
          >
            Our Services
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative px-4 md:px-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              ref={sliderRef}
              className={`flex gap-8 overflow-x-auto md:px-12 lg:px-12 sm:px-0 p-4 lg:p-0 sm:p-0 md-p-0 ${
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
                  className="w-full lg:w-[400px] md:w-[360px] sm:w-[320px] lg:min-w-[320px] md:min-w-[280px] sm:min-w-[240px] flex-none select-none bg-blue-700 hover:bg-[#BBA14E] rounded-4xl overflow-hidden transition-all duration-500 ease-out"
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
                      <div className="text-white/80 text-sm select-none mt-2">
                        {expandedDescriptions[service.id] ? (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            transition={{ duration: 0.3 }}
                          >
                            <p>{service.description}</p>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                toggleDescription(service.id);
                              }}
                              className="text-blue-300 hover:text-blue-200 font-medium mt-1 cursor-pointer focus:outline-none transition-colors duration-300"
                            >
                              Read less
                            </button>
                          </motion.div>
                        ) : (
                          <motion.div>
                            <p>{truncateText(service.description)}</p>
                            {service.description.split(" ").length > 25 && (
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  toggleDescription(service.id);
                                }}
                                className="text-blue-300 hover:text-blue-200 font-medium mt-1 cursor-pointer focus:outline-none transition-colors duration-300"
                              >
                                Read more
                              </button>
                            )}
                          </motion.div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="p-5">
                    <a
                      href={service.link}
                      className="text-white select-none font-medium hover:underline flex items-center transition-all duration-300 ease-out hover:translate-x-1"
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
            </motion.div>

            {/* Navigation arrows with enhanced animations */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={scrollLeftHandler}
                className="w-12 h-12 rounded-full bg-blue-700 text-white flex items-center justify-center shadow-md hover:bg-[#BBA14E] cursor-pointer transition-all duration-300 ease-out hover:scale-110 focus:outline-none"
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
                className="w-12 h-12 rounded-full bg-blue-700 text-white flex items-center justify-center shadow-md hover:bg-[#BBA14E] cursor-pointer transition-all duration-300 ease-out hover:scale-110 focus:outline-none"
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
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default OurServicesSection;
