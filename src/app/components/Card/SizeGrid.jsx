import React from "react";
import SizeCard from "./SizeCard";

const SizeGrid = () => {
  const sizes = [
    { label: "1 Size", isPopular: false },
    { label: "2 Sizes", isPopular: false },
    { label: "3 Sizes", isPopular: true },
    { label: "4 Sizes", isPopular: false },
  ];

  return (
    <div className="grid grid-cols-2 gap-4">
      {sizes.map((size, index) => (
        <SizeCard key={index} size={size.label} isPopular={size.isPopular} />
      ))}
    </div>
  );
};

export default SizeGrid;
