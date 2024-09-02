import React, { useState } from "react";
import { FaCog } from "react-icons/fa";

import TabBar from "./TabBar";
import SettingsContent from "./Tabs/SettingsContent";
import TagsContent from "./Tabs/TagsContent";
import VariantsContent from "./Tabs/VariantsContent";
import PhotoGallery from "../PhotoGallery/PhotoGallery";

const SettingsPanel: React.FC = () => {
  const [activeTab, setActiveTab] = useState("settings");
  const tabs = [
    { id: "settings", icon: <FaCog className="h-5 w-5" /> },
    { id: "tags", label: "Tags" },
    { id: "variants", label: "Variants" },
    { id: "photos", label: "Photos" },
  ];
  const renderContent = () => {
    switch (activeTab) {
      case "settings":
        return <SettingsContent />;
      case "tags":
        return <TagsContent />;
      case "variants":
        return <VariantsContent />;
      case "photos":
        return <PhotoGallery />;
      default:
        return null;
    }
  };

  return (
    <div className="fixed right-4 top-1/4 w-[28.5rem] bg-white rounded-lg shadow-lg flex flex-col h-[75vh]">
      <TabBar tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex-grow overflow-y-auto p-6">{renderContent()}</div>
    </div>
  );
};

export default SettingsPanel;
