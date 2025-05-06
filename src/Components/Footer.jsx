/* eslint-disable no-unused-vars */
import React from "react";
import { BiCopyright } from "react-icons/bi";

const Footer = () => {
  return (
    <div className="flex items-center justify-center flex-col w-full p-3 fixed bottom-0 text-white z-[10000] bg-white/10 backdrop-blur-lg">
      <span className="flex items-center justify-center gap-2">
        <BiCopyright /> All Rights Reserved | 2025
      </span>
      <span>Created by Benneth Addo</span>
    </div>
  );
};

export default Footer;
