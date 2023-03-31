import React, { ChangeEvent } from "react";
import { useMyFormContext } from "../../Context/MyFormContext";
import { FieldElement, FieldValues } from "react-hook-form";

interface InputProps {
  label?: string;
  placeholder?: string;
  name: string;
  type?: string;
  value?: string | number;
  id?: string;
  basis?: number | "auto";
  labelOptional?: boolean;
  accept?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
  label = "",
  type = "text",
  placeholder,
  name,
  onChange,
  basis = "auto",
  labelOptional = false,
  accept,
}: InputProps) => {
  return (
    <div className="mb-3">
      <label htmlFor="name" className="font-semibold">
        {label}
        {labelOptional ? (
          <span className="font-light">(Optional)</span>
        ) : (
          ""
        )}{" "}
      </label>{" "}
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
