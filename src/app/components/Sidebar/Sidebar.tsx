"use client";
import React, { useState } from "react";
import SidebarSection from "./SidebarSection";
import { MdInbox } from "react-icons/md";
import { LuSendHorizonal } from "react-icons/lu";
import { FaRegHeart, FaPlus } from "react-icons/fa6";
import { IoMdStarOutline } from "react-icons/io";
import { CiFolderOn } from "react-icons/ci";

const Sidebar: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const handleItemClick = (label: string) => {
    setActiveItem(label);
  };

  return (
    <div className="w-72 bg-fuchsia-50 h-full flex flex-col p-4 overflow-y-auto">
      <SidebarSection
        title="Most Used"
        icon={IoMdStarOutline}
        items={[
          { icon: MdInbox, label: "Balloons", count: 24, showEditIcon: true },
          { icon: LuSendHorizonal, label: "Backdrops", showEditIcon: true },
          { icon: FaRegHeart, label: "Florals", showEditIcon: true },
          {
            icon: FaRegHeart,
            label: "Add'tl Swappable Components",
            showEditIcon: false,
          },
        ]}
        onItemClick={handleItemClick}
        activeItem={activeItem}
      />

      <div className="divider"></div>

      <SidebarSection
        title="Your Catalog"
        icon={FaPlus}
        items={[
          { icon: CiFolderOn, label: "Foils" },
          { icon: CiFolderOn, label: "Florals & Greenery" },
          { icon: CiFolderOn, label: "Props & Specialty Items" },
        ]}
        onItemClick={handleItemClick}
        activeItem={activeItem}
      />

      <div className="divider"></div>

      <SidebarSection
        title="Fanfaire Catalog"
        icon={FaPlus}
        items={[
          { icon: CiFolderOn, label: "Label" },
          { icon: CiFolderOn, label: "Label" },
          { icon: CiFolderOn, label: "Label" },
        ]}
        onItemClick={handleItemClick}
        activeItem={activeItem}
      />
    </div>
  );
};

export default Sidebar;
