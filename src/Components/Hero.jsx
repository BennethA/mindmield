/* eslint-disable no-unused-vars */
import { FaPaintBrush } from "react-icons/fa";
import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-t from-[#121212] via-[#2b5876] to-[#4e4376] px-6 text-center text-white">
      {/* Background overlay */}
      <div className="fixed inset-0 bg-[radial-gradient(circle,_rgba(255,255,255,0.1)_0%,_rgba(0,0,0,0.8)_100%)] opacity-65"></div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto pt-40 pb-24">
        <div className="flex justify-center mb-6">
          <div className="bg-[#fc2e2ec4] text-white p-5 rounded-full shadow-2xl animate-spin">
            <FaPaintBrush className="text-3xl" />
          </div>
        </div>
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
          Where <span className="text-rose-400">Creativity</span> Meets{" "}
          <span className="text-sky-400">Code</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl font-medium max-w-2xl mx-auto">
          Dive into handcrafted digital art that fuses bold visuals with
          cutting-edge development.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <Link
            to="/designs"
            className="bg-rose-600 hover:bg-rose-700 text-white font-semibold py-3 px-6 rounded-full shadow-md"
          >
            Browse Designs
          </Link>
          <Link
            to="/contact"
            className="border border-rose-500 text-rose-400 hover:bg-rose-100 hover:text-rose-600 font-semibold py-3 px-6 rounded-full"
          >
            Contact Me
          </Link>
        </div>
      </div>

      <div className="flex w-full gap-3 flex-wrap items-center justify-center absolute bottom-0 right-0 left-0 top-[80%] overflow-hidden bg-transparent">
        <div className="bg-gradient-to-t from-blue-500 to-[#121212] w-[300px] h-[300px] rounded-full blur-3xl"></div>
        <div className="bg-gradient-to-t from-blue-500 to-[#121212] w-[300px] h-[300px] rounded-full blur-3xl"></div>
        <div className="bg-gradient-to-t from-blue-500 to-[#121212] w-[300px] h-[300px] rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default Hero;