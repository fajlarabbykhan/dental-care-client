import React, { useState } from "react";
import Footer from "../Home/Footer";
import AppointmentBanner from "./AppointmentBanner";
import AvailableAppointments from "./AvailableAppointments";
const Appointment = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div className="">
      <AppointmentBanner date={date} setDate={setDate}></AppointmentBanner>
      <AvailableAppointments
        date={date}
        setDate={setDate}
      ></AvailableAppointments>
      <Footer></Footer>
    </div>
  );
};

export default Appointment;
