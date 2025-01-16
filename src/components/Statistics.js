import React from "react";
import { FaPlayCircle, FaBroom, FaHandSparkles, FaHome } from "react-icons/fa";

const Statistics = () => {
  const backgroundImage3 = require("../images/bg.jpg");

  const statsData = [
    {
      icon: <FaHome className="text-blue text-6xl mr-5" />,
      value: "352",
      label: "Happy Customers",
    },
    {
      icon: <FaBroom className="text-blue text-6xl mr-5" />,
      value: "842",
      label: "Houses Cleaned",
    },
    {
      icon: <FaHandSparkles className="text-blue text-6xl mr-5" />,
      value: "489",
      label: "Awards Received",
    },
    {
      icon: <FaBroom className="text-blue text-6xl mr-5" />,
      value: "1344",
      label: "Glass Cleaned",
    },
  ];

  return (
    <div
      className="w-auto h-auto bg-cover bg-center overflow-x-hidden"
      style={{ backgroundImage: `url(${backgroundImage3})` }}
    >
      <div className="container mx-auto px-3 md:px-0 md:max-w-screen-xl py-10 md:py-36">
        <div className="text-center">
          <FaPlayCircle className="mx-auto text-7xl text-blue" />
          <h3 className="text-lg mt-3 md:mt-6 tracking-wide text-white font-semibold">
            Clean Your Worries Away
          </h3>
          <h2 className="text-4xl text-white font-extrabold mt-2 mb-4">
            Need Help with Cleaning?
          </h2>
        </div>

        <button className="bg-blue px-8 py-3 text-center text-lg text-white mx-auto flex items-center rounded-md">
          Request Call Back
        </button>

        <div className="bg-white p-10 relative top-8 md:top-32 grid grid-cols-2 md:grid-cols-4 gap-5">
          {statsData.map((stat, index) => (
            <div
              key={index}
              className={`flex justify-center ${
                index !== statsData.length - 1 ? "md:border-r-2" : ""
              }`}
            >
              {stat.icon}
              <div>
                <h2 className="text-black text-3xl font-bold">{stat.value}</h2>
                <p className="text-md text-gray-400">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Statistics;
