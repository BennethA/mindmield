/* eslint-disable no-unused-vars */
import React from "react";
import {
  GiAmpleDress,
  GiSewingMachine,
  GiSewingNeedle,
  GiSewingString,
  GiShirtButton,
} from "react-icons/gi";
import { LuShirt } from "react-icons/lu";
import { PiCoatHangerBold, PiNeedleLight } from "react-icons/pi";
import dress from "../assets/dress.png";

const Mary = () => {
  return (
    <div className="bg-none py-20 px-8 text-white flex items-center justify-center">
      <div className="bg-gradient-to-b from-[#ff7272] via-[#fc6e86] to-[#ff5252] h-[600px] w-[600px] rounded-full border-8 border-white shadow-2xl flex items-center justify-center overflow-hidden relative p-6 text-white font-serif z-[10000]">
        {/* Background Icons Layer */}
        <div className="absolute inset-0 z-0 grid grid-cols-10 gap-4 p-4 opacity-20 text-white">
          {Array.from({ length: 100 }, (_, i) => {
            const icons = [
              <PiNeedleLight key="1" />,
              <GiShirtButton key="2" />,
              <GiSewingString key="3" />,
              <GiSewingMachine key="4" />,
              <GiAmpleDress key="5" />,
              <PiCoatHangerBold key="6" />,
              <LuShirt key="7" />,
            ];
            const IconComponent = icons[i % icons.length];
            return (
              <div
                key={i}
                className="flex items-center justify-center text-2xl"
              >
                {IconComponent}
              </div>
            );
          })}
        </div>

        {/* Main Content */}
        <div className="flex flex-col items-center justify-center z-10 text-center space-y-4">
          {/* Dress Image */}
          <img
            src={dress}
            alt="Dress"
            className="w-[140px] h-[220px] drop-shadow-xl"
          />

          {/* Brand Name */}
          <h1 className="text-5xl font-extrabold tracking-wide drop-shadow-md">
            Mary's Fashion Store
          </h1>

          {/* Divider with Icon */}
          <div className="flex items-center justify-center gap-4">
            <hr className="w-[80px] border-t-2 border-white" />
            <GiSewingNeedle className="text-4xl text-white drop-shadow" />
            <hr className="w-[80px] border-t-2 border-white" />
          </div>

          {/* Tagline */}
          <p className="text-xl italic tracking-wide font-medium">
            Elevate Your Style
          </p>

          {/* Contact */}
          <div className="bg-white text-rose-600 px-4 py-2 rounded-full font-bold text-lg shadow-md">
            Contact: 0557159368
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mary;
