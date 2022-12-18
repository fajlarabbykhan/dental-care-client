import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import DeleteDoctorModal from "./DeleteDoctorModal";
import DoctorRow from "./DoctorRow";

const ManageDoctors = () => {
  const [removeDoctor, setremoveDoctor] = useState(null);
  const {
    data: doctors,
    isLoading,
    refetch,
  } = useQuery("doctors", () =>
    fetch("https://dentalcareserver.onrender.com/doctor", {
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
      <p className="mt-8 text-2xl mb-4">Manage Doctors: {doctors.length}</p>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Photo</th>
              <th>Name</th>
              <th> Treatment Area</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor, index) => (
              <DoctorRow
                key={doctor._key}
                doctor={doctor}
                index={index}
                refetch={refetch}
                setremoveDoctor={setremoveDoctor}
              ></DoctorRow>
            ))}
          </tbody>
        </table>
      </div>
      {removeDoctor && (
        <DeleteDoctorModal
          removeDoctor={removeDoctor}
          refetch={refetch}
          setremoveDoctor={setremoveDoctor}
        ></DeleteDoctorModal>
      )}
    </div>
  );
};

export default ManageDoctors;
