import React from "react";
import Navbar from "../components/layout/NavBar";
import { FaCircleCheck } from "react-icons/fa6";

const PaymentPage = () => {
  return (
    <>
      <Navbar />
      <div className="w-full h-auto mt-4 ml-5 p-7 flex flex-col justify-center items-center gap-6  ">
      <div className="flex flex-col sm:flex-row justify-center items-center gap-2 text-sm mb-4 mt-4">
          <span className="font-bold">Cart</span>
          <div className="border-b border-gray-500 w-20"></div>
          <span>Delivery</span>
          <div className="border-b border-gray-500 w-20"></div>
          <FaCircleCheck color="green" size={18}/>
          <span>Payment</span>
        </div>
      <h1 className="font-bold text-start text-2xl mt-8">Payment Details</h1>
        <div className="mr-4 grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-6 md:w-1/3 w-1/2">
          <div className="col-span-6">
            <label
              htmlFor="card-number"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Card Number
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="card-number"
                id="card-number"
                autoComplete="cc-number"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="col-span-3">
            <label
              htmlFor="expiration-date"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Expiration Date
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="expiration-date"
                id="expiration-date"
                autoComplete="cc-exp"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="col-span-3">
            <label
              htmlFor="security-code"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Security Code
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="security-code"
                id="security-code"
                autoComplete="cc-csc"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="col-span-6">
            <label
              htmlFor="card-name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Card Name
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="card-name"
                id="card-name"
                autoComplete="cc-name"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
        {/* left side ends */}
      </div>

      {/* Complete Payment button */}
      <div className="flex justify-center items-center mt-4">
        <button className="w-60 h-10 bg-black font-medium text-white rounded-md">
          Complete Payment
        </button>
      </div>
    </>
  );
};

export default PaymentPage;
