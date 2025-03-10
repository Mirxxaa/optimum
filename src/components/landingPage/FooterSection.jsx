import React from "react";

const FooterSection = () => {
  return (
    <footer className="bg-[#1974B8] text-white py-10 px-6 md:px-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between space-y-6 md:space-y-0">
        <div className="flex flex-col items-center md:items-start">
          <img src="/logo.png" alt="Company Logo" className="w-40 mb-4" />
          <p className="text-lg text-center md:text-left">
            Elevate your experience with our premium services.
          </p>
        </div>
        <div className="w-full md:w-1/3">
          <h3 className="text-xl font-semibold mb-4 text-center md:text-left">
            Subscribe to Our Newsletter
          </h3>
          <form className="flex flex-col sm:flex-row items-center gap-4">
            <input
              type="email"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-white text-black"
              placeholder="Enter your email"
              required
            />
            <button
              type="submit"
              className="bg-white text-[#1974B8] py-3 px-6 rounded-lg font-bold hover:bg-gray-200 transition duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
