import React from "react";
import { useForm } from "react-hook-form";

export default function Signup({setPage}) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
      // send data to backend
      // from backend, send to mongodb

      
    await fetch("http://localhost:5000/signup", {
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      credentials: "include",
      body: JSON.stringify(data)
    }).then(res => res.json()).then(data => console.log(data))


  }

  return (
    <>
      <h1 className="text-xl text-blue-500 font-mono">Sign Up</h1>

      <form
        className="flex flex-col p-2 items-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          type="email"
          placeholder="Email"
          className="bg-white outline-none p-2 h-10 w-75 rounded-md m-1"
          {...register("email", {
            required: { value: true, message: "This field is required" },
          })}
        />

        {errors.email && (
          <span className="text-red-500">{errors.email.message}</span>
        )}

        <input
          type="password"
          placeholder="Password"
          className="bg-white outline-none p-2 h-10 w-75 rounded-md m-1"
          {...register("password", {
            required: { value: true, message: "This field is required" },
            minLength: {
              value: 8,
              message: "Password must be atleast 8 characters long",
            },
          })}
        />

        {errors.password && (
          <span className="text-red-500">{errors.password.message}</span>
        )}

        <input
          type="password"
          placeholder="Confirm Password"
          className="bg-white outline-none p-2 h-10 w-75 rounded-md m-1"
          {...register("confirmPassword", {
            required: { value: true, message: "This field is required" },
            minLength: {
              value: 8,
              message: "Password must be atleast 8 characters long",
            },
          })}
        />

        {errors.confirmPassword && (
          <span className="text-red-500">{errors.confirmPassword.message}</span>
        )}

        {/* {errors.exampleRequired && <span>This field is required</span>} */}

        <input
          className="w-20 h-10 bg-green-400 rounded-sm cursor-pointer hover:bg-green-500 duration-500"
          type="submit"
        />
      </form>


      <h6>Already a User? <button onClick={() => {
        setPage(0)
      }} className="text-blue-800 hover:underline cursor-pointer">Sign In</button></h6>
    </>
  );
}
