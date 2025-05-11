/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Designs = ({ designItems }) => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 to-black py-20 px-8 text-white">
      <h2 className="text-4xl font-bold text-center mb-10">My Designs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {designItems.map((design) => (
          <div
            key={design.id}
            className="bg-white/10 p-4 rounded-xl shadow-lg"
          >
            <img
              src={design.image}
              alt={design.title}
              className="w-full h-60 object-cover rounded-lg mb-4"
            />
            <div className="flex items-center flex-wrap justify-between text-xl font-semibold">
              <h3>{design.title}</h3>
              <Link to={design.preview} className="underline hover:text-blue-700">Preview</Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Designs;
