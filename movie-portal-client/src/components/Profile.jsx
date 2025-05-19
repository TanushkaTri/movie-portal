import React, { useContext, useEffect, useState } from "react";
import { getAuth, updateProfile } from "firebase/auth";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { toast } from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Helmet } from "react-helmet";

export default function Profile() {
  const { user, setUser } = useContext(AuthContext);
  const [editMode, setEditMode] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    photo: "",
    password: ""
  });
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.displayName || "",
        email: user.email || "",
        photo: user.photoURL || "",
        password: "" // Пароль не хранится в Firebase Auth
      });
    }
  }, [user]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    setErrorMsg("");

    // Валидация пароля (если он был изменен)
    if (formData.password && formData.password.length < 6) {
      setErrorMsg("Password should be at least 6 characters");
      return;
    }

    const auth = getAuth();
    const currentUser = auth.currentUser;

    // Обновление профиля в Firebase
    updateProfile(currentUser, {
      displayName: formData.name,
      photoURL: formData.photo
    }).then(() => {
      toast.success("Profile updated successfully!");
      setUser({ ...user, displayName: formData.name, photoURL: formData.photo });
      setEditMode(false);
    }).catch((error) => {
      setErrorMsg(error.message);
    });
  };

  return (
    <div className="max-w-lg mx-auto p-4 mt-10">
      <Helmet>
        <title>Profile</title>
      </Helmet>
      
      <div className="border-2 border-gray-400 card shadow-2xl dark:bg-[#22262f] dark:text-white">
        <div className="card-body">
          <h1 className="text-4xl font-semibold text-center mb-6">Profile</h1>
          
          {editMode ? (
            <form onSubmit={handleUpdateProfile}>
              <div className="form-control">
                <label className="label">
                <span className="label-text text-lg text-white">Name</span>
                </label>
                <input
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="input input-bordered w-full dark:bg-[#444850]"
                  required
                />
              </div>
              
              <div className="form-control">
                <label className="label">
                <span className="label-text text-lg text-white">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="input input-bordered w-full dark:bg-[#444850]"
                  disabled // Email нельзя изменить в Firebase без подтверждения
                />
              </div>
              
              <div className="form-control">
                <label className="label">
                <span className="label-text text-lg text-white">Photo URL</span>
                </label>
                <input
                  name="photo"
                  type="text"
                  value={formData.photo}
                  onChange={handleInputChange}
                  className="input input-bordered w-full dark:bg-[#444850]"
                />
              </div>
              
              <div className="form-control relative">
                <label className="label">
                <span className="label-text text-lg text-white">New Password (leave blank to keep current)</span>
                </label>
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={handleInputChange}
                  className="input input-bordered w-full dark:bg-[#444850]"
                />
                <div 
                  onClick={() => setShowPassword(!showPassword)} 
                  className="absolute right-3 top-12 cursor-pointer"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </div>
              </div>
              
              {errorMsg && <p className="text-red-400 my-2">{errorMsg}</p>}
              
              <div className="flex gap-4 mt-6">
                <button 
                  type="submit" 
                  className="btn bg-[#ea4c89] flex-1 hover:text-[#ea4c89]"
                >
                  Save Changes
                </button>
                <button 
                  type="button" 
                  onClick={() => setEditMode(false)}
                  className="btn btn-outline flex-1"
                >
                  Cancel
                </button>
              </div>
            </form>
          ) : (
            <div>
              <div className="flex flex-col items-center mb-6">
                {formData.photo && (
                  <img 
                    src={formData.photo} 
                    alt="Profile" 
                    className="w-32 h-32 rounded-full object-cover mb-4"
                  />
                )}
                <h2 className="text-2xl font-bold">{formData.name}</h2>
                <p className="text-gray-500">{formData.email}</p>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold">Name:</h3>
                  <p>{formData.name || "Not specified"}</p>
                </div>
                <div>
                  <h3 className="font-semibold">Email:</h3>
                  <p>{formData.email}</p>
                </div>
                <div>
                  <h3 className="font-semibold">Photo URL:</h3>
                  <p className="break-all">{formData.photo || "Not specified"}</p>
                </div>
              </div>
              
              <button 
                onClick={() => setEditMode(true)}
                className="btn bg-[#ea4c89] w-full mt-6 hover:text-[#ea4c89]"
              >
                Edit Profile
              </button>

              <button 
  onClick={() => window.open('https://t.me/FVRMovie_bot', '_blank')}
  className="btn bg-[#ea4c89] w-full mt-6 hover:text-[#4c7eea]"
>
  Go to Telegram bot
</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}