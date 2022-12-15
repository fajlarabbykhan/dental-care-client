import React from "react";
import Service from "./Service";
import fluride from "../../assets/images/fluoride.png";
import cavity from "../../assets/images/cavity.png";
import whiting from "../../assets/images/whitening.png";

const Services = () => {
  const services = [
    {
      _id: 1,
      name: "Floride Treatment",
      description:
        "Fluoride treatments are typically professional treatments containing a high concentration of fluoride that a dentist or hygienist will apply to a person's teeth to improve health and reduce the risk of cavities",
      img: fluride,
    },
    {
      _id: 2,
      name: "Cavity Treatment",
      description:
        "Fillings, also called restorations, are the main treatment option when decay has progressed beyond the earliest stage.",
      img: cavity,
    },
    {
      _id: 3,
      name: "Whitening Treatment",
      description:
        "eeth whitening involves bleaching your teeth to make them lighter. It can't make your teeth brilliant white, but it can lighten the existing colour by several shades.",
      img: whiting,
    },
  ];
  return (
    <div className="px-12 my-12">
      <div className="text-center mb-10">
        <p className="text-primary text-xl font-bold uppercase">Our Services</p>
        <p className="text-4xl"> Services we provide</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((service) => (
          <Service key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
