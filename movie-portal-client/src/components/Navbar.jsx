import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { RiMovie2Line } from "react-icons/ri";
import { AuthContext } from "../AuthProvider/AuthProvider";

export default function Navbar() {
  const { user, logOut, isAdmin } = useContext(AuthContext); 
  const [state, setState] = useState("dark-mode");

  const change = () => {
    setState(state === "dark-mode" ? "light-mode" : "dark-mode");
  };

  useEffect(() => {
    document.querySelector("body").className = state;
  }, [state]);

  return (
    <>
      <div className="navbar backdrop-blur-md">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-black"
            >
              <div className="icon mt-2" onClick={change}>
                {state === "light-mode" ? (
                  <i className="fa-solid fa-sun"></i>
                ) : (
                  <i className="fa-solid fa-moon"></i>
                )}
              </div>
              <NavLink to={`/`} className="mt-2">Home</NavLink>
              <NavLink to={`/allMovie`} className="mt-2">All Movie</NavLink>
              <NavLink to={`/tv`} className="mt-2">Tv Show</NavLink>
              <NavLink to={`/blog`} className="mt-2">Blog</NavLink>
              
              {isAdmin && (
                <NavLink to={`/addMovie`} className="mt-2">Add Movie</NavLink>
              )}
             
              {!isAdmin && (
                <NavLink to={`/fovaurite`} className="mt-2">My Favorites</NavLink>
              )}
              <div className="flex">
                {user && user?.email ? (
                  <div className="flex gap-2">
                    <Link to={`/profile`} className="flex gap-3">
                      <img
                        src={user?.photoURL}
                        className="w-10 h-10 rounded-full relative"
                        title={user?.displayName}
                        alt=""
                      />
                      <button onClick={logOut} className="btn bg-pink-600">Sign Out</button>
                    </Link>
                  </div>
                ) : (
                  <div className="mt-3 ">
                    <FaUserCircle />
                    {user && user?.email ? (
                      <button onClick={logOut} className="btn ">Sign Out</button>
                    ) : (
                      <div className="flex gap-3">
                        <Link to={`/auth/signin`} className="btn font-semibold text-md">Sign in</Link>
                        <div>
                          <Link to={`/auth/signUp`} className="btn font-semibold text-md">Register</Link>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </ul>
          </div>
          <div className="">
            <Link to={`/`} className="w-96 text-2xl md:ml-2 flex gap-3 lg:ml-2 font-semibold">
              <p className="mt-1"><RiMovie2Line /></p>
              Movie <span className="text-pink-500">Portal</span>
            </Link>
          </div>
        </div>
        <div className="navbar-center lg:flex">
          <ul className="menu menu-horizontal px-1 invisible ">
            <div className="flex gap-5 font-medium text-lg invisible lg:visible ">
              <NavLink to={`/`} className="mt-2">Home</NavLink>
              <NavLink to={`/allMovie`} className="mt-2">All Movie</NavLink>
              <NavLink to={`/tv`} className="mt-2">Tv Show</NavLink>
              <NavLink to={`/blog`} className="mt-2">Blog</NavLink>
              
              {isAdmin && (
                <NavLink to={`/addMovie`} className="mt-2">Add Movie</NavLink>
              )}
              
              {!isAdmin && (
                <NavLink to={`/fovaurite`} className="mt-2">My Favorites</NavLink>
              )}
              <div className="icon mt-2" onClick={change}>
                {state === "light-mode" ? (
                  <i className="fa-solid fa-sun"></i>
                ) : (
                  <i className="fa-solid fa-moon"></i>
                )}
              </div>
            </div>
          </ul>
        </div>
        <div className="navbar-end gap-3 invisible md:visible">
          <div className="flex">
            {user && user?.email ? (
              <div className="flex gap-2">
                <Link to={`/profile`}>
                  <img
                    src={user?.photoURL}
                    className="w-10 h-10 rounded-full"
                    title={user?.displayName}
                    alt=""
                  />
                </Link>
              </div>
            ) : (
              <div className="mt-3 ">
                <FaUserCircle />
              </div>
            )}
          </div>
          {user && user?.email ? (
            <button onClick={logOut} className="btn bg-[#ea4c89] text-white">Sign Out</button>
          ) : (
            <div className="flex gap-3">
              <Link to={`/auth/signin`} className="btn bg-[#e64180] text-white font-semibold text-md">Sign in</Link>
              <div>
                <Link to={`/auth/signUp`} className="btn font-semibold text-md ">Register</Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}