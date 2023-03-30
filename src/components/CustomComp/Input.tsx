import React, { ChangeEvent } from "react";
import { useMyFormContext } from "../../Context/MyFormContext";

interface InputProps {
  label?: string;
  placeholder?: string;
  name?: string;
  type?: string;
  value?: string | number;
  id?: string;
  basis?: number | "auto";
  labelOption?: boolean;
  accept?: string;
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
  accept,
}: InputProps) => {
  return (
    <div className="mb-3">
      <label htmlFor="name" className="font-semibold">
        {label}
        {labelOption ? <span className="font-light">(Optional)</span> : ""}{" "}
      </label>{" "}
      {/* {error === "ERROR" ? (
        <span className="text-red-700 font-semibold">error</span>
      ) : null} */}
      <input
        className={`border-2 border-gray-300 py-2 px-4 w-full rounded-md basis-${basis}`}
        type={type}
        name={name}
        id="name"
        min={1}
        placeholder={placeholder}
        onChange={onChange}
        required
        accept={accept}
      />
    </div>
  );
};

export default Input;
