import React from "react";
import EditableTitle from "../EditableTitle";
import ButtonGroup from "../ButtonGroup";
import Button from "../../Button/Button";
import Image from "next/image";

const TagsContent: React.FC = () => {
  const handleTitleSave = (newTitle: string) => {
    console.log("New title saved:", newTitle);
  };

  return (
    <div className="space-y-6 p-4">
      <EditableTitle initialTitle="Displayed Name" onSave={handleTitleSave} />

      <ButtonGroup
        title="Assign Main Menu Section"
        buttons={["Backdrops", "Garlands", "Freestanding"]}
      />

      <ButtonGroup
        title="Subcategory for Search/Sorting"
        buttons={["Backdrops", "Garlands", "Freestanding"]}
      />

      <ButtonGroup
        title="Highlight (optional)"
        buttons={["Seasonal", "Most Popular"]}
      />

      <div>
        <h4 className="text-sm font-medium mb-2">Assign Menu Location</h4>
        <div className="flex space-x-20">
          <Button>Primary</Button>
          <Button>Variant</Button>
        </div>
        <div className="flex space-x-2 mt-2">
          <NumberButtonGroup numbers={[0, 1, 2, 3, 4]} highlightIndex={3} />
          <div className="flex flex-grow pl-7">
            <NumberButtonGroup numbers={[1, 2, 3, 4]} highlightIndex={2} />
          </div>
        </div>
      </div>

      <AlternativesSection />
    </div>
  );
};

const NumberButtonGroup: React.FC<{
  numbers: number[];
  highlightIndex: number;
}> = ({ numbers, highlightIndex }) => (
  <div className="flex flex-row">
    {numbers.map((num, index) => (
      <Button
        key={num}
        variant={index === highlightIndex ? "accent" : "primary"}
        className="w-8 h-8 text-white p-0 !bg-red-600 hover:bg-red-600"
      >
        {num}
      </Button>
    ))}
  </div>
);

const AlternativesSection: React.FC = () => (
  <div>
    <h4 className="text-sm font-medium mb-2">Alternatives</h4>
    <div className="flex space-x-4">
      <AlternativeCard title="Featured" type="image" />
      <AlternativeCard title="Swappable Components" type="grid" />
    </div>
  </div>
);

const AlternativeCard: React.FC<{ title: string; type: "image" | "grid" }> = ({
  title,
  type,
}) => (
  <div className="w-1/2 bg-white rounded-xl border border-gray-300 p-4">
    <h5 className="text-sm text-center font-medium mb-2">{title}</h5>
    {type === "image" ? (
      <div className="relative w-full h-0 pb-[100%]">
        <Image
          src=""
          alt=""
          layout="fill"
          objectFit="cover"
          className="rounded"
        />
      </div>
    ) : (
      <div className="grid grid-cols-2 gap-2">
        {[1, 2, 3, 4].map((num) => (
          <div
            key={num}
            className="bg-gray-100 rounded-full aspect-[2/3] flex items-center justify-center"
          >
            {num <= 2 ? (
              <div className="w-16 h-16 bg-gray-200 rounded-full" />
            ) : (
              <Button variant="secondary" className="w-8 h-8 p-0">
                +
              </Button>
            )}
          </div>
        ))}
      </div>
    )}
  </div>
);

export default TagsContent;
