import { MdOutlineEdit } from "react-icons/md";

interface EditButtonProps {
  onClick: () => void;
}

const EditButton: React.FC<EditButtonProps> = ({ onClick }) => {
  return (
    <button
      className="btn flex items-center justify-center"
      style={{
        backgroundColor: "#ECE6F0",
        width: "3rem",
        height: "3rem",
        padding: "0.5rem",
      }}
      onClick={onClick}
    >
      <MdOutlineEdit className="h-6 w-6" style={{ color: "#65558F" }} />
    </button>
  );
};

export default EditButton;
