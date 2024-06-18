import React from 'react';
import { FaHeart } from 'react-icons/fa6';

const FavoriteItemCard = ({ imageSrc, itemName, itemDescription, itemPrice }) => {
  return (
    <div className="favorite-item-card p-4 border rounded-md shadow-sm flex flex-col  items-center gap-4">
      <img src={imageSrc} alt={itemName} className="w-full h-32 object-cover rounded-md" />
      <div className="flex flex-col items-start">
        <h3 className="text-lg font-bold">{itemName}</h3>
        <p className="text-gray-600">{itemDescription}</p>
        <p className="text-sm text-green-600 ">Rs. {itemPrice}</p>
      </div>
      <div className='flex w-full justify-between  items-center'>
        <button className='border-solid border-2 border-slate-600  rounded-full  px-2 py-1 '>category</button>
        <FaHeart color='red' size={18}/>
        </div>
    </div>
  );
};

export default FavoriteItemCard;
