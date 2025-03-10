import React from "react";
import Client1 from "../assets/Logo/Clients/Beta.png";
import Client2 from "../assets/Logo/Clients/Connect.png";
import Client3 from "../assets/Logo/Clients/Elenjical.png";
import Client4 from "../assets/Logo/Clients/G.png";
import Client5 from "../assets/Logo/Clients/GRC.png";
import Client6 from "../assets/Logo/Clients/Info.png";
import Client7 from "../assets/Logo/Clients/Meril.png";
import Client8 from "../assets/Logo/Clients/Remote.png";
import Client9 from "../assets/Logo/Clients/Smart.png";
import Client10 from "../assets/Logo/Clients/Teamed.png";
import Client11 from "../assets/Logo/Clients/ZafranValley.png";
import Marquee from "react-fast-marquee";

const ClientSlider = () => {
  return (
    <div>
      <Marquee speed={100} className="flex gap-50">
        <div className="flex items-center gap-30">
          <div className=" flex items-center justify-center ">
            <img src={Client1} alt="Beta Consultant" className="h-25 w-auto" />{" "}
          </div>
          <div className=" flex items-center justify-center ">
            {" "}
            <img src={Client2} alt="Client Logo" className="h-25 w-auto" />{" "}
          </div>
          <div className=" flex items-center justify-center ">
            {" "}
            <img src={Client3} alt="Client Logo" className="h-25 w-auto" />{" "}
          </div>
          <div className=" flex items-center justify-center ">
            {" "}
            <img src={Client4} alt="Client Logo" className="h-25 w-auto" />{" "}
          </div>
          <div className=" flex items-center justify-center ">
            {" "}
            <img src={Client5} alt="Client Logo" className="h-25 w-auto" />{" "}
          </div>
          <div className=" flexitems-center justify-center ">
            {" "}
            <img src={Client6} alt="Client Logo" className="h-25 w-auto" />{" "}
          </div>
          <div className=" flex items-center justify-center ">
            {" "}
            <img src={Client7} alt="Client Logo" className="h-25 w-auto" />{" "}
          </div>
          <div className=" flex items-center justify-center ">
            {" "}
            <img src={Client8} alt="Client Logo" className="h-25 w-auto" />{" "}
          </div>
          <div className=" flex  items-center justify-center ">
            {" "}
            <img src={Client9} alt="Client Logo" className="h-25 w-auto" />{" "}
          </div>
          <div className=" flex   items-center justify-center ">
            {" "}
            <img
              src={Client10}
              alt="Client Logo"
              className="h-25 w-auto"
            />{" "}
          </div>
          <div className=" flex    items-center justify-center ">
            {" "}
            <img
              src={Client11}
              alt="Client Logo"
              className="h-25 w-auto"
            />{" "}
          </div>
        </div>
      </Marquee>
    </div>
  );
};

export default ClientSlider;
