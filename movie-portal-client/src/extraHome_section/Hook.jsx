import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function Hook() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [formData, setFormData] = useState({});

  const onSubmit = (data) => {
    setFormData(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label htmlFor="firstName" className="block">
            First Name
          </label>
          <input
            id="firstName"
            {...register("firstName")}
            className="input input-bordered
             bg-black border-2 border-white backdrop-blur-md text-white dark:bg-[#444850] light-mode:bg-white light-mode:text-black mr-3"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="lastName" className="block">
            Last Name
          </label>
          <input
            id="lastName"
            {...register("lastName", { required: true })}
            className="input input-bordered bg-black border-2 border-white backdrop-blur-md text-white dark:bg-[#444850] light-mode:bg-white light-mode:text-black"
          />
          {errors.lastName && (
            <p className="w-96 my-4 backdrop-blur-md text-white dark:bg-[#444850] light-mode:bg-white light-mode:text-black">
              Last name is required.
            </p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="age" className="block">
            Age
          </label>
          <input
            id="age"
            {...register("age", { pattern: /\d+/ })}
            className="input input-bordered bg-black border-2 border-white backdrop-blur-md text-white dark:bg-[#444850] light-mode:bg-white light-mode:text-black"
          />
          {errors.age && (
            <p className="w-96 my-4 backdrop-blur-md text-white dark:bg-[#444850] light-mode:bg-white light-mode:text-black">
              Please enter number for age.
            </p>
          )}
        </div>

        <div>
          <input
            type="submit"
            className="input input-bordered bg-black border-2 border-white backdrop-blur-md text-white dark:bg-[#444850] light-mode:bg-white light-mode:text-black"
          />
        </div>
      </form>

      {Object.keys(formData).length > 0 && (
        <div className="mt-6 p-4 bg-white text-black border rounded">
          <h2 className="text-lg font-bold">Submitted Data:</h2>
          <p>
            <strong>First Name:</strong> {formData.firstName}
          </p>
          <p>
            <strong>Last Name:</strong> {formData.lastName}
          </p>
          <p>
            <strong>Age:</strong> {formData.age}
          </p>
        </div>
      )}
    </div>
  );
}
