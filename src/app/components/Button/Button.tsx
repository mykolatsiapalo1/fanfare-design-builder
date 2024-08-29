import React from "react";

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "accent";
  size?: "small" | "medium" | "large";
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  className = "",
  variant = "primary",
  size = "medium",
}) => {
  let buttonClass = "";
  let sizeClass = "";

  switch (variant) {
    case "primary":
      buttonClass = "bg-white text-black hover:bg-fuchsia-50 active:scale-95";
      break;
    case "secondary":
      buttonClass = "bg-white text-black hover:bg-fuchsia-50 active:scale-95";
      break;
    case "accent":
      buttonClass = "bg-white text-black hover:bg-fuchsia-50 active:scale-95";
      break;
    default:
      buttonClass = "bg-white text-black hover:bg-fuchsia-50 active:scale-95";
  }

  switch (size) {
    case "small":
      sizeClass = "px-2 py-1 text-sm";
      break;
    case "medium":
      sizeClass = "px-4 py-2";
      break;
    case "large":
      sizeClass = "px-6 py-3 text-lg";
      break;
    default:
      sizeClass = "px-4 py-2";
  }

  return (
    <button
      onClick={onClick}
      className={`${buttonClass} ${sizeClass} rounded border border-gray-300 transition-transform duration-150 ease-in-out ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
