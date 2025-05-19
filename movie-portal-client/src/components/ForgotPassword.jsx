import React, { useState } from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    if (!email) {
      setError("Please enter your email");
      return;
    }

    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email);
      setMessage("Password reset email sent. Check your inbox!");
      toast.success("Password reset email sent");
    } catch (err) {
      setError(err.message);
      toast.error("Error sending reset email");
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 mt-10">
      <Helmet>
        <title>Forgot Password</title>
      </Helmet>
      
      <div className="border-2 border-gray-400 card shadow-2xl dark:bg-[#22262f] dark:text-white">
        <div className="card-body">
          <h1 className="text-3xl font-semibold text-center mb-6">Forgot Password</h1>
          
          {message && (
            <div className="alert alert-success mb-4">
              <p className="text-green-500">{message}</p>
            </div>
          )}
          
          {error && (
            <div className="alert alert-error mb-4">
              <p className="text-red-500">{error}</p>
            </div>
          )}
          
          <form onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label">
              <span className="label-text text-lg text-white">Email</span>
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input input-bordered w-full dark:bg-[#444850]"
                placeholder="Enter your email"
                required
              />
            </div>
            
            <div className="form-control mt-6">
              <button 
                type="submit" 
                className="btn bg-[#ea4c89] hover:text-[#ea4c89]"
              >
                Send Reset Link
              </button>
            </div>
          </form>
          
          <div className="text-center mt-4">
            <Link to="/auth/signin" className="text-[#ea4c89] hover:underline">
              Back to Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}