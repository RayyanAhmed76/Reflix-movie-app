import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

export default function ContactUs() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    reset();

    toast.success("Form Submitted Successfully!", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  return (
    <div className="w-[80%] h-[80vh] text-white mx-auto p-6  rounded-xl shadow-md space-y-4 flex justify-center flex-col">
      <div className="mt-[8%] sm:mt-[12%]">
        <Link className="">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556CD] ri-arrow-left-fill text-zinc-500 text-4xl "
          ></i>
        </Link>
      </div>
      <div className="w-full flex justify-center items-center">
        <h2 className="text-5xl font-semibold py-5 mt-[2%] ">Contact Us</h2>
      </div>
      <hr />
      <ToastContainer />
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block mb-1 text-2xl">First Name</label>
          <input
            {...register("firstName", { required: "First name is required" })}
            className="w-[30%] border border-zinc-800 bg-zinc-800 p-2 rounded h-[5vh]"
          />
          {errors.firstName && (
            <p className="text-red-500 text-sm">{errors.firstName.message}</p>
          )}
        </div>

        {/* Last Name */}
        <div>
          <label className="block mb-1 text-2xl">Last Name</label>
          <input
            {...register("lastName", { required: "Last name is required" })}
            className="w-[30%] border border-gray-300 p-2 bg-zinc-800 rounded h-[5vh]"
          />
          {errors.lastName && (
            <p className="text-red-500 text-sm">{errors.lastName.message}</p>
          )}
        </div>

        {/* Description */}
        <div>
          <label className="block mb-1 text-2xl">Description</label>
          <textarea
            {...register("description")}
            rows="3"
            className="w-full border h-[30vh] border-gray-300 bg-zinc-800 p-2 rounded"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-[#BB86FC] hover:bg-zinc-700 text-white text-xl px-6 py-3 rounded  cursor-pointer"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
