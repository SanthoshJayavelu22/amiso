import React from "react";
import team1 from "../images/team1.png";
import team2 from "../images/team2.png";
import team3 from "../images/team3.png";

const Team = () => {
  const teamMembers = [
    {
      name: "Monica Gordon",
      role: "House Cleaning",
      img: team1,
    },
    {
      name: "Laura Jones",
      role: "Cleaner",
      img: team2,
    },
    {
      name: "Sara Ryan",
      role: "House Cleaner",
      img: team3,
    },
  ];

  return (
    <div className="container mx-auto px-3 md:px-0 md:max-w-screen-xl">
      <div className="container mx-auto text-center px-4 py-10 md:py-16">
        <span className="text-center">
          <h3 className="text-sm uppercase tracking-wide text-gray-400 font-semibold">
            MEET OUR
          </h3>
          <h2 className="text-4xl font-extrabold mt-2 mb-4">Our Team</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We specialize in intelligent & effective search and believe in the
            power of partnerships to grow business.
          </p>
        </span>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white   overflow-hidden">
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-auto "
              />
              <div className="p-6 text-center w-11/12 relative left-5 bottom-6 bg-white z-30 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-800">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-400 mt-1">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
