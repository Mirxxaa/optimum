// src/Pages/Home.jsx
import { section } from "framer-motion/client";
import React from "react";
import ManpowerImage from "../assets/Images/manpower.png";
import ServicesCardSlider from "../components/ServicesCardSlider";
import ProfessionalServicesImg from "../assets/Images/professional_services.png";
import AutoCounter from "../components/AutoCounter";
import ExecutiveRecruitment from "../assets/Images/Executive_Recruitment.png";
import RecruitmentServicesImage from "../assets/Images/Recruitment.png";
import TalentAssesment from "../assets/Images/TalentAssesment.png";
import payroll from "../assets/Images/payroll.png";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import FooterSection from "../components/landingPage/FooterSection";
const Services = () => {
  const handleClick = () => {
    navigate("/"); // This will navigate to /home
  };
  const navigate = useNavigate();
  return (
    <div className="h-screen">
      <section>
        <div
          className="absolute flex items-center m-12  z-100    hover:text-[#BBA14E]  cursor-pointer transition duration-200 text-[#1974B8]  rounded-full "
          onClick={handleClick}
        >
          <IoIosArrowBack /> Home
        </div>
        <div className="w-[80vw] m-auto  h-screen flex flex-col justify-center items-center">
          <div className="w-full">
            <div className="flex items-center  mb-4">
              <h1 className="text-6xl flex flex-nowrap w-1/2 font-semibold text-[#1974B8] ">
                OUR SERVICES
              </h1>
              <div className="h-1 w-full bg-[#BBA14E]"></div>
            </div>
            <p className="text-2xl">
              Steer Your Business Towards Success with Optimum Excellence
            </p>
          </div>
          <div>
            <ServicesCardSlider />
          </div>
        </div>
      </section>
      <section>
        <div className="h-auto  w-[80vw] m-auto">
          <div className="flex items-center justify-center gap-10   ">
            <div className="flex-1 flex flex-col">
              <h3 className="text-2xl font-semibold mb-4">
                Professional Services
              </h3>
              <p className="text-justify">
                At Optimum Business Solutions, we offer a range of professional
                services designed to help businesses thrive in today’s
                competitive environment. Our expert team provides tailored
                solutions in areas such as workforce management, compliance,
                strategic planning, and operational efficiency. Whether you are
                navigating local regulations or seeking to optimize business
                processes, our professional services are aimed at enhancing
                productivity, ensuring sustainability, and driving growth for
                businesses of all sizes.
              </p>
            </div>
            <div className="flex-1 flex items-center justify-center">
              <img src={ProfessionalServicesImg} alt="" className="w-100" />
            </div>
          </div>
          <div className="flex items-center justify-center gap-10 my-30 ">
            <div className="flex-1 flex items-center justify-center">
              <img src={ManpowerImage} alt="" className="w-100" />
            </div>
            <div className="flex-1 flex flex-col">
              <h3 className="text-2xl font-semibold mb-4">Manpower Supply</h3>
              <p className="text-justify">
                At Optimum Business Solutions, we provide manpower solutions to
                help businesses efficiently meet their workforce needs. Our
                comprehensive manpower services include recruitment, staffing,
                and workforce management, ensuring that you have the right
                talent at the right time. Whether you're looking for temporary,
                permanent, or specialized personnel, we offer flexible staffing
                options tailored to your business requirements. With a focus on
                compliance, quality, and efficiency, we help businesses build
                strong teams, increase productivity, and support sustainable
                growth.
              </p>
              <div className="flex flex-col my-4">
                <AutoCounter />
                <h4 className="text-xl font-semibold"> Dedicated Employees </h4>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-10 my-30  ">
            <div className="flex-1 flex flex-col">
              <h3 className="text-2xl font-semibold mb-4">
                Executive Recruitment
              </h3>
              <p className="text-justify">
                At Optimum Business Solutions, we specialize in Executive
                Recruitment services, providing our clients with access to
                top-tier leadership talent. Our expert team works closely with
                businesses to identify and attract senior-level executives who
                possess the skills, vision, and experience needed to drive
                organizational growth and success. Whether you're looking for a
                CEO, CFO, or other key leadership roles, we deliver customized
                recruitment solutions to meet your specific needs. Our thorough
                and strategic approach ensures that you find the right
                executives to lead your company towards its goals and
                objectives, while also aligning with your organizational
                culture.
              </p>
            </div>
            <div className="flex-1 flex items-center justify-center">
              <img src={ExecutiveRecruitment} alt="" className="w-100" />
            </div>
          </div>
          <div className="flex items-center justify-center gap-10 my-30 ">
            <div className="flex-1 flex items-center justify-center">
              <img src={RecruitmentServicesImage} alt="" className="w-100" />
            </div>
            <div className="flex-1 flex flex-col">
              <h3 className="text-2xl font-semibold mb-4">
                Recruitment Services
              </h3>
              <p className="text-justify">
                At Optimum Business Solutions, we offer comprehensive
                Recruitment Services to help businesses find the right talent
                for all levels of positions. Our team leverages extensive
                industry knowledge and a vast network to identify and recruit
                top candidates that align with your company's needs and culture.
                Whether you're looking for temporary, permanent, or specialized
                staff, we provide efficient and tailored recruitment solutions
                to ensure the success of your workforce.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-10 my-30  ">
            <div className="flex-1 flex flex-col">
              <h3 className="text-2xl font-semibold mb-4">Talent Assessment</h3>
              <p className="text-justify">
                At Optimum Business Solutions, we offer Talent Assessment
                services to help businesses evaluate and select the best
                candidates for their teams. Our assessments are designed to
                measure key skills, competencies, and cultural fit, ensuring
                that your hires not only meet the technical requirements of the
                role but also align with your organization's values. With our
                comprehensive approach, we help businesses make informed
                decisions, reduce turnover, and build high-performing teams.
              </p>
            </div>
            <div className="flex-1 flex items-center justify-center">
              <img src={TalentAssesment} alt="" className="w-100" />
            </div>
          </div>
          <div className="flex items-center justify-center gap-10 my-30 ">
            <div className="flex-1 flex items-center justify-center">
              <img src={payroll} alt="" className="w-100" />
            </div>
            <div className="flex-1 flex flex-col">
              <h3 className="text-2xl font-semibold mb-4">Payroll Services</h3>
              <p className="text-justify">
                At Optimum Business Solutions, our Payroll Services include
                complete management of employee compensation, tax deductions,
                benefits, and Government Fees compliance. We ensure that all
                necessary deductions are made, including social insurance,
                taxes, and other government-required fees, in accordance with
                local regulations. Our comprehensive service guarantees timely
                and accurate payroll processing, giving you peace of mind while
                we handle the complexities of payroll management and legal
                compliance.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="w-full max-h-[300px] h-[200px] my-20 bg-[#BBA14E] flex items-center justify-center">
          <div className="flex flex-col gap-4 ">
            <h3 className="text-4xl font-semibold text-white">
              Connect With Us?
            </h3>

            <button
              className="outline-2 outline-white text-white font-semibold transition-all duration-200 hover:bg-white hover:text-[#1974B8] px-4 py-2 cursor-pointer"
              onClick={() => navigate("/contact")}
            >
              Contact
            </button>
          </div>
        </div>
      </section>
      <section>
        <FooterSection />
      </section>
    </div>
  );
};

export default Services;
