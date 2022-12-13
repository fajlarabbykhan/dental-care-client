import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
    localStorage.removeItem("accessToken");
  };
  const menu = (
    <>
      <li className="m-1">
        <Link to="/">Home</Link>
      </li>
      <li className="m-1">
        <Link to="/appoinment">Appointment</Link>
      </li>
      <li className="m-1">
        <Link to="/review">Review</Link>
      </li>
      <li className="m-1">
        <Link to="/contact">Contact</Link>
      </li>
      <li className="m-1">
        <Link to="/about">About</Link>
      </li>
      <li className="m-1">{user && <Link to="/dashboard">Dashboard</Link>}</li>

      <li className="m-1">
        {user ? (
          <button className="btn btn-ghost" onClick={logout}>
            Log Out
          </button>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 px-12">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 w-52 rounded-box "
          >
            {menu}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">Dental Care</a>
      </div>
      <div className="navbar-center  hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menu}</ul>
      </div>

      <div className="navbar-end  lg:hidden">
        <label
          tabIndex={1}
          htmlFor="my-drawer-2"
          className="btn btn-ghost lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
      </div>
    </div>
  );
};

export default Navbar;
