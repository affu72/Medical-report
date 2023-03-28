import React, { ChangeEvent } from "react";

interface InputProps {
  label?: string;
  placeholder: string;
  name?: string;
  type?: string;
  value?: string | number;
  id?: string;
  basis?: number | "auto";
  labelOption?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
  label,
  type = "text",
  placeholder,
  name,
  onChange,
  basis = "auto",
  labelOption = false,
}: InputProps) => {
  return (
    <div className="mb-4">
      <label htmlFor="name">
        {label}
        {labelOption ? <span className="font-light">(Optional)</span> : ""}{" "}
      </label>
      <input
        className={`border-2 border-gray-300 py-2 px-4 w-full rounded-md basis-${basis}`}
        type={type}
        name={name}
        id="name"
        min={1}
        placeholder={placeholder}
        onChange={onChange}
        required
      />
    </div>
  );
};

export default Input;
