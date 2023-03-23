import React from "react";

interface PropButton<T> {
  value: string;
  bgColor: string;
  color?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: T;
  margin?: number;
  tabIndex?: number;
}

type buttonType = "button" | "submit" | "reset";

const Button: React.FC<PropButton<buttonType>> = ({
  value,
  bgColor,
  type,
  onClick,
  margin = 0,
  tabIndex,
}) => {
  return (
    <button
      tabIndex={tabIndex}
      type={type}
      className={`bg-red-500 hover:bg-${bgColor}-700 text-white font-bold py-2 px-4 rounded mt-${margin}`}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Button;
