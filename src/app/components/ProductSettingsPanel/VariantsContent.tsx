import React from "react";
import Button from "../Button/Button";
import SizeCard from "../Card/SizeCard";

const VariantsContent: React.FC = () => (
  <div className="space-y-6">
    <SizeSection
      title="Primary"
      sizes={["1 Size", "2 Sizes", "3 Sizes", "4 Sizes"]}
      popularIndex={2}
    />
    <SizeSection
      title="Variant"
      sizes={["1 Size", "2 Sizes"]}
      popularIndex={-1}
    />
  </div>
);

const SizeSection: React.FC<{
  title: string;
  sizes: string[];
  popularIndex: number;
}> = ({ title, sizes, popularIndex }) => (
  <>
    <div className="flex flex-col items-center">
      <Button>{title}</Button>
    </div>
    <div className="grid grid-cols-2 gap-4">
      {sizes.map((size, index) => (
        <SizeCard key={index} size={size} isPopular={index === popularIndex} />
      ))}
    </div>
  </>
);

export default VariantsContent;
