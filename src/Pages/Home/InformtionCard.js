import React from "react";

const InformtionCard = ({ img, title, backg }) => {
  return (
    <div className={`card lg:card-side bg-base-100 shadow-xl ${backg}`}>
      <figure>
        <img src={img} alt="Album" className="p-2" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-white">{title}</h2>
        <p className="text-white">
          Click the button to listen on Spotiwhy app.
        </p>
      </div>
    </div>
  );
};

export default InformtionCard;
