import React, { useContext, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider } from "firebase/auth";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Helmet } from "react-helmet";

export default function Login() {
  const navigate = useNavigate();
  const { signIn, setUser, googleSignIn } = useContext(AuthContext);
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState(""); 
  const [success, setSuccess] = useState(false); 
  const emailRef = useRef();

  const handleLogin = (e) => {
    e.preventDefault(); 
    const Email = e.target.email.value;
    const Password = e.target.password.value;

    signIn(Email, Password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate(from, { replace: true });
        setSuccess(true);
      })
      .catch((err) => {
        setErrorMsg(err.message);
        setSuccess(false);
      });
  };

  const provider = new GoogleAuthProvider();
  
  const handleGoogleLogin = () => {
    googleSignIn(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate(from, { replace: true });
      })
      .catch((err) => {
        setErrorMsg(err.message);
      });
  };

  return (
    <>
      <div className="flex justify-center items-center min-h-screen dark:bg-[#22262f] light-mode:bg-white">
        <Helmet>
          <title>Movie Portal | Login</title>
        </Helmet>
        <div className="bg-white/20 card border-2 border-gray-400 font-medium w-full max-w-lg shadow-2xl my-10 text-white dark:bg-[#444850] light-mode:bg-white">
          <form onSubmit={handleLogin} className="card-body">
            <h1 className="font-semibold text-3xl text-center text-black dark:text-white">
              Sign in
            </h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg text-white dark:text-white">Email</span>
              </label>
              <input
                ref={emailRef}
                name="email"
                type="email"
                placeholder="Enter your email"
                className="input input-bordered bg-black border-2 border-white backdrop-blur-md text-white dark:bg-[#444850] light-mode:bg-white light-mode:text-black"
                required
                autoComplete="username"
              />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text text-lg text-white dark:text-white">Password</span>
              </label>
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="password"
                className="input input-bordered bg-black border-2 border-white backdrop-blur-md text-white dark:bg-[#444850] light-mode:bg-white light-mode:text-black"
                required
                autoComplete="current-password"
              />
            </div>
            <div onClick={() => setShowPassword(!showPassword)} className="absolute top-[235px] right-12">
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </div>
            <div className="form-control mt-6">
              <button className="btn rounded-full text-lg font-semibold bg-[#ea4c89] border-2 border-white backdrop-blur-md text-white hover:bg-[#ea4c89] hover:text-black dark:hover:bg-[#ea4c89] dark:hover:text-white">
                Login
              </button>
            </div>
            {errorMsg && <p className="text-red-400">{errorMsg}</p>}
            <label className="label flex justify-between">
              <Link
                to={`/auth/forgot-password`}
                state={{ email: emailRef.current?.value || "" }}
                className="text-md link link-hover text-white dark:text-white"
              >
                Forgot password?
              </Link>
              <div>
                <Link
                  to={`/auth/signUp`}
                  className="text-md hover:underline text-white dark:text-white"
                >
                  Create account
                </Link>
              </div>
            </label>
            <p className="text-gray-400 mt-2">Or sign in with</p>
            <div className="flex justify-center">
              <button
                onClick={handleGoogleLogin}
                type="button"
                className="btn rounded-full w-14 text-4xl bg-white hover:bg-white hover:text-white"
              >
                <FcGoogle />
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
  
}