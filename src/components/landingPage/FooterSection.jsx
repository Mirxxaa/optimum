import React from "react";
import logo from "../../assets/Logo/NavLogo.png";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaInstagramSquare,
} from "react-icons/fa";

const FooterSection = () => {
  return (
    <div>
      <footer className="bg-blue-700 text-white  py-10 px-6 md:px-16">
        <div className=" mx-auto flex flex-col md:flex-row items-center md:items-start  justify-between space-y-6 md:space-y-0">
          <div className=" flex items-center justify-between  w-full">
            <div className="flex flex-col items-center md:items-start">
              <img src={logo} alt="Company Logo" className="w-60 " />
              <div className="flex w-full text-3xl justify-center items-center gap-4 mt-8">
                <a href="">
                  <FaLinkedin />
                </a>
                <a href="">
                  <FaFacebookSquare />
                </a>
                <a href="">
                  <FaInstagramSquare />
                </a>
              </div>
            </div>
            <div className="">
              <div>
                <div className="flex flex-col gap-4">
                  <h2 className="font-bold mb-2 text-lg">Our Office</h2>
                  <div>
                    <h3 className="font-semibold mb-1">Riyadh</h3>
                    <p>P.O. Box: 6633, Riyadh, Kingdome of Saudi Arabia</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p>+966 +966 54 964 1403</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p>connect@optibsc.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 ">
              <h3 className="text-xl font-semibold mb-4 text-center md:text-left">
                Subscribe to Our Newsletter
              </h3>
              <form className="flex flex-col sm:flex-row items-center gap-4">
                <input
                  type="email"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 bg-white focus:ring-white text-black transition-all duration-300"
                  placeholder="Enter your email"
                  required
                />
                <button
                  type="submit"
                  className="bg-white text-[#1974B8] py-3 px-6 rounded-lg font-bold hover:bg-[#BBA14E] hover:text-white cursor-pointer transition duration-300"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </footer>
      <div className="text-center text-sm p-4 bg-blue-700 text-white">
        All Rights Reserved to | Optimum Business Solutions
      </div>
    </div>
  );
};

export default FooterSection;
