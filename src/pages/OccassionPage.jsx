import React, { useState } from 'react';
import Navbar from '../components/layout/NavBar';
import SingleProductCard from '../components/ProductCard';

const OccassionPage = () => {
  const [genderOpen, setGenderOpen] = useState(true);
  const [categoriesOpen, setCategoriesOpen] = useState(true);
  const [priceOpen, setPriceOpen] = useState(true);

  const [genderFilters, setGenderFilters] = useState({
    all: false,
    men: false,
    women: false,
  });

  const [categoryFilters, setCategoryFilters] = useState({
    all: false,
    gown: false,
    suit: false,
  });

  const [priceFilters, setPriceFilters] = useState({
    min: '',
    max: '',
  });

  const toggleGender = () => setGenderOpen(!genderOpen);
  const toggleCategories = () => setCategoriesOpen(!categoriesOpen);
  const togglePrice = () => setPriceOpen(!priceOpen);

  const handleClearAll = () => {
    setGenderFilters({ all: false, men: false, women: false });
    setCategoryFilters({ all: false, gown: false, suit: false });
    setPriceFilters({ min: '', max: '' });
  };

  const handleGenderChange = (event) => {
    const { name, checked } = event.target;
    setGenderFilters((prevState) => ({ ...prevState, [name]: checked }));
  };

  const handleCategoryChange = (event) => {
    const { name, checked } = event.target;
    setCategoryFilters((prevState) => ({ ...prevState, [name]: checked }));
  };

  const handlePriceChange = (event) => {
    const { name, value } = event.target;
    setPriceFilters((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <>
      <Navbar />
      <div className="flex md:flex-row  flex-col gap-4 m-4">
        <div className="w-full h-1/5 bg-slate-200 md:w-1/3 md:h-screen p-4 rounded-lg shadow-md">
          <div className="flex justify-between items-center mb-4">
            <p className="font-medium uppercase">Filters</p>
            <p className="font-medium uppercase text-red-500 cursor-pointer" onClick={handleClearAll}>
              Clear all
            </p>
          </div>
          <div className="mb-4">
            <div className="flex justify-between items-center cursor-pointer" onClick={toggleGender}>
              <p className="font-medium uppercase">Gender</p>
              <span>{genderOpen ? '-' : '+'}</span>
            </div>
            {genderOpen && (
              <ul className="pl-4 mt-2">
                <li className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    name="all"
                    checked={genderFilters.all}
                    onChange={handleGenderChange}
                    className="form-checkbox text-blue-500 mr-2"
                  />
                  <label>All</label>
                </li>
                <li className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    name="men"
                    checked={genderFilters.men}
                    onChange={handleGenderChange}
                    className="form-checkbox text-blue-500 mr-2"
                  />
                  <label>Men</label>
                </li>
                <li className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    name="women"
                    checked={genderFilters.women}
                    onChange={handleGenderChange}
                    className="form-checkbox text-blue-500 mr-2"
                  />
                  <label>Women</label>
                </li>
              </ul>
            )}
          </div>
          <hr className="mb-4" />
          <div className="mb-4">
            <div className="flex justify-between items-center cursor-pointer" onClick={toggleCategories}>
              <p className="font-medium uppercase">Categories</p>
              <span>{categoriesOpen ? '-' : '+'}</span>
            </div>
            {categoriesOpen && (
              <ul className="pl-4 mt-2">
                <li className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    name="all"
                    checked={categoryFilters.all}
                    onChange={handleCategoryChange}
                    className="form-checkbox text-blue-500 mr-2"
                  />
                  <label>All</label>
                </li>
                <li className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    name="gown"
                    checked={categoryFilters.gown}
                    onChange={handleCategoryChange}
                    className="form-checkbox text-blue-500 mr-2"
                  />
                  <label>Gown</label>
                </li>
                <li className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    name="suit"
                    checked={categoryFilters.suit}
                    onChange={handleCategoryChange}
                    className="form-checkbox text-blue-500 mr-2"
                  />
                  <label>Suit</label>
                </li>
              </ul>
            )}
          </div>
          <hr className="mb-4" />
          <div className="mb-4">
            <div className="flex justify-between items-center cursor-pointer" onClick={togglePrice}>
              <p className="font-medium uppercase">Price</p>
              <span>{priceOpen ? '-' : '+'}</span>
            </div>
            {priceOpen && (
              <div className="pl-4 mt-2">
                <div className="flex items-center mb-2">
                  <label className="mr-2">Min:</label>
                  <input
                    type="number"
                    name="min"
                    value={priceFilters.min}
                    onChange={handlePriceChange}
                    className="form-input w-full p-1 border rounded"
                  />
                </div>
                <div className="flex items-center mb-2">
                  <label className="mr-2">Max:</label>
                  <input
                    type="number"
                    name="max"
                    value={priceFilters.max}
                    onChange={handlePriceChange}
                    className="form-input w-full p-1 border rounded"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="h-auto bg-slate-200 w-full flex flex-wrap justify-center p-4 rounded-lg shadow-md">
          <SingleProductCard
            bgColor="bg-white"
            category="Party"
            title="Shirt"
            price="Rs.680.50"
            imageSrc="https://www.clipartmax.com/png/middle/426-4263190_coat-png-photo-suit-png.png"
          />
          <SingleProductCard
            bgColor="bg-white"
            category="Party"
            title="Shirt"
            price="Rs.680.50"
            imageSrc="https://www.clipartmax.com/png/middle/426-4263190_coat-png-photo-suit-png.png"
          />
          <SingleProductCard
            bgColor="bg-white"
            category="Party"
            title="Shirt"
            price="Rs.680.50"
            imageSrc="https://www.clipartmax.com/png/middle/426-4263190_coat-png-photo-suit-png.png"
          />
          <SingleProductCard
            bgColor="bg-white"
            category="Party"
            title="Shirt"
            price="Rs.680.50"
            imageSrc="https://www.clipartmax.com/png/middle/426-4263190_coat-png-photo-suit-png.png"
          />
          <SingleProductCard
            bgColor="bg-white"
            category="Party"
            title="Shirt"
            price="Rs.680.50"
            imageSrc="https://www.clipartmax.com/png/middle/426-4263190_coat-png-photo-suit-png.png"
          />
          <SingleProductCard
            bgColor="bg-white"
            category="Party"
            title="Shirt"
            price="Rs.680.50"
            imageSrc="https://www.clipartmax.com/png/middle/426-4263190_coat-png-photo-suit-png.png"
          />
        </div>
      </div>
    </>
  );
};

export default OccassionPage;
