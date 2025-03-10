import React from "react";
import Logo from "../assets/Logo/Logo_landing.png";

const logo = () => {
  return (
    <div className="Logo">
      <img src={Logo} alt="Logo" className="w-60" />
    </div>
  );
};

export default logo;
