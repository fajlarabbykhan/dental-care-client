import React from "react";

const Service = ({ service, setTreatment }) => {
  const { name, slots } = service;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body text-center">
        <h2 className="text-secondary text-xl font-bold">{name}</h2>
        <p>
          {slots.length ? (
            <span>{slots[0]}</span>
          ) : (
            <span className="text-red-500">Try another day</span>
          )}
        </p>
        <p>
          {slots.length} {slots.length > 1 ? "spaces" : "space"} available
        </p>
        <div className="card-actions justify-center">
          <label
            disabled={slots.length == 0}
            onClick={() => setTreatment(service)}
            htmlFor="booking-modal"
            className="btn btn-sm btn-primary text-white font-bold bg-gradient-to-r from-[#5651e5] to-[#709dff]"
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default Service;
