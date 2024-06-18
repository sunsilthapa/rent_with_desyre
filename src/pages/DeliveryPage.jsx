import React from "react";
import Navbar from "../components/layout/NavBar";
import { Link } from "react-router-dom";
import { FaCircleCheck } from "react-icons/fa6";

const DeliveryPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col sm:flex-row justify-center items-center gap-2 text-sm mb-4 mt-16">
          <span className="font-bold">Cart</span>
          <div className="border-b border-gray-500 w-20"></div>
          <FaCircleCheck color="green" size={18}/>
          <span>Delivery</span>
          <div className="border-b border-gray-500 w-20"></div>
          <span>Payment</span>
        </div>
      <h1 className="font-bold text-center text-2xl mt-8 mb-4">Delivery Details</h1>
      <div className="w-full h-auto mt-4 ml-5 p-7 flex flex-col justify-center items-center gap-6 md:flex-row ">
        {/* left side starts */}
        <div className="mr-4 grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-6 md:w-1/4 w-1/2">
          <div className="col-span-6">
            <label
              htmlFor="full-name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Full Name
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="full-name"
                id="full-name"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="col-span-6">
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
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="city"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              City
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="city"
                id="city"
                autoComplete="address-level2"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="state"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              State
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="state"
                id="state"
                autoComplete="address-level1"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
        {/* left side ends */}

        {/* right side starts */}
        <div className="grid grid-cols-3 gap-x-2  gap-y-4 md:w-1/4 w-1/2">
          <div className="sm:col-span-4 md:col-span-6 ">
            <label
              htmlFor="phone"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Phone
            </label>
            <div className="mt-2">
              <input
                type="tel"
                name="phone"
                id="phone"
                autoComplete="tel"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-4 md:col-span-6 ">
            <label
              htmlFor="address"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Address
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="address"
                id="address"
                autoComplete="street-address"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="col-span-4m md:col-span-6 ">
            <label
              htmlFor="postal-code"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Postal Code
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="postal-code"
                id="postal-code"
                autoComplete="postal-code"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
        {/* right side ends */}
      </div>

      {/* Save button */}
      <div className="flex justify-center items-center mt-4">
        <button className="w-60 h-10 bg-black font-medium text-white rounded-md">
          <Link to='/payment'>Save</Link>
        </button>
      </div>
    </>
  );
};

export default DeliveryPage;
