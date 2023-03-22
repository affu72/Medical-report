import PersonalInformation from "./PersonalInformation";
import Medicines from "./Medicines";
import MedicalHistory from "./MedicalHistory";
import MedicalBill from "./MedicalBill";
import { useEffect } from "react";

interface propInput {
  inputs: number;
}

function InputForms({ inputs }: propInput) {
  const formSection = [
    <PersonalInformation />,
    <Medicines />,
    <MedicalHistory />,
    <MedicalBill />,
  ];

  return (
    <form className="bg-white flex flex-col gap-6 p-6 basis-2/3">
      {formSection[inputs]}
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
