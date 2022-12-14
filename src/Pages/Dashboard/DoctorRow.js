import React from "react";
import { toast } from "react-toastify";

const DoctorRow = ({ doctor, index, refetch }) => {
  const { name, treatmentArea, img, email } = doctor;
  const deleteDoctor = (email) => {
    fetch(`http://localhost:5000/doctor/${email}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("doc data", data);
        if (data.deletedCount) {
          toast.success(`${name} removed from this site`);
          refetch();
        }
      });
  };

  return (
    <tr>
      <th>{index + 1}</th>

      <td>
        <div class="avatar">
          <div class="w-20 rounded">
            <img src={img} alt="Tailwind-CSS-Avatar-component" />
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>{treatmentArea}</td>
      <td>
        <button
          className="btn btn-xs btn-error"
          onClick={() => deleteDoctor(email)}
        >
          Remove Doctor
        </button>
      </td>
    </tr>
  );
};

export default DoctorRow;
