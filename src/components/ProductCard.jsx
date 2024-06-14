import React from "react";

const SingleProductCard = ({ bgColor, category, title, price, imageSrc }) => {
  return (
    <div className={`flex-shrink-0 m-3  overflow-hidden p-2 ${bgColor} rounded-lg max-w-xs w-1/4 h-auto shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-xl`}>
        <img className=" w-full object-cover h-auto" src={imageSrc} alt={title} />
      <div className="relative text-black px-6 pb-6 mt-6">
        <span className="block opacity-75 -mb-1">{category}</span>
        <div className="flex flex-col justify-between">
          <span className="block font-semibold text-xl">{title}</span>
          <span className={` text-black text-xs font-normal  leading-none flex items-center`}>{price}</span>
          <button className="rounded-full bg-black text-white px-1 mt-2 w-20">Rent</button>
        </div>
      </div>
    </div>
  );
};

export default SingleProductCard;
