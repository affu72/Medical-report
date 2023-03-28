import Medicines from "./Medicines";
import MedicalRecord from "./MedicalRecord";
import MedicalBill from "./MedicalBill";
import { FormEvent } from "react";
import PersonaDetails from "./PersonaDetails";
import { useMyFormContext } from "../../Context/MyFormContext";
import Button from "../CustomComp/Button";

const InputForms = () => {
  const { tabClickHandler, handleBackClick, tabIndex } = useMyFormContext();

  const formSection = [
    <PersonaDetails key={0} />,
    <MedicalRecord key={1} />,
    <Medicines key={2} />,
    <MedicalBill key={3} />,
  ];

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className="bg-white flex flex-col justify-between gap-8 p-6 basis-2/3 xl:basis-11/12 relative overflow-auto flex-none">
      <form id="main-form" onSubmit={submitHandler} className="xs:pb-8">
        {formSection[tabIndex]}
      </form>

      <div className="flex justify-between">
        {tabIndex >= 1 && (
          <Button
            type="button"
            value="Back"
            tabIndex={tabIndex}
            bgColor={"bg-blue-300"}
            onClick={handleBackClick}
          />
        )}

        {tabIndex < 3 && (
          <button
            type="button"
            form="main-form"
            value="Save & Next"
            tabIndex={tabIndex}
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  bottom-4 right-16`}
            onClick={tabClickHandler}
          >
            Save & Next
          </button>
        )}
      </div>
    </div>
  );
};

export default InputForms;
