import React from "react";
import { getInputClassName } from "../../ts/Contants";
import { Controller } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

interface PropInput {
  name: string;
  label?: string;
  control: any;
  placeholder?: string;
  type?: string;
  id?: string;
  className?: string;
}

const InputRHF = ({
  id,
  name,
  label,
  control,
  placeholder,
  className,
  type = "text",
}: PropInput) => {
  return (
    <div>
      {label || <label>{label}</label>}

      <Controller
        rules={{ required: "This field is required" }}
        control={control}
        name={name}
        render={({
          field: { onChange, onBlur, value, name },
          fieldState: { invalid, isTouched, isDirty },
          formState: { errors },
        }) => {
          return (
            <>
              <input
                id={id}
                onChange={(e) => onChange(e.target.value)}
                className={getInputClassName(
                  `${
                    errors.name?.type === "required" ? " outline-red-700" : ""
                  }`
                )}
                value={value}
                placeholder={placeholder}
                type={type}
              />
              <ErrorMessage
                errors={errors}
                name={name}
                render={({ message }) => (
                  <span className="text-red-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="red"
                      className="w-6 h-6 inline-block mr-1"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                      />
                    </svg>
                    {`${message}`}
                  </span>
                )}
              />
            </>
          );
        }}
      />
    </div>
  );
};

export default InputRHF;
