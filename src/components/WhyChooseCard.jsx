import React from 'react';

const ImageCard = ({ imageSrc, description }) => {
  return (
    <div className=" w-50 h-auto rounded  text-center flex flex-col items-center ">
      <img className="w-20 h-auto" src={imageSrc} alt="Image Card" />
      <div className="px-2 py-4">
        <p className="text-gray-700 text-base text-sm">{description}</p>
      </div>
    </div>
  );
};

export default ImageCard;
