import { useState } from "react";
import Logo from "../../../assets/images/food-logo.png";
import DarkMode from "./DarkMode";
import { Link, NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

import { toast } from "react-toastify";
import useCart from "../../../Hooks/useCart";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logOut } = useAuth();
  const [cart] = useCart();

  const navigate = useNavigate();

  const handleSignOut = () => {
    logOut()
      .then(() => {
        toast.success("User logged out Successfully");
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  return (
    <nav className="bg-white dark:bg-gray-900 dark:text-white duration-200 lg:sticky lg:top-0 lg:z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div>
            <a className="font-bold text-2xl sm:text-3xl flex gap-2">
              <img src={Logo} alt="Logo" className="md:w-10 w-7" />
              Foodie
            </a>
          </div>
          <div className="-mr-2 flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-black dark:text-white hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white font-extrabold"
            >
              <svg
                className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
              <svg
                className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="hidden lg:block">
            <div className="flex items-center space-x-4">
              <NavLink
                to="/"
                className="text-black dark:text-white hover:text-blue-600 px-3 py-2 rounded-md text-lg italic font-semibold"
              >
                Home
              </NavLink>
              <NavLink
                to="/contact-us"
                className="text-black dark:text-white hover:text-blue-600 px-3 py-2 rounded-md text-lg italic font-semibold"
              >
                Contact Us
              </NavLink>
              <NavLink
                to="/dashboard"
                className="text-black dark:text-white hover:text-blue-600 px-3 py-2 rounded-md text-lg italic font-semibold"
              >
                Dashboard
              </NavLink>
              <NavLink
                to="/our-menu"
                className="text-black dark:text-white hover:text-blue-600 px-3 py-2 rounded-md text-lg italic font-semibold"
              >
                Our Menu
              </NavLink>
              <NavLink
                to="/order-food/salads"
                className="text-black dark:text-white hover:text-blue-600 px-3 py-2 rounded-md text-lg italic font-semibold"
              >
                Order Food
              </NavLink>
            </div>
          </div>

          {/* cart icon */}
          <Link to="/dashboard/cart">
            <div className="flex items-center justify-center bg-white dark:bg-black">
              <div className="relative scale-75">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-8 w-8 text-gray-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>
                <span className="absolute -top-2 left-4 rounded-full bg-red-500 p-0.5 px-2 text-sm text-red-50">
                  {cart.length}
                </span>
              </div>
            </div>
          </Link>

          <div>
            <DarkMode></DarkMode>
          </div>

          <div className="hidden lg:block">
            {user ? (
              <div className="flex gap-6 items-center">
                <div className="relative">
                  <img
                    className="w-12 mt-4 mb-4 h-12 rounded-full border-blue-600 cursor-pointer"
                    src={
                      user?.photoURL || "https://i.ibb.co/FBZQVTZ/defalt.jpg"
                    }
                    alt=""
                    title={user.displayName} // Add the title attribute here
                  />
                </div>
                <button
                  onClick={handleSignOut}
                  className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 font-semibold italic text-white py-1 px-6 rounded-full flex items-center text-lg"
                >
                  Log Out
                </button>
              </div>
            ) : (
              <div className="ml-4 flex items-center md:ml-6">
                <Link to="/login">
                  <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 font-semibold italic text-white py-1 px-6 rounded-full flex items-center text-lg gap-3">
                    Login
                  </button>
                </Link>
                <Link to="/sign-up">
                  <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 font-semibold italic text-white py-1 px-5 rounded-full flex text-lg items-center mx-4 gap-3">
                    Sign up
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      <div
        className={`${isOpen ? "block" : "hidden"} lg:hidden`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-3 sm:px-3">
          <NavLink
            to="/"
            className="text-black hover:text-blue-600 block px-4 py-2 rounded-md dark:text-white text-lg md:text-xl italic font-semibold"
          >
            Home
          </NavLink>
          <NavLink
            to="/contact-us"
            className="text-black dark:text-white text-lg md:text-xl italic font-semibold hover:text-blue-600 block px-3 py-2 rounded-md"
          >
            Contact Us
          </NavLink>
          <NavLink
            to="/dashboard"
            className="text-black dark:text-white text-lg md:text-xl italic font-semibold hover:text-blue-600 block px-3 py-2 rounded-md"
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/our-menu"
            className="text-black dark:text-white text-lg md:text-xl italic font-semibold hover:text-blue-600 block px-3 py-2 rounded-md"
          >
            Our Menu
          </NavLink>
          <NavLink
            to="/order-food/salads"
            className="text-black dark:text-white text-lg md:text-xl italic font-semibold hover:text-blue-600 block px-3 py-2 rounded-md"
          >
            Order Food
          </NavLink>
          <div className="mt-2">
            {user ? (
              <div className="flex gap-6 items-center">
                <div className="relative">
                  <img
                    className="w-12 mt-4 mb-4 h-12 rounded-full border-blue-600 cursor-pointer"
                    src={
                      user?.photoURL || "https://i.ibb.co/FBZQVTZ/defalt.jpg"
                    }
                    alt=""
                    title={user.displayName} // Add the title attribute here
                  />
                </div>
                <button
                  onClick={handleSignOut}
                  className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 font-semibold italic text-white py-1 px-6 rounded-full flex items-center text-lg"
                >
                  Log Out
                </button>
              </div>
            ) : (
              <>
                <Link to="/login">
                  <button className="block mt-1 md:w-1/2 w-full text-white font-semibold text-xl px-4 py-2 rounded-md italic bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200">
                    Login
                  </button>
                </Link>
                <Link to="/sign-up">
                  <button className="block mt-1 md:w-1/2 text-white font-semibold text-xl w-full px-4 py-2 rounded-md italic bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200">
                    Sign up
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
