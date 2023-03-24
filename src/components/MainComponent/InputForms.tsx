import Medicines from "./Medicines";
import MedicalHistory from "./MedicalRecord";
import MedicalBill from "./MedicalBill";

import { FormEvent } from "react";
import PersonaDetails, { IFormData } from "./PersonaDetails";

interface PropInput {
  tabIndex: number;
  getData: (data: IFormData) => void;
}

const InputForms: React.FC<PropInput> = ({ tabIndex, getData }) => {
  const formSection = [
    <PersonaDetails
      key={0}
      getData={(data: IFormData) => {
        getData(data);
      }}
    />,
    <MedicalHistory key={1} />,
    <Medicines key={2} />,
    <MedicalBill key={3} />,
  ];

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(event);
  };

  return (
    <div className="bg-white flex flex-col justify-between gap-8 p-6 basis-2/3 xl:basis-11/12 relative overflow-auto flex-none">
      <form id="main-form" onSubmit={submitHandler} className="xs:pb-8">
        {formSection[tabIndex]}
      </form>

      {tabIndex === 3 && (
        <button
          form="main-form"
          type="submit"
          className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded absolute bottom-4 right-8`}
        >
          Submit & Generate Pdf
        </button>
      )}
    </div>
  );
};

export default InputForms;
