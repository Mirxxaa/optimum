import React from "react";
import ClientSlider from "../ClientSlider";
import CountrySlider from "../CountrySlider";

const OurClients = () => {
  return (
    <div className="w-full h-screen bg-gradient-to-br from-[#D7F0FF] to-white flex flex-col justify-center items-center">
      <div className="text-black flex flex-col text-center mb-25 w-full">
        <h2 className="text-black font-semibold text-4xl m-4 ">
          {" "}
          Our Global Reach
        </h2>
        <p className="text-gray-600 mb-2 font-semibold">
          Trusted by businesses and organizations from around the world
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
