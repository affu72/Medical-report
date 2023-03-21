import React from "react";

interface InputProps {
  label: string;
  placeholder: string;
  name: string;
  type?: string;
}

function Input({ label, type = "text", placeholder, name }: InputProps) {
  return (
    <div className="w-full mb-4">
      <label htmlFor="name">{label}</label>

      <input
        className="border-2 border-gray-300 py-2 px-4 w-full rounded-md"
        type={type}
        name={name}
        id="name"
        placeholder={placeholder}
      />
    </div>
  );
}

export default Input;
