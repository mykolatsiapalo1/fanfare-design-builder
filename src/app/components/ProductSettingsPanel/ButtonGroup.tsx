import React from "react";
import Button from "../Button/Button";
import { ButtonGroupProps } from "../../types/index";

const ButtonGroup: React.FC<ButtonGroupProps> = ({ title, buttons }) => {
  return (
    <div>
      <h4 className="text-sm font-medium mb-2">{title}</h4>
      <div className="flex space-x-2 text-nowrap">
        {buttons.map((button, index) => (
          <Button key={index}>{button}</Button>
        ))}
      </div>
    </div>
  );
};

export default ButtonGroup;
