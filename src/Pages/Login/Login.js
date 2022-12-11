import React, { useEffect } from "react";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";
import Loading from "../Shared/Loading";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useToken from "../../hooks/useToken";
const Login = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, eUser, eLoading, eError] =
    useSignInWithEmailAndPassword(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [token] = useToken(gUser || eUser);
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (token) {
      // console.log(gUser || eUser);
      navigate(from, { replace: true });
    }
  }, [token, from, navigate]);

  if (gLoading || eLoading) {
    return <Loading></Loading>;
  }
  let signInError;
  if (gError || eError) {
    signInError = (
      <p className="text-red-500">{eError?.message || gError?.message}</p>
    );
  }

  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
    console.log(data);
  };
  return (
    <div className="px-12 flex justify-center items-center h-screen">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
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
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Your password"
                className="input input-bordered w-full max-w-xs"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is required",
                  },
                  minLength: {
                    value: 6,
                    message: "Password Must be more than 6 degit",
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
            {signInError}
            <input
              type="submit"
              value="Login"
              className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-[#5651e5] to-[#709dff] w-full max-w-xs"
            />
          </form>
          <p className="mt-2">
            Don't have a account -{" "}
            <Link to="/register" className="text-red-500">
              Register
            </Link>{" "}
          </p>
          <div className="divider">OR</div>
          <button
            onClick={() => signInWithGoogle()}
            className="btn  btn-primary uppercase text-white font-bold bg-gradient-to-r from-[#5651e5] to-[#709dff]"
          >
            Continue With Goolge
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
