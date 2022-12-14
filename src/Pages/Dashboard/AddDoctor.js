import React from "react";

import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import Loading from "../Shared/Loading";

const AddDoctor = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const { data: services, isLoading } = useQuery("services", () =>
    fetch("http://localhost:5000/service").then((res) => res.json())
  );
  const imageApi = "4494498d5b5648221b45ca160d56dd7f";
  const onSubmit = async (data) => {
    // console.log(data);
    const formData = new FormData();

    const image = data.image[0];
    // console.log(image);
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageApi}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url;
          const doctor = {
            name: data.name,
            email: data.email,
            treatmentArea: data.treatmentArea,
            img: img,
          };
          //   console.log("Doctor Info", doctor);
          // post doctor data to data base
          fetch("http://localhost:5000/doctor", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(doctor),
          })
            .then((res) => res.json())
            .then((inserted) => {
              //   console.log("Doctor info from server", inserted);
              if (inserted.insertedId) {
                toast.success("You add a doctor succesfully");
                reset();
              } else {
                toast.error("You are not able to add a doctor.");
              }
            });
        }
        // console.log("Doctor Photo", result);
      });
  };

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="mt-8">
      <p className="text-2xl">Add a new doctor</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="Your Name"
            className="input input-bordered w-full max-w-xs"
            {...register("name", {
              required: {
                value: true,
                message: "Name is required",
              },
            })}
          />
          <label className="label">
            {errors.name?.type === "required" && (
              <p role="alert" className="text-red-500">
                {errors.name.message}
              </p>
            )}
            {errors.name?.type === "pattern" && (
              <p role="alert" className="text-red-500">
                {errors.name.message}
              </p>
            )}
          </label>
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="Your Email"
            className="input input-bordered w-full max-w-xs"
            {...register("email", {
              required: {
                value: true,
                message: "Email is required",
              },
              pattern: {
                value: /[A-Za-z]{3}/,
                message: "Provide a valid email",
              },
            })}
          />
          <label className="label">
            {errors.email?.type === "required" && (
              <p role="alert" className="text-red-500">
                {errors.email.message}
              </p>
            )}
            {errors.email?.type === "pattern" && (
              <p role="alert" className="text-red-500">
                {errors.email.message}
              </p>
            )}
          </label>
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Treatment Area</span>
          </label>

          <select
            className="select w-full max-w-xs input-bordered"
            {...register("treatmentArea")}
          >
            {services.map((service) => (
              <option key={service._id} value={service.name}>
                {service.name}
              </option>
            ))}
          </select>

          {/* <input
            type="text"
            placeholder="Doctor Specialty"
            className="input input-bordered w-full max-w-xs"
            {...register("treatmentArea", {
              required: {
                value: true,
                message: "Treatment Area is required",
              },
            })}
          />
          */}
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Upload Doctor Image</span>
          </label>
          <input
            type="file"
            className="input input-bordered w-full max-w-xs"
            {...register("image", {
              required: {
                value: true,
                message: "Image is required",
              },
            })}
          />
          <label className="label">
            {errors.name?.type === "required" && (
              <p role="alert" className="text-red-500">
                {errors.image.message}
              </p>
            )}
            {errors.name?.type === "pattern" && (
              <p role="alert" className="text-red-500">
                {errors.name.message}
              </p>
            )}
          </label>
        </div>

        <input
          type="submit"
          value="Add a Doctor"
          className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-[#5651e5] to-[#709dff] w-full max-w-xs"
        />
      </form>
    </div>
  );
};

export default AddDoctor;
