import React from "react";
import { IconType } from "react-icons";
import { MdOutlineModeEdit } from "react-icons/md";

interface SidebarItemProps {
  icon: IconType;
  label: string;
  href?: string;
  count?: number;
  showEditIcon?: boolean;
  isActive?: boolean;
  onClick?: () => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  icon: Icon,
  label,
  href = "#",
  count,
  showEditIcon = false,
  isActive = false,
  onClick,
}) => {
  return (
    <li>
      <a
        href={href}
        onClick={onClick}
        className={`flex items-center active:bg-purple-100 justify-between p-2 rounded-2xl whitespace-nowrap ${
          isActive ? "bg-purple-200" : "hover:bg-purple-100"
        }`}
      >
        <div className="flex items-center space-x-2">
          <Icon className="w-5 h-5" />
          <span>{label}</span>
        </div>
        <div className="flex items-center space-x-2">
          {showEditIcon && (
            <span className="text-sm">
              <MdOutlineModeEdit />
            </span>
          )}
          {count !== undefined && <span className="text-sm">{count}</span>}
        </div>
      </a>
    </li>
  );
};

export default SidebarItem;
