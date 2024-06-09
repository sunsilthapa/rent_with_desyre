import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-auto pt-4 pb-3 flex justify-between items-center text-sm text-center text-white bg-black">
      <div className="w-1/4 h-auto">
        <p className="font-extrabold mb-3 text-xl">Rent with Desyre</p>
        <p className="text-xs">
          Rent With Desyre is your gateway to sustainable fashion. We offer a
          curated collection of high-quality clothing for rent, promoting style
          versatility.
        </p>
        <button className="px-8 py-2 rounded-lg bg-white text-black font-medium text-l mt-3"> Contact Us</button>
        <ul>
            <li></li>
            <li></li>
            <li></li>
        </ul>
      </div>

      <ul className="w-1/4 h-auto">
        <li className="font-bold uppercase mb-2">Basics</li>
        <li>How it works</li>
        <li>Testimonials</li>
        <li>Buy from us</li>
      </ul>

      <ul className="w-1/4 h-auto">
        <li className="font-bold uppercase mb-2">Company</li>
        <li>Vision</li>
        <li>Story</li>
        <li>Community</li>
      </ul>
      <ul className="w-1/4 h-auto">
        <li className="font-bold uppercase mb-2">Get Help</li>
        <li>FAQs </li>
        <li>Contact Us</li>
      </ul>

     
    </div>
  );
};

export default Footer;
