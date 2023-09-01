import React from "react";

export const Card = ({ image, title, text }) => {
  return (
    <div className="w-72 h-72 rounded-2xl shadow-lg shadow-gray-700">
      <img className="w-full h-40 object-cover mt-2.5" src={image} alt="..." />
      <div className="text-center p-4">
        <h5 className="text-xl font-bold">{title}</h5>
        <p className="text-gray-500 text-base">{text}</p>
      </div>
    </div>
  );
};
