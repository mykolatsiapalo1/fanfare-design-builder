import React, { useState } from "react";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import { CiBookmark } from "react-icons/ci";
import { FaRegTrashAlt, FaBookmark } from "react-icons/fa";

const ActionButtons: React.FC = () => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleBookmarkToggle = () => {
    setIsFavorite((prev) => !prev);
  };

  return (
    <div className="fixed bottom-12 left-[32%] transform -translate-x-1/4 flex justify-around items-center bg-purple-50 p-3 shadow-lg rounded-lg max-w-2xl w-full">
      <ActionButton
        label="Explore"
        icon={<MdOutlineAddCircleOutline className="text-lg" />}
      />
      <ActionButton
        label="Lock/Unlock"
        icon={
          isFavorite ? (
            <FaBookmark className="text-lg" />
          ) : (
            <CiBookmark className="text-lg" />
          )
        }
        onClick={handleBookmarkToggle}
      />
      <ActionButton
        label="Trash"
        icon={<FaRegTrashAlt className="text-lg" />}
      />
    </div>
  );
};

interface ActionButtonProps {
  label: string;
  icon: React.ReactNode;
  onClick?: () => void;
}

const ActionButton: React.FC<ActionButtonProps> = ({
  label,
  icon,
  onClick,
}) => (
  <div
    className="flex flex-col items-center cursor-pointer group mx-1.5"
    onClick={onClick}
  >
    <span className="block mb-1 text-sm transition-transform transform group-hover:scale-110 group-active:scale-90">
      {label}
    </span>
    <div className="transition-transform transform group-hover:scale-110 group-active:scale-90">
      {icon}
    </div>
  </div>
);

export default ActionButtons;
