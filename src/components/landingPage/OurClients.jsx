import React from "react";
import ClientSlider from "../ClientSlider";
import CountrySlider from "../CountrySlider";

const OurClients = () => {
  return (
    <div className="w-full lg:h-[80vh] md:h-[80vh] sm:h-[80vh] h-[85vh] absolute bottom-0 rounded-t-4xl bg-white flex flex-col justify-center items-center">
      <div className=" flex flex-col items-center text-center mb-25 w-full">
        <h2 className="text-blue-700 font-semibold text-4xl m-4 ">
          {" "}
          Our Global Reach
        </h2>
        <p className="text-gray-600 w-1/2  mb-2 font-semibold">
          Relied upon by businesses and organizations in Saudi Arabia and
          globally for dependable solutions and services that drive success and
          foster growth.
        </p>
        <div className="h-1 rounded-full bg-[#BBA14E] w-1/2 mx-auto my-4  "></div>
      </div>
      <div className=" flex flex-col gap-20">
        <div>
          <CountrySlider />
        </div>

        <div>
          <ClientSlider />
        </div>
      </div>
    </div>
  );
};

export default OurClients;
