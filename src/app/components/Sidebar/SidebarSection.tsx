import React from "react";
import SidebarItem from "./SidebarItem";
import { IconType } from "react-icons";

interface SidebarSectionProps {
  title: string;
  icon?: IconType;
  items: {
    icon: IconType;
    label: string;
    count?: number;
    showEditIcon?: boolean;
  }[];
  onItemClick?: (label: string) => void;
  activeItem?: string | null; 
}

const SidebarSection: React.FC<SidebarSectionProps> = ({
  title,
  icon: Icon,
  items,
  onItemClick,
  activeItem,
}) => {
  return (
    <div>
      <div className="mb-4 text-lg flex items-center justify-between">
        <span>{title}</span>
        {Icon && <Icon className="text-lg" />}
      </div>
      <ul className="menu p-2 w-full">
        {items.map((item, index) => (
          <SidebarItem
            key={index}
            icon={item.icon}
            label={item.label}
            count={item.count}
            showEditIcon={item.showEditIcon}
            isActive={item.label === activeItem}
            onClick={() => onItemClick?.(item.label)}
          />
        ))}
      </ul>
    </div>
  );
};

export default SidebarSection;
