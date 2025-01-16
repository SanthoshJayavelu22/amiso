import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import aboutImg from '../images/about-img.jpg'
import hero from '../images/hero-img.jpg'
import ser from '../images/ser-img.jpg'
import user1 from '../images/user1.png'
import user2 from '../images/user2.png'
import user3 from '../images/user3.png'


const data = [
  {
    date: "12",
    month: "Nov",
    category: "CLEANING",
    title: "Temporary Ruling Issued",
    description: "Washla has met the demands of a growing world cleaning tremendous.",
    name: "Martha Smith",
    role: "Washla CEO",
    image: aboutImg, 
    profile: user1, 
  },
  {
    date: "11",
    month: "Nov",
    category: "CLEANING",
    title: "The Expands California",
    description: "Welcomed and every sed ut perspiciatis unde omnis iste natus.",
    name: "Laura Jones",
    role: "Accounting",
    image: hero, 
    profile: user2, 
  },
  {
    date: "10",
    month: "Nov",
    category: "CLEANING",
    title: "Temporary Ruling Issued",
    description: "Washla has met the demands of a growing world. The Cleaning.",
    name: "Matt Ryan",
    role: "Lawyer",
    image: ser,
    profile: user3, 
  },
];

const News = () => {
  return (
    <div className="container mx-auto px-3 md:px-0 md:max-w-screen-xl">
    <div className=" mt-5 md:mt-10">
    <span className='text-center'>
      <h3 className="text-sm uppercase tracking-wide text-gray-400 font-semibold">
        WHY CHOOSE US
      </h3>
      <h2 className="text-4xl font-extrabold mt-2 mb-4">
      React News
      </h2>
      <p className="text-gray-400 max-w-2xl mx-auto">
        We specialize in intelligent & effective search and believe in the power of partnerships to grow business.
      </p></span>


      <div className="grid grid-cols-1 mt-5 md:mt-10 md:grid-cols-3 gap-6 md:gap-16">
        {data.map((item, index) => (
          <div
            key={index}
            className="relative bg-white  border-b-4 border-blue overflow-hidden"
          >

            <img
              src={item.image}
              alt={item.title}
              className="w-full h-64 object-cover"
            />
  
            <div className="absolute top-0 right-0 bg-blue text-white text-center  w-16 p-4">
              <h4 className="text-xl font-extrabold">{item.date}</h4>
              <span className="text-sm">{item.month}</span>
            </div>
      
            <div className="p-6 w-11/12 h-48 bg-white relative bottom-16 left-4" >
              <span className="text-xs uppercase text-gray-400 font-bold">
                {item.category}
              </span>
              <h3 className="text-lg font-extrabold mt-1 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-400">{item.description}</p>
              <div className="flex items-center mt-7">
                <img
                  src={item.profile}
                  alt={item.name}
                  className="w-16 h-16 rounded-full object-cover mr-3"
                />
                <div>
                  <h4 className="text-lg font-semibold">{item.name}</h4>
                  <p className="text-md text-gray-400">{item.role}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div></div>
  );
};

export default News;
