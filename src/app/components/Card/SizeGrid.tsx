import React from "react";
import SizeCard from "./SizeCard";
import { sizes } from "../../utils/index";

const SizeGrid = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {sizes.map((size, index) => (
        <SizeCard key={index} size={size.label} isPopular={size.isPopular} />
      ))}
    </div>
  );
};

export default SizeGrid;
