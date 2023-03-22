import React, { FC } from "react";

interface InputProps {
  label?: string;
  placeholder: string;
  name?: string;
  type?: string;
  value?: string | number;
  id?: string;
  basis?: number;
}

const Input: React.FC<InputProps> = ({
  label,
  type = "text",
  placeholder,
  name,
  basis = "auto",
}) => {
  return (
    <div className="mb-4">
      <label htmlFor="name">{label}</label>
      <input
        className={`border-2 border-gray-300 py-2 px-4 w-full rounded-md basis-${basis}`}
        type={type}
        name={name}
        id="name"
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
