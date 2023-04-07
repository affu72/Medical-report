import React from "react";
import { IDoctorDetails } from "../DoctorDetails";
import { ErrorMessage } from "@hookform/error-message";

interface IError {
  errors: any;
  name?: keyof IDoctorDetails | any;
}

const FormError = ({ errors, name }: IError) => {
  return (
    <ErrorMessage
      errors={errors}
      name={name}
      render={({ message }) => (
        <span className="text-red-500 m-0 ">
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
  );
};

export default FormError;
