import React from "react";

const StyleCard = ({ imageSrc, buttonContent, title, description, reverse }) => {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-lg overflow-hidden md:max-w-full shadow-3xl" >
      <div className={`md:flex md:justify-center md:items-center md:gap-9 md:m-3 flex-col justify-center ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
        <img
          className="mt-4 h-60 w-full object-cover md:h-auto md:w-1/3"
          src={imageSrc}
          alt=""
        />
        <div className="flex justify-center">
          <button className="w-16 h-16 rounded-full bg-black text-white font-bold text-lg flex items-center justify-center mx-auto mb-4 md:w-24 md:h-24 md:mb-0">
            {buttonContent}
          </button>
          <div className="p-4">
            <p className="uppercase font-semibold text-sm md:text-lg tracking-wide text-indigo-500 mb-2">
              {title}
            </p>
            <p className="text-sm md:text-base">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StyleCard;
