import React from "react";
import { useMyFormContext } from "../../Context/MyFormContext";

const FormError = () => {
  const { error } = useMyFormContext();

  const cls = error ? "translate-x-[210px]" : "";

  return (
    <div
      className={`border-2 text-red-700 px-8 py-4 absolute bg-red-100 w-80 -left-80 top-24 -z-1000 ${cls} transition-all duration-1000 outline-none border-none rounded-r-md rounded-b-md`}
    >
      Field cannot be blank
    </div>
  );
};

export default FormError;
