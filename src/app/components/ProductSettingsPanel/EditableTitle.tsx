import React, { useState } from "react";
import Button from "../Button/Button";
import EditButton from "../Button/ButtonEdit";
import { EditableTitleProps } from "../../types/index";

const EditableTitle: React.FC<EditableTitleProps> = ({
  initialTitle,
  onSave,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(initialTitle);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleTitleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    saveTitle();
  };

  const saveTitle = () => {
    setIsEditing(false);
    onSave(title);
  };

  return (
    <div className="rounded-3xl bg-purple-50 p-2 flex justify-between items-center">
      {isEditing ? (
        <form onSubmit={handleTitleSubmit} className="flex items-center w-full">
          <input
            type="text"
            value={title}
            onChange={handleTitleChange}
            className="border rounded px-2 py-1 mr-2 flex-grow"
            autoFocus
          />
          <Button onClick={saveTitle}>Save</Button>
        </form>
      ) : (
        <>
          <h3 className="text-lg font-semibold text-purple-900">{title}</h3>
          <div className="flex items-center">
            <EditButton onClick={handleEditClick} />
          </div>
        </>
      )}
    </div>
  );
};

export default EditableTitle;
