import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8 mt-5 md:mt-16">
        <div className="container mx-auto px-3 md:px-0 md:max-w-screen-xl py-10">

      <div className=" grid grid-cols-1 md:grid-cols-4 gap-5">
  
        <div>
          <h2 className="text-5xl font-bold text-black">amiso</h2>
          <p className="mt-4 text-gray-400">
            Washla customers have a tremendous opportunity to answer the call of logistics.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Get In Touch</h3>
          <p className="mt-5 text-gray-400">
            8273 NW 56th ST Miami, Florida, 33195 United States
          </p>
          <p className="mt-2 text-gray-400">info@amiso.com</p>
          <p className=" text-gray-400">052 5401 3322</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <div className=" grid grid-cols-2 ">
          <ul className="mt-5 space-y-2">
            <li><a href="/" className="text-gray-400 hover:underline">Home</a></li>
            <li><a href="/" className="text-gray-400 hover:underline">About</a></li>
            <li><a href="/" className="text-gray-400 hover:underline">Services</a></li>
            <li><a href="/" className="text-gray-400 hover:underline">Team</a></li>

          </ul>
          <ul className="mt-5 space-y-2">
        
            <li><a href="/" className="text-gray-400 hover:underline">FAQ</a></li>
            <li><a href="/" className="text-gray-400 hover:underline">Contact Us</a></li>
            <li><a href="/" className="text-gray-400 hover:underline">Gallery</a></li>
            <li><a href="/" className="text-gray-400 hover:underline">Blogs</a></li>
          </ul>
        </div>  </div>


        <div>
          <h3 className="text-lg font-semibold">Our Newsletter</h3>
          <p className="mt-5 text-gray-400">
            Subscribe to our newsletter to receive the latest news about our services.
          </p>
          <div className="mt-4 flex">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-1 border bg-gray-300 text-black border-gray-300 rounded-l-md "
            />
            <button className="bg-blue text-white px-4 py-1 rounded-r-md ">
              Sign Up
            </button>
          </div>
        </div>
      </div>

  
      <div className="border-t flex justify-between items-center border-gray-300 mt-8 pt-5 md:pt-10 ">
        <p className="text-gray-400 text-sm">
          © 2023 amiso all rights reserved.
        </p>
        <div className="flex justify-center mt-4 space-x-4 text-gray-400">
          <FaFacebook className="hover:text-blue-600 cursor-pointer" />
          <FaTwitter className="hover:text-blue-400 cursor-pointer" />
          <FaInstagram className="hover:text-pink-500 cursor-pointer" />
          <FaLinkedin className="hover:text-blue-700 cursor-pointer" />
        </div>
      </div></div>
    </footer>
  );
};

export default Footer;