import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
// import { AuthContext } from '../auth/AuthContext';

const Navbar = () => {
    // const { user, logout } = useContext(AuthContext);

    return (
        <nav className="bg-white p-4 text-black">
            <div className="container mx-auto flex justify-between items-center">
                <img src='' alt=''/>
                <div>
                    <Link to="/" className="mr-4">Home</Link>
                    <Link to="/products" className="mr-4">Occasions</Link>
                    <Link to="/products" className="mr-4">Sell an Attire</Link>
                    {/* {user && <Link to="/favorites" className="mr-4">Favorites</Link>} */}
                    {/* {user && <Link to="/cart" className="mr-4">Cart</Link>} */}
                </div>
                <div>

                </div>
                <div>
                <Link to="/login" className="mr-4">Login</Link>
                            <Link to="/signup" className="mr-4">Signup</Link>
                    {/* {user ? (
                        <>
                            <Link to="/profile" className="mr-4">{user.email}</Link>
                            <button onClick={logout} className="bg-red-500 px-4 py-2 rounded">Logout</button>
                        </>
                    ) : (
                        <>
                            <Link to="/login" className="mr-4">Login</Link>
                            <Link to="/signup" className="mr-4">Signup</Link>
                        </>
                    )} */}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
