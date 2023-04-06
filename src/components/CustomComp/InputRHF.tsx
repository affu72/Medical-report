import React from "react";
import { getInputClassName } from "../../ts/Contants";
import { Controller } from "react-hook-form";
import FormError from "./FormError";

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
        defaultValue={"Afzal"}
        render={({
          field: { onChange, onBlur, value, name },
          fieldState: { invalid, isTouched, isDirty },
          formState: { errors },
        }) => {
          return (
            <>
              <input
                onChange={(e) => onChange(e.target.value)}
                className={getInputClassName(
                  `${
                    errors.name?.type === "required" ? " outline-red-700" : ""
                  }`
                )}
                placeholder={placeholder}
                type={type}
                value={value}
              />

              <FormError errors={errors} name={name} />
            </>
          );
        }}
      />
    </div>
  );
};

export default InputRHF;
