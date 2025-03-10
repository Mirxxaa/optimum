import React, { useRef, useState } from "react";
import Marquee from "react-fast-marquee";

const flagsData = [
  {
    id: 1,
    name: "Saudi Arabia",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Flag_of_Saudi_Arabia.svg/800px-Flag_of_Saudi_Arabia.svg.png",
  },
  {
    id: 2,
    name: "India",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png",
  },
  {
    id: 3,
    name: "UAE",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_United_Arab_Emirates.svg",
  },
  {
    id: 4,
    name: "Tunisia",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/ce/Flag_of_Tunisia.svg",
  },
  {
    id: 5,
    name: "USA",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Flag_of_the_United_States_%28Pantone%29.svg/255px-Flag_of_the_United_States_%28Pantone%29.svg.png",
  },
  {
    id: 6,
    name: "China",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/800px-Flag_of_the_People%27s_Republic_of_China.svg.png",
  },
  {
    id: 7,
    name: "UK",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg",
  },
];

const CountrySlider = () => {
  return (
    <div className="  w-1/2 m-auto">
      <Marquee direction="right">
        {flagsData.map((flag) => (
          <img
            key={flag.id}
            src={flag.image}
            alt={flag.name}
            className="h-8 md:h-10 lg:h-12 xl:h-14 mx-16"
          />
        ))}
      </Marquee>
    </div>
  );
};

export default CountrySlider;
