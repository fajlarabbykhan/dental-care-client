import React from "react";

const Service = ({ service }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-2xl shadow-gray-500	">
      <figure className="px-10 pt-10">
        <img src={service.img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{service.name}</h2>
        <p>{service.description}</p>
        <div className="card-actions">
          <button className="btn btn-primary  text-white font-bold bg-gradient-to-r from-[#5651e5] to-[#709dff] ">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Service;
