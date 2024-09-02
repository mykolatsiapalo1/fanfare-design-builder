import React from "react";
import { SizeCardProps } from "../../types/index";

const SizeCard = ({ size, isPopular }: SizeCardProps) => {
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
