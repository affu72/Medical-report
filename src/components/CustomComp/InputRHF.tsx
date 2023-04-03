import React from "react";
import { getInputClassName } from "../../ts/Contants";
import FormError from "./FormError";
import { type } from "os";

interface PropInput {
  name: string;
  register: any;
  label: string;
  error: any;
  placeholder: string;
  type?: string;
}

const InputRHF = ({ register, name, label, error, ...rest }: PropInput) => {
  console.log(error);
  return (
    <div>
      <label>{label}</label>

      <input
        {...register(name, {
          required: `This field is Required`,
        })}
        className={getInputClassName(
          `${error[name] ? " outline-red-700" : ""}`
        )}
        {...rest}
      />
      {error[name] && <FormError errors={error} inputName={name} />}
    </div>
  );
};

export default InputRHF;
