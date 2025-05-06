/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

const Designs = ({ designItems }) => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 to-black py-20 px-8 text-white">
      <h2 className="text-4xl font-bold text-center mb-10">My Designs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {designItems.map((design) => (
          <Link
            key={design.id}
            to={`/design/${design.id}`}
            className="bg-white/10 backdrop-blur-lg p-4 rounded-xl hover:scale-105 transition duration-[0.5s] shadow-lg"
          >
            <img
              src={design.image}
              alt={design.title}
              className="w-full h-60 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold">
              {design.title}
            </h3>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Designs;
