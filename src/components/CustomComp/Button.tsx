import React from "react";
interface PropButton<T> {
  value: string;
  bgColor: string;
  color?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: T;
  margin?: number;
  tabIndex?: number;
  className?: string;
}
type buttonType = "button" | "submit" | "reset";
const Button: React.FC<PropButton<buttonType>> = ({
  value,
  bgColor,
  type,
  onClick,
  margin = 0,
  tabIndex,
  className,
}) => {
  const bgHover = bgColor.slice(0, bgColor.length - 3) + "700";

  return (
    <button
      tabIndex={tabIndex}
      type={type}
      className={`${bgColor} hover:${bgHover} font-bold py-2 px-4 rounded ${className}`}
      onClick={onClick}
      // style={{ backgroundColor: bgColor }}
    >
      {value}
    </button>
  );
};
export default Button;
