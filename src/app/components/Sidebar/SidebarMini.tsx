import React from "react";
import {
  Menu,
  Pencil,
  Mail,
  Plus,
  FolderOpen,
  Video,
  LucideIcon,
} from "lucide-react";
import { IconButtonProps } from "../../types/index";

const IconButton: React.FC<IconButtonProps> = ({
  Icon,
  label,
  bgColor = "",
}) => (
  <button className={`flex flex-col items-center ${bgColor}`}>
    <div
      className={`w-12 h-12 ${
        bgColor || "bg-transparent"
      } rounded-2xl flex items-center justify-center`}
    >
      <Icon
        size={label ? 24 : 20}
        className={label ? "text-gray-600" : "text-gray-800"}
      />
    </div>
    {label && <span className="text-xs text-gray-500 mt-1">{label}</span>}
  </button>
);

interface IconData {
  Icon: LucideIcon;
  label?: string;
  bgColor?: string;
}

const SidebarMini: React.FC = () => {
  const icons: IconData[] = [
    { Icon: Pencil, bgColor: "bg-pink-100" },
    { Icon: Mail, bgColor: "bg-purple-100" },
    { Icon: Plus, label: "Upload" },
    { Icon: FolderOpen, label: "Catalog" },
    { Icon: Video, label: "Meet" },
  ];

  return (
    <div className="flex flex-col items-center w-16 h-screen bg-purple-50">
      <button className="mt-4 p-3">
        <Menu size={24} className="text-gray-600" />
      </button>

      <div className="flex-grow flex flex-col items-center space-y-4 mt-4">
        {icons.map((icon, index) => (
          <React.Fragment key={index}>
            <IconButton {...icon} />
            {index === 1 && (
              <div className="text-xs text-center text-gray-500 mt-2">
                Most Used
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default SidebarMini;
