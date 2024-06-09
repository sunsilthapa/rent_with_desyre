// src/components/CustomerReviewCard.jsx

import React from "react";

const CustomerReviewCard = ({ imageSrc, review, customerName }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 max-w-xs">
      <img className="w-16 h-16 rounded-full mx-auto" src={imageSrc} alt={customerName} />
      <p className="mt-4 text-center text-gray-700">{review}</p>
      <p className="mt-2 text-center font-semibold">{customerName}</p>
    </div>
  );
};

export default CustomerReviewCard;
