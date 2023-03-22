import React, { FormEvent } from "react";
import { InterfaceInputs } from "../Modal/Interfaces";
import Input from "./MyComponents/Input";
import PersonalInformation from "./PersonalInformation";
import Medicines from "./Medicines";
import Creatable from "./MedicalHistory";
import MedicalHistory from "./MedicalHistory";
import MedicalBillInput from "./MedicalBill";
import MedicalBill from "./MedicalBill";

interface IProp {
  // inputs: InterfaceInputs;
  inputs: [boolean, boolean, boolean, boolean];
  // handleInputChange: (
  //   event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  // ) => void;
  // generateReport: (event: FormEvent<HTMLFormElement>) => void;
}

function InputForms(props: IProp) {
  console.log(props.inputs);
  return (
    <form className="bg-white flex flex-col gap-6 p-6 basis-2/3">
      {/* <PersonalInformation></PersonalInformation> */}
      {/* <Medicines /> */}
      {/* <MedicalHistory /> */}
      <MedicalBill />

      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Preview
      </button>
    </form>
  );
}

export default InputForms;

/* <div className="w-full mb-4">
        <label
          className="block font-medium text-gray-700 mb-2"
          htmlFor="symptoms"
        >
          Symptoms
        </label>
        <textarea
          className="border-2 border-gray-300 py-2 px-4 w-full rounded-md"
          name="symptoms"
          id="symptoms"
          value={props.inputs.symptoms}
          onChange={props.handleInputChange}
        ></textarea>
      </div> */
