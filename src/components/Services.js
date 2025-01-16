import React from "react";
import { FaBroom, FaHandSparkles, FaHome } from "react-icons/fa";

const Services = () => {
  const backgroundImage2 = require("../images/ser-img.jpg");

  const servicesData = [
    {
      icon: <FaHandSparkles className="text-white text-6xl mb-4" />,
      title: "Professional Cleaning",
      description:
        "Housekeeping is responsible for minor security in hotel Ecosystem for Food and Cleaner through.",
    },
    {
      icon: <FaBroom className="text-white text-6xl mb-4" />,
      title: "Fast and Efficient",
      description:
        "Our aim is to keep the house clean – Your aim will help through the Digital Innovation World Summit.",
    },
    {
      icon: <FaHome className="text-white text-6xl mb-4" />,
      title: "Renew Your Look",
      description:
        "Both of us take a lot of time in getting cleaned and beautified. Professional Service.",
    },
  ];

  return (
    <div
      className="w-auto h-auto pb-10 md:pb-20 bg-cover bg-center overflow-x-hidden"
      style={{ backgroundImage: `url(${backgroundImage2})` }}
    >
      <div className="container mx-auto px-3 md:px-0 md:max-w-screen-xl mt-5 md:mt-32">
        <div className="text-center">
          <h3 className="text-sm uppercase tracking-wide text-white font-semibold">
            Why Choose Us
          </h3>
          <h2 className="text-4xl font-extrabold mt-2 mb-4 text-black">
            Our Great Service
          </h2>
          <p className="text-white max-w-2xl mx-auto">
            We specialize in intelligent & effective search and believe in the
            power of partnerships to grow business.
          </p>
        </div>

        <div className="container mt-5 md:mt-10 mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-4">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="bg-blue bg-opacity-35 p-12 shadow-md text-white "
            >
              {service.icon}
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
