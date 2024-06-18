import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/NavBar';

const ProductDetailPage = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [sizeOpen, setSizeOpen] = useState(false);
  const [shareOpen, setShareOpen] = useState(false);

  const toggleDetails = () => setDetailsOpen(!detailsOpen);
  const toggleSize = () => setSizeOpen(!sizeOpen);
  const toggleShare = () => setShareOpen(!shareOpen);

  return (
    <>
    <Navbar/>
      <div className="flex flex-col md:flex-row justify-center items-center w-full h-auto p-4 md:p-8">
        <div className="flex flex-col w-full md:w-1/2 mb-4 md:mb-0">
          <img
            src="https://www.clipartmax.com/png/middle/426-4263190_coat-png-photo-suit-png.png"
            className="w-full md:w-3/4 h-auto mx-auto rounded-lg shadow-lg"
            alt="Corporate set"
          />
          <div className="flex justify-center mt-4 space-x-4">
            <img
              src="https://www.clipartmax.com/png/middle/426-4263190_coat-png-photo-suit-png.png"
              className="w-20 h-20 rounded-lg shadow-md"
              alt="Thumbnail 1"
            />
            <img
              src="https://www.clipartmax.com/png/middle/426-4263190_coat-png-photo-suit-png.png"
              className="w-20 h-20 rounded-lg shadow-md"
              alt="Thumbnail 2"
            />
            <img
              src="https://www.clipartmax.com/png/middle/426-4263190_coat-png-photo-suit-png.png"
              className="w-20 h-20 rounded-lg shadow-md"
              alt="Thumbnail 3"
            />
          </div>
        </div>
        <div className="flex flex-col p-4 md:p-8 w-full md:w-1/2">
          <span className="text-2xl font-semibold mb-2">Corporate set</span>
          <span className="text-gray-600 mb-4">100% silk, 100% office-ready</span>
          <span className="text-2xl font-semibold text-green-600 mb-4">Rs. 200</span>
          <div className="flex items-center mb-4">
            <FaStar className="text-yellow-500 mr-2" />
            <FaStar className="text-yellow-500 mr-2" />
            <FaStar className="text-yellow-500 mr-2" />
            <FaStar className="text-yellow-500 mr-2" />
            <FaStar className="text-yellow-500" />
          </div>
          <ul className="mb-4 flex gap-3">
            <li className="mb-2">
              <input type="radio" name="duration" id="3-days" className="mr-2" />
              <label htmlFor="3-days">3 Days</label>
            </li>
            <li className="mb-2">
              <input type="radio" name="duration" id="5-days" className="mr-2" />
              <label htmlFor="5-days">5 Days</label>
            </li>
            <li className="mb-2">
              <input type="radio" name="duration" id="10-days" className="mr-2" />
              <label htmlFor="10-days">10 Days</label>
            </li>
          </ul>
         <div className='flex mb-2'> 
          <span mr-3>Date:</span>
          <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
          </div>
         <Link to='/cart'>
            <button className="bg-black text-white py-2 px-4 rounded-lg shadow-md hover:bg-gray-800 transition duration-300">
              Rent now
            </button>
         </Link>
          <div className="mt-4">
            <div className="flex justify-between items-center cursor-pointer" onClick={toggleDetails}>
              <p className="font-medium uppercase">Product Details</p>
              <span>{detailsOpen ? '-' : '+'}</span>
            </div>
            {detailsOpen && <div className="mt-2">Detailed information about the product...</div>}
          </div>
          <div className="mt-4">
            <div className="flex justify-between items-center cursor-pointer" onClick={toggleSize}>
              <p className="font-medium uppercase">Size</p>
              <span>{sizeOpen ? '-' : '+'}</span>
            </div>
            {sizeOpen && <div className="mt-2">Size information about the product...</div>}
          </div>
          <div className="mt-4">
            <div className="flex justify-between items-center cursor-pointer" onClick={toggleShare}>
              <p className="font-medium uppercase">Share</p>
              <span>{shareOpen ? '-' : '+'}</span>
            </div>
            {shareOpen && <div className="mt-2">Share options...</div>}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailPage;
