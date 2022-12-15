import React from "react";
import { toast } from "react-toastify";

const DoctorRow = ({ doctor, index, refetch, setremoveDoctor }) => {
  const { name, treatmentArea, img, email } = doctor;

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
        <label
          htmlFor="my-modal-6"
          className="btn  btn-xs btn-error"
          onClick={() => setremoveDoctor(doctor)}
        >
          {" "}
          Remove Doctor
        </label>
      </td>
    </tr>
  );
};

export default DoctorRow;
