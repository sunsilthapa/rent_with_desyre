import React from "react";
import FavoriteItem from "../components/FavoriteItemCard"; // Assume this component exists
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/NavBar";
import MainImageCard from "../components/common/MainImageCard";
import heroImage from '../assets/images/hero_image.png'

const FavoritesPage = () => {
  return (
    <>
      <Navbar />
      <MainImageCard description={`Your Favorites`} heroImage={heroImage}/>
      <div className="container mx-auto mt-3 px-4">
        
        <div className="flex w-full h-auto gap-4 mt-10 flex-wrap">
          <FavoriteItem
            imageSrc="https://www.clipartmax.com/png/middle/426-4263190_coat-png-photo-suit-png.png"
            itemName="Corporate suit"
            itemDescription="100% silk, 100% office-ready"
            itemPrice="2002"
          />
          <FavoriteItem
            imageSrc="https://www.clipartmax.com/png/middle/426-4263190_coat-png-photo-suit-png.png"
            itemName="Corporate suit"
            itemDescription="100% silk, 100% office-ready"
            itemPrice="2002"
          />
          <FavoriteItem
            imageSrc="https://www.clipartmax.com/png/middle/426-4263190_coat-png-photo-suit-png.png"
            itemName="Corporate suit"
            itemDescription="100% silk, 100% office-ready"
            itemPrice="2002"
          />
          {/* Add more FavoriteItem components here if needed */}
        </div>
        <div className="fixed bottom-14 right-5 bg-white p-4 rounded-lg w-full sm:w-1/3 md:w-1/4 shadow-md">
          <div className="flex flex-col justify-between items-center mb-4">
            <Link to="/shop">
              <button className="bg-black w-full hover:bg-slate-800 hover:text-white text-white px-4 mt-3 py-2 rounded-md">
                Continue Shopping
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default FavoritesPage;
