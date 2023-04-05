import React from "react";
import { getInputClassName } from "../../ts/Contants";
import FormError from "./FormError";
import { Controller } from "react-hook-form";

interface PropInput {
  name: string;
  label: string;
  control: any;
  placeholder: string;
  type?: string;
}

const InputRHF = ({ name, label, control }: PropInput) => {
  return (
    <div>
      <label>{label}</label>

      <Controller
        control={control}
        name={name}
        render={({
          field: { onChange, onBlur, value, name, ref },
          fieldState: { invalid, isTouched, isDirty, error },
          formState,
        }) => (
          <input
            onChange={(e) => onChange(e.target.value)}
            className={getInputClassName(`${error ? " outline-red-700" : ""}`)}
            value={value}
          />
        )}
      />
    </div>
  );
};

export default InputRHF;
