import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper/modules";
import { RxArrowTopRight } from "react-icons/rx";

// Data from the provided services array
const services = [
  {
    id: 1,
    title: "Professional Services",
    description:
      "We build responsive and scalable web applications tailored to your needs.",
    image:
      "https://media.istockphoto.com/id/1322158065/photo/business-people-contract-agreement-was-signed-co-investment-business.jpg?s=612x612&w=0&k=20&c=QE_ydA8qCzFkzAuTmzoCcQNg6nyKEBULRnlzp7Xihtc=",
    link: "#",
  },
  {
    id: 2,
    title: "Manpower Solutions",
    description:
      "Crafting intuitive and high-performance mobile apps for iOS and Android.",
    image:
      "https://www.aleiman.ae/wp-content/uploads/2023/06/manpower-supply.jpg",
    link: "#",
  },
  {
    id: 3,
    title: "Executive Recruitment",
    description:
      "Designing user-friendly interfaces that enhance user experience.",
    image:
      "https://media.istockphoto.com/id/1359838986/photo/the-manager-is-reading-the-resume-and-is-interviewing-the-new-employee-negotiating-business.jpg?s=612x612&w=0&k=20&c=x6gpp9jg1zb0rJ3Xnvor4dZT8-mAGQ4XAza4y3cN_-w=",
    link: "#",
  },
  {
    id: 4,
    title: "Executive Recruitment",
    description:
      "Designing user-friendly interfaces that enhance user experience.",
    image:
      "https://media.istockphoto.com/id/1359838986/photo/the-manager-is-reading-the-resume-and-is-interviewing-the-new-employee-negotiating-business.jpg?s=612x612&w=0&k=20&c=x6gpp9jg1zb0rJ3Xnvor4dZT8-mAGQ4XAza4y3cN_-w=",
    link: "#",
  },
  {
    id: 5,
    title: "Executive Recruitment",
    description:
      "Designing user-friendly interfaces that enhance user experience.",
    image:
      "https://media.istockphoto.com/id/1359838986/photo/the-manager-is-reading-the-resume-and-is-interviewing-the-new-employee-negotiating-business.jpg?s=612x612&w=0&k=20&c=x6gpp9jg1zb0rJ3Xnvor4dZT8-mAGQ4XAza4y3cN_-w=",
    link: "#",
  },
];

const ActiveSlider = () => {
  return (
    <div className="flex items-center justify-center flex-col bg-white py-16">
      <Swiper
        breakpoints={{
          340: {
            slidesPerView: 1, // Show 1 card on small screens
            spaceBetween: 5, // Reduce space between cards on mobile
          },
          700: {
            slidesPerView: 1, // Show 1 card on medium screens
            spaceBetween: 15, // Add a small space between cards on medium screens
          },
          1024: {
            slidesPerView: 3, // Show 3 cards on larger screens
            spaceBetween: 30, // Add space between cards on large screens
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true, // Makes pagination dots clickable
        }}
        modules={[FreeMode, Pagination]}
        className="w-full lg:max-w-[80%]"
      >
        {services.map((service) => (
          <SwiperSlide key={service.id}>
            <div className="flex flex-col gap-6 group relative shadow-lg text-white rounded-xl px-6 py-8 h-[250px] w-[215px] lg:h-[400px] lg:w-[350px] overflow-hidden cursor-pointer">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${service.image})` }}
              />
              {/* Blue overlay fading from top */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#143d59] to-transparent opacity-40" />
              <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
              <div className="relative flex flex-col gap-3">
                <h1 className="text-xl lg:text-2xl">{service.title}</h1>
                <p className="lg:text-[18px]">{service.description}</p>
              </div>
              <RxArrowTopRight className="absolute bottom-5 left-5 w-[35px] h-[35px] text-white group-hover:text-[#143d59] group-hover:rotate-45 duration-100" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ActiveSlider;
