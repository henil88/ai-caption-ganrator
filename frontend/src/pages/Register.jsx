import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { registerApi } from "../api/authApi";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../context/authContext";

const Register = ({ onSuccess }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const { register: registerUser } = useContext(AuthContext);

  const userData = async (data) => {
    try {
      console.log("Register attempt:", { username: data.username });
      const res = await registerApi(data);
      const username = res.data?.newUser?.username;

      if (username) {
        registerUser(username);
        toast.success("User registered successfully");
        console.log("Register success:", { username });
        navigate("/");
        if (onSuccess) onSuccess();
      } else {
        console.error("Register failed: Invalid response from server", res);
        toast.error("Invalid response from server");
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || "Registration failed";
      console.error("Register error:", { error: errorMessage, details: error.response?.data || error.message });
      toast.error(errorMessage);
    }
  };

  return (
    <div className="flex justify-center items-center h-[50%] px-4">
      <div className="w-full max-w-md p-6 sm:p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center mb-6 sm:mb-8">
          Register
        </h1>
        <form
          onSubmit={handleSubmit(userData)}
          className="space-y-4 sm:space-y-6"
        >
          <div>
            <input
              {...register("username", { required: "Username required" })}
              type="text"
              placeholder="Username"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
            {errors.username && (
              <p className="text-red-500 text-sm mt-1">
                {errors.username.message}
              </p>
            )}
          </div>
          <div>
            <input
              {...register("password", { required: "Password required" })}
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition-colors font-semibold"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;