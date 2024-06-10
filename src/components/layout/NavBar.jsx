// import { AuthContext } from '../auth/AuthContext';
// const Navbar = () => {
// const { user, logout } = useContext(AuthContext);


import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoImage from "../../assets/images/black_logo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className="w-full h-14 bg-white p-4 text-black mx-auto flex justify-between items-center">
      <Link to="/" className="mr-4 cursor-pointer"><img src={logoImage} alt="Hero" className="w-12 h-auto" /></Link>
      
      <ul className="md:flex hidden">
        <li className="mx-3 cursor-pointer">
          <Link to="/how_it_works" className="mr-4 cursor-pointer">
            How it works 
          </Link>
        </li>
        <li className="mx-3 cursor-pointer">
          <Link to="/products" className="mr-4">
            Occasions
          </Link>
        </li>
        <li className="mx-3 cursor-pointer">
          <Link to="/sell_an_attire" className="mr-4">
            Sell an Attire
          </Link>
        </li>
      </ul>
      
      <div className="md:flex hidden">
        <Link to="/login" className="mr-4">
          Login
        </Link>
        <Link to="/signup" className="mr-4">
          Signup
        </Link>
      </div>
      
      <div className="md:hidden flex items-center">
        <button onClick={handleNav} className="text-4xl">
          &#8801;
        </button>
      </div>
      
      <div className={`absolute top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center transform ${nav ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}>
        <button onClick={handleNav} className="absolute top-4 right-4 text-4xl">
          &times;
        </button>
        <ul className="flex flex-col items-center">
          <li className="my-4 text-sm">
            <Link to="/" onClick={handleNav}>
              Home
            </Link>
          </li>
          <li className="my-4 text-sm">
            <Link to="/products" onClick={handleNav}>
              Occasions
            </Link>
          </li>
          <li className="my-4 text-sm">
            <Link to="/sell_an_attire" onClick={handleNav}>
              Sell an Attire
            </Link>
          </li>
          <li className="my-4 text-sm">
            <Link to="/login" onClick={handleNav}>
              Login
            </Link>
          </li>
          <li className="my-4 text-sm">
            <Link to="/signup" onClick={handleNav}>
              Signup
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;



//         {/* {user ? (
//                         <>
//                             <Link to="/profile" className="mr-4">{user.email}</Link>
//                             <button onClick={logout} className="bg-red-500 px-4 py-2 rounded">Logout</button>
//                         </>
//                     ) : (
//                         <>
//                             <Link to="/login" className="mr-4">Login</Link>
//                             <Link to="/signup" className="mr-4">Signup</Link>
//                         </>
//                     )} */}