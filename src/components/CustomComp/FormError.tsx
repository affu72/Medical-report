import React from "react";
import { IDoctorDetails } from "../DoctorDetails";

interface IError {
  errors: any;
  inputName: keyof IDoctorDetails;
}

const FormError = ({ errors, inputName }: IError) => {
  console.log(errors);

  return (
    <span className="text-red-900 self-start">
      {errors[inputName]?.message}
    </span>
  );
};

export default FormError;
