import React from "react";
import { useMyFormContext } from "../../Context/MyFormContext";

const FormError = () => {
  const { error } = useMyFormContext();

  const cls = error ? "translate-x-80" : "";

  return (
    <div
      className={`border-2 text-red-700 px-8 py-2 absolute bg-red-100 w-80 -left-80 top-24 -z-1000 ${cls} transition-100-transform`}
    >
      Error
    </div>
  );
};

export default FormError;
