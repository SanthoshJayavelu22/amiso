import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { CiCalculator1 } from "react-icons/ci";
import Slider from "./Slider";

const Header = () => {
  const backgroundImage = require("../images/hero-img.jpg");
  return (
    <div
      className="w-auto h-auto lg:h-screen  bg-cover bg-center overflow-x-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="container mx-auto px-3 md:px-0 md:max-w-screen-xl">
        <div className="hidden md:flex flex-col md:flex-row justify-between mt-5 px-5">
          <div className="flex gap-4 items-center">
            <p className="text-white flex items-center">
              <FaPhoneAlt size={16} className="mr-2" color="fff" />
              +121-456-9880
            </p>

            <p className="text-white flex items-center">
              <IoMail size={16} className="mr-2" color="fff" />
              Info@yourdomain
            </p>
          </div>

          <div className="flex gap-4 items-center mt-1 md:mt-0">
            <span className="text-white flex ">
              <FaFacebookF FaPhoneAlt size={16} className="mr-2" color="fff" />
              <FaInstagram FaPhoneAlt size={16} className="mr-2" color="fff" />
              <FaTwitter FaPhoneAlt size={16} className="mr-2" color="fff" />
              <FaLinkedinIn FaPhoneAlt size={16} className="mr-2" color="fff" />
            </span>

            <button className="text-white bg-blue flex items-center p-2 rounded-md">
              <CiCalculator1 size={16} className="mr-2" color="fff" />
              GET A QUOTE
            </button>
          </div>
        </div>

        <nav className="bg-white border-gray-200 bg-opacity-50 p-5 rounded-md mt-5">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a
              href="/"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="h-8"
                alt="Flowbite Logo"
              />
              <span className="self-center text-2xl md:text-4xl font-semibold whitespace-nowrap text-black">
                Amiso
              </span>
            </a>
            <button
              data-collapse-toggle="navbar"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
              aria-controls="navbar-default"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="black"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
            <div
              className="hidden w-full md:block md:w-auto"
              id="navbar-default"
            >
              <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 ">
                <li>
                  <a
                    href="/"
                    className="block py-2 px-3 text-black  rounded md:bg-transparent  md:p-0 "
                    aria-current="page"
                  >
                    HOME
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="block py-2 px-3 text-black  rounded md:bg-transparent  md:p-0 "
                  >
                    ABOUT
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="block py-2 px-3 text-black  rounded md:bg-transparent  md:p-0 "
                  >
                    PAGES
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="block py-2 px-3 text-black  rounded md:bg-transparent  md:p-0 "
                  >
                    GALLERY
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="block py-2 px-3 text-black  rounded md:bg-transparent  md:p-0 "
                  >
                    BLOG
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="block py-2 px-3 text-black  rounded md:bg-transparent  md:p-0 "
                  >
                    CONTACT
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <Slider />
      </div>
    </div>
  );
};

export default Header;
