import React from "react";
import { useController, UseControllerProps } from "react-hook-form";

interface PropInput extends UseControllerProps {
  name: string;
}

const InputRHF = (props: UseControllerProps<PropInput>) => {
  const { field } = useController(props);

  return (
    <div>
      <label htmlFor={propInput.name}>{label}</label>
      <input {...field} />
      {invalid && (
        <span role="alert" style={{ color: "red" }}>
          {error?.message || `${label} is required`}
        </span>
      )}
    </div>
  );
};

export default InputRHF;
