import React from "react";
import ClientSlider from "../ClientSlider";
import CountrySlider from "../CountrySlider";
import { useTranslation } from "react-i18next";

const OurClients = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full lg:h-[80vh] md:h-[80vh] sm:h-[80vh] h-[85vh] absolute bottom-0 rounded-t-4xl bg-white flex flex-col justify-center items-center">
      <div className=" flex flex-col items-center text-center mb-25 w-full">
        <h2 className="text-blue-700 font-semibold text-4xl m-4 ">
          {" "}
          {t("ourGlobalReach")}
        </h2>
        <p className="text-gray-600 lg:w-1/2 w-[80vw]   font-semibold">
          {t("OurGlobalReachDescription")}
        </p>
        <div className="h-1 rounded-full bg-[#BBA14E] w-1/2 mx-auto mt-4  "></div>
      </div>
      <div className=" flex flex-col items-center gap-8 ">
        <div className="w-1/2">
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
