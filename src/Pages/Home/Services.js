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
      description: "I am good boy",
      img: fluride,
    },
    {
      _id: 2,
      name: "Cavity Treatment",
      description: "I am bad boy",
      img: cavity,
    },
    {
      _id: 3,
      name: "Whitening Treatment",
      description: "I am good boy",
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
