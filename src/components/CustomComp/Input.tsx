import React, { ChangeEvent, forwardRef } from "react";

interface InputProps {
  label?: string;
  placeholder?: string;
  name: string;
  type?: string;
  value?: string | number;
  id?: string;
  labelOptional?: boolean;
  accept?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input = forwardRef(
  (
    {
      label = "",
      type = "text",
      placeholder,
      name,
      onChange,
      labelOptional = false,
      accept,
    }: InputProps,
    ref
  ) => {
    return (
      <div className="mb-3 flex flex-col">
        <label htmlFor="name" className="font-semibold">
          {label}
          {labelOptional ? (
            <span className="font-light">(Optional)</span>
          ) : (
            ""
          )}{" "}
        </label>{" "}
        <input
          className={`border-2 border-gray-300 py-2 px-4 w-full rounded-md`}
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
  }
);

export default Input;
