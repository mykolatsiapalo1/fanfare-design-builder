import { MdOutlineAddCircleOutline } from "react-icons/md";
import { CiBookmark } from "react-icons/ci";
import { FaRegTrashAlt, FaBookmark } from "react-icons/fa";
import { useState } from "react";

const ActionButtons: React.FC = () => {
  const [isFavorit, setIsFavorit] = useState(false);

  const handleBookmarkToggle = () => {
    setIsFavorit((prev) => !prev);
  };

  return (
    <div className="fixed bottom-14 right-0/3 flex justify-around items-center bg-purple-50 p-6 shadow-lg rounded-lg max-w-4xl w-full">
      <div className="flex flex-col items-center cursor-pointer group">
        <span className="block mb-2 text-lg transition-transform transform group-hover:scale-110 group-active:scale-90">
          Explore
        </span>
        <MdOutlineAddCircleOutline className="text-2xl transition-transform transform group-hover:scale-110 group-active:scale-90" />
      </div>

      <div
        className="flex flex-col items-center cursor-pointer group"
        onClick={handleBookmarkToggle}
      >
        <span className="block mb-2 text-lg transition-transform transform group-hover:scale-110 group-active:scale-90">
          Lock/Unlock
        </span>
        {isFavorit ? (
          <FaBookmark className="text-2xl transition-transform transform group-hover:scale-110 group-active:scale-90" />
        ) : (
          <CiBookmark className="text-2xl transition-transform transform group-hover:scale-110 group-active:scale-90" />
        )}
      </div>

      <div className="flex flex-col items-center cursor-pointer group">
        <span className="block mb-2 text-lg transition-transform transform group-hover:scale-110 group-active:scale-90">
          Trash
        </span>
        <FaRegTrashAlt className="text-2xl transition-transform transform group-hover:scale-110 group-active:scale-90" />
      </div>
    </div>
  );
};

export default ActionButtons;
