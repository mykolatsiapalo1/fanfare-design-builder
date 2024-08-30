import React from "react";

const SizeCard = ({ size, isPopular }) => {
  return (
    <div
      className={`border rounded-lg p-4 flex flex-col items-center relative ${
        isPopular ? "popular-label" : ""
      }`}
    >
      <div className="w-48 h-48 bg-gray-200 rounded-full mb-2"></div>
      <span>{size}</span>
    </div>
  );
};

export default SizeCard;
