import React, { useState, useRef } from "react";

const ServicesCardSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  // Sample service cards data
  const services = [
    {
      id: 1,
      title: "Professional Services",
      description:
        "Custom websites built with the latest technologies to deliver exceptional user experiences.",
      image:
        "https://media.istockphoto.com/id/1322158065/photo/business-people-contract-agreement-was-signed-co-investment-business.jpg?s=612x612&w=0&k=20&c=QE_ydA8qCzFkzAuTmzoCcQNg6nyKEBULRnlzp7Xihtc=",
    },
    {
      id: 2,
      title: "Manpower Solutions",
      description:
        "Native and cross-platform mobile applications for iOS and Android devices.",
      image:
        "https://www.aleiman.ae/wp-content/uploads/2023/06/manpower-supply.jpg",
    },
    {
      id: 3,
      title: "Executive Recruitment",
      description:
        "User-centered design solutions that enhance usability and visual appeal.",
      image:
        "https://media.istockphoto.com/id/1359838986/photo/the-manager-is-reading-the-resume-and-is-interviewing-the-new-employee-negotiating-business.jpg?s=612x612&w=0&k=20&c=x6gpp9jg1zb0rJ3Xnvor4dZT8-mAGQ4XAza4y3cN_-w=",
    },
    {
      id: 4,
      title: "Recruitment Services",
      description:
        "Strategic marketing campaigns to boost your online presence and drive conversions.",
      image:
        "https://jobs.heise.de/fileadmin/user_upload/product_management.png",
    },
    {
      id: 5,
      title: "Talent Assessment",
      description:
        "High-quality content that engages your audience and tells your brand story.",
      image:
        "https://media.licdn.com/dms/image/v2/D4D12AQFnqwPO4WP22w/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1686671222852?e=2147483647&v=beta&t=yfLoeU4L4Im2Ah3EnTOb5_8V1D8Rl9oNY60LoF_R6_M",
    },
    {
      id: 6,
      title: "Payroll Services",
      description:
        "Improve your search engine rankings and drive more organic traffic to your website.",
      image:
        "https://paybooks.in/wp-content/uploads/2020/04/Glossary-of-100-Payroll-Terms-in-India.png",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= services.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? services.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12">
      <div className="relative">
        {/* Slider container */}
        <div className="overflow-hidden">
          <div
            ref={sliderRef}
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
          >
            {services.map((service) => (
              <div
                key={service.id}
                className="relative flex-none w-full sm:w-1/2 md:w-1/3 p-3 transition-all duration-300"
              >
                <div className="bg-white select-none rounded-lg  border border-gray-200 h-full overflow-hidden group">
                  <div className="relative h-64">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-all duration-500 group-hover:blur-sm"
                    />
                    {/* Overlay that appears on hover */}
                    <div className="absolute inset-0 bg-[#1974B8] bg-opacity-70 opacity-0 group-hover:opacity-70 flex items-center justify-center transition-all duration-500">
                      <div className="text-white text-center p-6">
                        <h3 className="text-xl font-bold mb-2">
                          {service.title}
                        </h3>
                        <p>{service.description}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-bold">{service.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation buttons */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-0 md:-translate-x-6 bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg z-10 hover:bg-[#bba14e] hover:text-white cursor-pointer transition-all duration-300"
          aria-label="Previous slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-0 md:translate-x-6 bg-white  rounded-full w-12 h-12 flex items-center justify-center shadow-lg z-10 hover:bg-[#bba14e] hover:text-white cursor-pointer transition-all duration-300"
          aria-label="Next slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Dots indicator */}
        <div className="flex justify-center mt-6">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`mx-1 w-3 h-3 rounded-full  cursor-pointer ${
                index === currentIndex ? "bg-[#bba14e]" : "bg-gray-300"
              } transition-colors duration-300`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesCardSlider;
