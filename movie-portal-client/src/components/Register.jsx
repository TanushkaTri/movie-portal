import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { GoogleAuthProvider } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";

import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
// import { Helmet } from "react-helmet-async";
import auth from "../fireBase/firebase.config";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Helmet } from "react-helmet";

export default function Register() {
  const { googleSignIn, createuser, setUser, updateUser } =
    useContext(AuthContext);
  const [errorMsg, setErrorMsg] = useState(""); 
  const [success, setSuccess] = useState(false);
  // state for password eye show
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const handleRegister = (e) => {
    e.preventDefault();

    const Name = e.target.name.value;
    const Email = e.target.email.value;
    const Password = e.target.password.value;
    const Photo = e.target.photo.value;
    const acceptTearm = e.target.checked.checked;
    // console.log(Name, Email, Password, Photo, acceptTearm);

    setErrorMsg("");
    setSuccess(false);
    if (!acceptTearm) {
      setErrorMsg("please accept the tearm & conditon");
      return;
    }
    if (Password.length < 6) {
      setErrorMsg("Password Should be at least 6 character");
      return;
    }

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(Password)) {
      setErrorMsg("Password should be at least one uppercase one lowecase ");
      return;
    }
    // create user, email and password
    createuser(Email, Password, Name)
      .then((result) => {
        const user = result.user;

        setUser(user);
        setSuccess(true);

        toast.success("Account created successfully!");
        navigate("/");
      })
      .catch((err) => {
        setErrorMsg(err.message);
        setSuccess(false);
      });
  };

  //sign google and github

  const provider = new GoogleAuthProvider();

  // const provider2 = new GithubAuthProvider();
  const handleGoogleLogin = () => {
    googleSignIn(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        setUser(err.message);
      });
  };
  // const handleGitHuLogin = () => {
  //   signInWithPopup(auth, provider2)
  //     .then((result) => {
  //       const user = result.user;

  //       setUser(user)
  //     })
  //     .catch((err) => {

  //       setUser(err,message)
  //     });
  // };
  //sign google and github

  return (
    <div className="flex justify-center items-center min-h-screen">
      <Helmet>
        <title>Register</title>
      </Helmet>
      <div className="w-full max-w-lg">
        <div className="border-2 border-gray-400 card font-medium w-full shadow-2xl lg:my-10 animate__animated animate__slideInRight mb-6 dark:bg-[#22262f] dark:text-white light-mode:bg-white light-mode:text-black">
          <form onSubmit={handleRegister} className="card-body">
            <div>
              <h1 className="font-semibold text-4xl text-center md:text-left ml-4 md:ml-14 lg:ml-36">
                Register
              </h1>
            </div>
  
            <section className="flex flex-col md:flex-row gap-4">
              <section className="w-full">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-lg text-white">Name</span>
                  </label>
                  <input
                    name="name"
                    type="text"
                    placeholder="username"
                    className="input input-bordered border-2 backdrop-blur-md w-full dark:bg-[#444850] dark:text-white light-mode:bg-white light-mode:text-black"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-lg text-white">Photo</span>
                  </label>
                  <input
                    name="photo"
                    type="text"
                    placeholder="Photo url"
                    className="input input-bordered border-2 backdrop-blur-md w-full dark:bg-[#444850] dark:text-white light-mode:bg-white light-mode:text-black"
                    required
                  />
                </div>
              </section>
  
              <section className="w-full">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-lg text-white">Email</span>
                  </label>
                  <input
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    className="input input-bordered border-2 backdrop-blur-md w-full dark:bg-[#444850] dark:text-white light-mode:bg-white light-mode:text-black"
                    required
                  />
                </div>
                <div className="form-control relative">
                  <label className="label">
                    <span className="label-text text-lg text-white">Password</span>
                  </label>
                  <input
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="password"
                    className="input input-bordered w-full dark:bg-[#444850] dark:text-white light-mode:bg-white light-mode:text-black"
                    required
                  />
                </div>
              </section>
            </section>
  
            <div
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-[228px] right-12 cursor-pointer"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </div>
  
            <div className="form-control">
              <label className="label cursor-pointer justify-start gap-3">
                <input type="checkbox" name="checked" className="checkbox border-2 border-white bg-transparent" />
                <span className="label-text text-white ">Accept Terms & Conditions</span>
              </label>
            </div>
  
            <div className="form-control mt-6">
              <button className="btn bg-[#ea4c89] border-2 border-gray-300 font-medium text-lg w-full hover:text-[#ea4c89] dark:hover:text-[#ea4c89]">
                Sign Up
              </button>
            </div>
  
            {errorMsg && <p className="text-red-400">{errorMsg}</p>}
  
            <label className="label flex justify-center">
              <p>Already have an account?</p>
              <div>
                <Link
                  to={`/auth/signin`}
                  className="text-emerald-50 font-semibold btn btn-outline hover:bg-[#ea4c89] dark:hover:bg-[#ea4c89] border-1 border-white "
                >
                  Sign In
                </Link>
              </div>
            </label>
  
            <p className="mt-2 text-center">Or sign in with</p>
            <div className="flex justify-center">
              <button
                onClick={handleGoogleLogin}
                className="btn rounded-full w-14 text-4xl"
              >
                <FcGoogle />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  
  );
}
