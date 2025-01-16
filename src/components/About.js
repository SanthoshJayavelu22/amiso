import React from "react";
import {
  FaChalkboardTeacher,
  FaHeadset,
  FaCheckCircle,
  FaBroom,
  FaHandSparkles,
} from "react-icons/fa";
import aboutImg from "../images/about-img.jpg";

const features = [
  {
    icon: <FaChalkboardTeacher className="text-3xl md:text-6xl" />,
    title: "Professional Team",
    description:
      "Our team uses a sanitizing solution to wipe down light switches and doorknobs.",
  },
  {
    icon: <FaHeadset className="text-3xl md:text-6xl" />,
    title: "24/7 Services",
    description:
      "We encourage our customers to let us know in advance of an appointment.",
  },
  {
    icon: <FaCheckCircle className="text-3xl md:text-6xl" />,
    title: "Service Guarantee",
    description:
      "We ensure our team members switch out all cleaning cloths and mopheads.",
  },
];

const services = [
  {
    icon: <FaHandSparkles className="text-blue text-6xl mb-4" />,
    title: "Professional Cleaning",
    description:
      "We specialize in intelligent & effective search and believe in the power of partnerships to grow business.",
  },
  {
    icon: <FaBroom className="text-blue text-6xl mb-4" />,
    title: "Fast and Efficient",
    description:
      "We specialize in intelligent & effective search and believe in the power of partnerships to grow business.",
  },
];

const About = () => {
  return (
    <div className="bg-white mt-5 md:mt-10 pt-10">
      <div className="container mx-auto px-3 md:px-0 md:max-w-screen-xl text-center">
        <h3 className="text-sm uppercase tracking-wide text-gray-400 font-semibold">
          Why Choose Us
        </h3>
        <h2 className="text-4xl font-bold mt-2 mb-4">Tradition of Trust</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          We specialize in intelligent & effective search and believe in the
          power of partnerships to grow business.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-5">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6"
            >
              <div className="bg-white shadow-xl text-blue p-4 md:p-8 rounded-full">
                {feature.icon}
              </div>
              <h3 className="text-lg md:text-xl font-semibold mt-4">
                {feature.title}
              </h3>
              <p className="text-gray-400 mt-2">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 mt-5 md:mt-16">
        <div>
          <img src={aboutImg} className="w-full h-full" alt="About Us" />
        </div>
        <div
          className="p-6 md:p-20 relative md:right-28 md:top-20 bg-white"
          style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.1)" }}
        >
          <p className="text-md font-bold text-gray-400">MAID FOR YOU</p>
          <h4 className="font-bold text-3xl mt-2 md:mt-3">
            A Cleaner Place is a Safer Place.
          </h4>
          <p className="text-gray-400 mt-2 md:mt-3">
            We specialize in intelligent & effective search and believe in the
            power of partnerships to grow business.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 mt-5 md:mt-10">
            {services.map((service, index) => (
              <div key={index}>
                {service.icon}
                <h4 className="font-bold text-xl mt-2 md:mt-3">
                  {service.title}
                </h4>
                <p className="text-gray-400 mt-2 md:mt-3">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
