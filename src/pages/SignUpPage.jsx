// src/pages/SignUpPage.js

import React, { useState } from "react";
import { toast } from "react-toastify";
import signUpImage from "../assets/images/signup_logo.png"; // Make sure you have an image at this path
import Navbar from "../components/layout/NavBar";
import { useAuth } from "../context/authContext"; // Import the useAuth hook

const SignUpPage = () => {
  const [fullName, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { register } = useAuth(); // Use the register function from AuthContext

  const changeUsername = (e) => {
    setUsername(e.target.value);
  };

  const changeEmail = (e) => {
    setEmail(e.target.value);
  };

  const changePassword = (e) => {
    setPassword(e.target.value);
  };

  const changeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    const data = {
      fullName: fullName,
      email: email,
      password: password,
    };

    register(data)
      .then((res) => {
        if (res.data.success) {
          toast.success(res.data.message);
        } else {
          toast.error(res.data.message);
        }
      })
      .catch((err) => {
        console.error(err);
        toast.error("Internal Server Error!");
      });
  };

  return (
    <>
      <Navbar />
      <div className="w-full h-auto mt-6 p-7 flex justify-evenly items-start gap-10">
        {/* Left side with image */}
        <div className="w-1/2">
          <img
            src={signUpImage}
            alt="Sign Up"
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* Right side with form */}
        <div className="w-1/2">
          <h1 className="font-bold text-center text-2xl mb-6">Sign Up</h1>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-y-5">
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Full Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  autoComplete="fullName"
                  value={fullName}
                  onChange={changeUsername}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email
              </label>
              <div className="mt-2">
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  value={email}
                  onChange={changeEmail}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="mt-2">
                <input
                  type="password"
                  name="password"
                  id="password"
                  autoComplete="new-password"
                  value={password}
                  onChange={changePassword}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="confirm-password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Confirm Password
              </label>
              <div className="mt-2">
                <input
                  type="password"
                  name="confirm-password"
                  id="confirm-password"
                  autoComplete="new-password"
                  value={confirmPassword}
                  onChange={changeConfirmPassword}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="flex justify-start items-center mt-3">
              <button
                type="submit"
                className="w-full h-10 bg-black font-medium text-white rounded-md"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
