import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading";

const Payment = () => {
  const { id } = useParams();
  const url = `http://localhost:5000/booking/${id}`;
  const { data: appointment, isLoading } = useQuery(["booking", id], () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <div className="card w-50  max-w-mdbg-base-100 shadow-xl my-12">
        <div className="card-body">
          <h2 className="card-title">
            {/* Hello,{" "}
            <span className="text-blue-500">{appointment.patientName}</span>{" "} */}
            Please make a Payment for{" "}
            <span className="text-blue-500">{appointment.treatment}</span>
          </h2>
          <p>
            Your appointment is fixed on{" "}
            <span className="text-blue-500">{appointment.date} </span>
            at <span className="text-blue-500">{appointment.slot}</span>{" "}
          </p>
          <p>Please pay : ${appointment.Treatment_fee}</p>
        </div>
      </div>
      <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
        <div className="card-body"></div>
      </div>
    </div>
  );
};

export default Payment;