import React from "react";
import logo from "../../assets/Logo/NavLogo.png";

const FooterSection = () => {
  return (
    <div>
      <footer className="bg-[#1974B8] text-white  py-10 px-6 md:px-16">
        <div className=" mx-auto flex flex-col md:flex-row items-center md:items-start justify-between space-y-6 md:space-y-0">
          <div className="flex flex-col items-center md:items-start">
            <img src={logo} alt="Company Logo" className="w-80 mb-4" />
          </div>
          <div className="w-full md:w-1/3">
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
      </footer>
      <div className="text-center text-sm p-4 bg-[#1974B8] text-white">
        All Rights Reserved to | Optimum Business Solutions
      </div>
    </div>
  );
};

export default FooterSection;
