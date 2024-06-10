import React from "react";
import loginImage from "../assets/images/login_logo.png"; // Make sure you have an image at this path
import Navbar from "../components/layout/NavBar";

const LoginPage = () => {
  return (
    <>
      <Navbar />
      <div className="w-full h-auto mt-6 p-7 flex justify-evenly items-center gap-10">
        {/* Left side with image */}
        <div className="w-1/2">
          <img src={loginImage} alt="Login" className="w-full h-auto rounded-lg" />
        </div>

        {/* Right side with form */}
        <div className="w-1/3">
          <h1 className="font-bold text-center text-3xl mb-6">Login</h1>
          <div className="grid grid-cols-1 gap-y-5">
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
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"
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
                  autoComplete="current-password"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="flex justify-start items-center flex-col mt-3">
              <button className="w-full h-10 py-2 mb-3 bg-black font-medium text-white rounded-md">
                Login
              </button>
              <p>Don't have account?<span className="ml-2  font-medium text-blue-500">Sign Up</span></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
