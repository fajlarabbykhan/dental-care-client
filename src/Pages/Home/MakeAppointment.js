import React from "react";
import doctor from "../../assets/images/doctor.png";
import background from "../../assets/images/appointment.png";
const MakeAppointment = () => {
  return (
    <section
      className="flex px-12  justify-center items-center mt-40"
      style={{
        background: `url(${background})`,
      }}
    >
      <div className="flex-1 hidden lg:block">
        <img src={doctor} alt="" className="mt-[-140px] h-full " />
      </div>
      <div className="flex-1 ">
        <p className="text-xl text-secondary font-bold mt-4 mb-2 ">
          Appointment
        </p>
        <p className="text-3xl text-white mb-2">Make an Appointment Today</p>
        <p className="text-white mb-2">
          A dentist has many responsibilities, and one of the most important is
          promoting good dental hygiene. This helps to prevent complications in
          your mouth or other parts of the body. A dentist also diagnoses and
          treats problems of the gums, teeth, and mouth. Dentists use modern
          technology and equipment like X-ray machines, lasers, drills, brushes,
          scalpels, and other medical tools when performing dental procedures.
          They also wear protective equipment like gloves, masks, and safety
          glasses to prevent the spread of germs or bacteria.
        </p>
        <button className="btn btn-primary mb-4 text-white font-bold bg-gradient-to-r from-[#5651e5] to-[#709dff] ">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default MakeAppointment;
