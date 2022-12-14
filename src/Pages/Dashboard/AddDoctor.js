import React from "react";

import { useForm } from "react-hook-form";

const AddDoctor = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
  };
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
          <input
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
          <label className="label">
            {errors.password?.type === "required" && (
              <p role="alert" className="text-red-500">
                {errors.password.message}
              </p>
            )}
            {errors.password?.type === "minLength" && (
              <p role="alert" className="text-red-500">
                {errors.password.message}
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
