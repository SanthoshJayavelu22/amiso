import React from "react";
import { FaBroom, FaHandSparkles, FaHome } from "react-icons/fa";

const Features = () => {
  return (
    <div className="container mx-auto px-3 md:px-0 md:max-w-screen-xl">
      <div className=" py-10">
        <div className="container relative md:bottom-20 mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-4">
          <div className="bg-white p-12 items-center  shadow-md text-center">
            <FaHandSparkles className="text-blue text-6xl mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Professional Cleaning</h3>
            <p className="text-gray-400 ">
              Housekeeping is responsible for minor security in hotel Ecosystem
              for Food and Cleaner through.
            </p>
          </div>

          <div className="bg-white p-12 shadow-md text-center">
            <FaBroom className="text-blue text-6xl mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Fast and Efficient</h3>
            <p className="text-gray-400">
              Our aim is to keep the house clean – Your aim will help through
              the Digital Innovation World Summit.
            </p>
          </div>

          <div className="bg-white p-12  shadow-md text-center">
            <FaHome className="text-blue text-6xl mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Renew Your Look</h3>
            <p className="text-gray-400">
              Both of us take a lot of time in getting cleaned and beautified.
              Professional Service.
            </p>
          </div>
        </div>

        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10 mt-10 md:mb-10 px-4 ">
          <div>
            {" "}
            <h2 className="text-4xl font-bold text-black mb-4">
              A Clean House is a Happy Place!
            </h2>
            <p className="text-white mb-6 font-semibold">
              Washla has met the demands of a growing world.
            </p>
          </div>

          <div>
            {" "}
            <p className="text-white max-w-2xl mx-auto">
              <span className="text-5xl font-medium">W</span> ashla customers
              have a tremendous opportunity to answer the call of logistics
              needs across the globe. Has 26 affiliated state soybean
              associations representing 30 soybean-producing states.
            </p>
          </div>

          <p className="text-white max-w-2xl mx-auto">
            World's leading non-asset-based supply chain management companies.
            We design and implement industry-leading intelligent & effective
            search and believe in the power of partnerships to grow businesses.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
