import React from "react";
import EditableTitle from "../EditableTitle";
import ButtonGroup from "../ButtonGroup";

const SettingsContent: React.FC = () => {
  const handleTitleSave = (newTitle: string) => {
    console.log("New title saved:", newTitle);
  };

  return (
    <div className="space-y-4">
      <EditableTitle initialTitle="Displayed Name" onSave={handleTitleSave} />

      <ButtonGroup
        title="Assign Main Menu Section"
        buttons={["Backdrops", "Garlands", "Freestanding"]}
      />

      <div>
        <h4 className="text-sm font-medium mb-2">
          Subcategory for Search/Sorting
        </h4>
        <div className="space-y-2">
          <ButtonGroup
            title="Walls"
            buttons={["Greenery", "Floral", "Shimmer"]}
          />
          <ButtonGroup title="Chiaras" buttons={["Wooden", "Cloth", "Luxe"]} />
          <ButtonGroup
            title="Piping/Framing"
            buttons={["Square", "Hoop", "Unique"]}
          />
          <ButtonGroup title="Custom" buttons={["Other", "Other", "Other"]} />
        </div>
      </div>

      <ButtonGroup
        title="Highlight (optional)"
        buttons={["Seasonal", "Most Popular"]}
      />

      <ButtonGroup
        title="Assign Menu Location"
        buttons={["Primary", "Variant"]}
      />
    </div>
  );
};

export default SettingsContent;
