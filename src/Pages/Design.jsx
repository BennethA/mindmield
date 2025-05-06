/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link, useParams } from "react-router-dom";

const Design = ({ designItems }) => {
  const { id } = useParams();
  const item = designItems.find((product) => product.id === Number(id));
  const requestDesign = () => {
    return console.log(designItems);
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black py-20 px-8 text-white flex flex-col">
      {item.title}
      <Link to={item.preview}>Preview</Link>
      <button className="" onClick={() => requestDesign()}>Request</button>
    </div>
  );
};

export default Design;
