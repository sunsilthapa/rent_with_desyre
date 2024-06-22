import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full h-auto pt-6 pb-6 flex flex-col md:flex-row justify-between items-center text-sm text-center text-white bg-black">
      <div className="w-full md:w-1/4 h-auto mb-6 md:mb-0 md:mr-6">
        <p className="font-extrabold mb-2 text-xl">Rent with Desyre</p>
        <p className="text-xs ml-2 ">
          Rent With Desyre is your gateway to sustainable fashion. We offer a
          curated collection of high-quality clothing for rent, promoting style
          versatility.
        </p>
        <button className="px-8 py-2 rounded-3xl bg-white text-black font-medium text-l mt-5"> Contact Us</button>
        <ul className="flex justify-center gap-5 mt-3">
            <li><FaFacebook/></li>
            <li><FaTwitter/></li>
            <li><FaInstagram/></li>
        </ul>
      </div>

      <ul className="w-1/2 md:w-1/4 h-auto flex flex-col gap-1">
        <li className="font-bold uppercase mb-2">Basics</li>
        <li>How it works</li>
        <li>Testimonials</li>
        <li>Buy from us</li>
      </ul>

      <ul className="w-1/2 md:w-1/4 h-auto  flex flex-col gap-1">
        <li className="font-bold uppercase mb-2">Company</li>
        <li>Vision</li>
        <li>Story</li>
        <li>Community</li>
      </ul>
      <ul className="w-1/2 md:w-1/4 h-auto  flex flex-col gap-1">
        <li className="font-bold uppercase mb-2">Get Help</li>
        <li><Link to='/faq'>FAQs</Link> </li>
        <li>Contact Us</li>
      </ul>
    </div>
  );
};

export default Footer;
