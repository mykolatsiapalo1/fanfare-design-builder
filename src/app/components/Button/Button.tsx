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

  sizeClass = "px-4 py-2 text-base w-32 h-10";

  return (
    <button
      onClick={onClick}
      className={`${buttonClass} ${sizeClass} rounded-xl border border-gray-300 transition-transform duration-150 ease-in-out flex items-center justify-center ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
