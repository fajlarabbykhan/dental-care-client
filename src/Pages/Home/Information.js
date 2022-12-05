import React from "react";
import clock from "../../assets/icons/clock.svg";
import marker from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";
import InformtionCard from "./InformtionCard";

const Information = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 px-12 gap-5">
      <InformtionCard
        className=""
        img={clock}
        title="Opening Hours"
        backg="   bg-gradient-to-r from-secondary to-primary"
      ></InformtionCard>
      <InformtionCard
        img={marker}
        title="Our Location"
        backg="bg-gradient-to-r from-[#5651e5] to-[#709dff] "
      ></InformtionCard>
      <InformtionCard
        img={phone}
        title="Contact Us"
        backg="   bg-gradient-to-r from-primary to-secondary"
      ></InformtionCard>
    </div>
  );
};

export default Information;
