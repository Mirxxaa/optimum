import React from "react";
import Marquee from "react-fast-marquee";
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

const clientLogos = [
  { id: 1, image: Client1, alt: "Beta Consultant" },
  { id: 2, image: Client2, alt: "Connect" },
  { id: 3, image: Client3, alt: "Elenjical" },
  { id: 4, image: Client4, alt: "G" },
  { id: 5, image: Client5, alt: "GRC" },
  { id: 6, image: Client6, alt: "Info" },
  { id: 7, image: Client7, alt: "Meril" },
  { id: 8, image: Client8, alt: "Remote" },
  { id: 9, image: Client9, alt: "Smart" },
  { id: 10, image: Client10, alt: "Teamed" },
  { id: 11, image: Client11, alt: "Zafran Valley" },
];

const ClientSlider = () => {
  return (
    <div className="w-full ">
      <Marquee
        speed={50}
        loop={0}
        gradient={false}
        pauseOnHover={true}
        className="flex items-center"
      >
        {clientLogos.map((client) => (
          <div
            key={client.id}
            className="flex items-center justify-center mx-6"
          >
            <img
              src={client.image}
              alt={client.alt}
              className="h-10 sm:h-12 md:h-16 w-auto drop-shadow-md"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default ClientSlider;
