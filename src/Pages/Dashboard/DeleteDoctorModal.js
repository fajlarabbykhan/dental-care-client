import React from "react";
import { toast } from "react-toastify";

const DeleteDoctorModal = ({ removeDoctor, refetch, setremoveDoctor }) => {
  const { name, email } = removeDoctor;
  const deleteDoctor = () => {
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
          setremoveDoctor(null);
          refetch();
        }
      });
  };
  return (
    <div>
      {/* The button to open modal */}

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-red-700">
            Make sure you are removing ${name}
          </h3>
          <p className="py-4">
            Removing a Doctor means he/she is no longer providing services in
            your organization.
          </p>
          <div className="modal-action">
            <button className="btn btn-error" onClick={() => deleteDoctor()}>
              Remove Doctor
            </button>
            <label htmlFor="my-modal-6" className="btn">
              Close
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteDoctorModal;
