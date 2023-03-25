import Medicines from "./Medicines";
import MedicalRecord from "./MedicalRecord";
import MedicalBill from "./MedicalBill";
import { IMedicalRecord } from "../../ts/interfaces/MedicalRecord";

import { FormEvent } from "react";
import PersonaDetails, { IFormData } from "./PersonaDetails";

interface PropInput {
  data: IFormData;
  tabIndex: number;
  getData: (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  getRecord: (data: IMedicalRecord[]) => void;
}

const InputForms: React.FC<PropInput> = ({
  data,
  tabIndex,
  getData,
  getRecord,
}) => {
  const formSection = [
    <PersonaDetails key={0} getData={getData} formData={data} />,
    <MedicalRecord key={1} getRecord={getRecord} />,
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
