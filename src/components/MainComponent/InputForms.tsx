import Medicines, { IMedicine } from "./Medicines";
import MedicalRecord from "./MedicalRecord";
import MedicalBill, { IMedicalBill } from "./MedicalBill";
import { FormEvent } from "react";
import PersonaDetails, { IPersonalData } from "./PersonaDetails";
import { useMyFormContext } from "../../Context/MyFormContext";
import Button from "../CustomComp/Button";
import { useForm } from "react-hook-form";

export interface IFormValue {
  medicines: IMedicine[];
  personalDetails: IPersonalData;
  medicalBills: IMedicalBill[];
  medicalRecord: { name: string; value: string }[];
}

const InputForms = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IFormValue>({
    defaultValues: {
      medicines: [{ name: "", dose: "", id: 0, type: "" }],
    },
    shouldUnregister: false,
  });

  const { tabClickHandler, handleBackClick, tabIndex } = useMyFormContext();

  const formSection = [
    <PersonaDetails key={0} />,
    <MedicalRecord key={1} />,
    <Medicines key={2} register={register} errors={errors} control={control} />,
    <MedicalBill
      key={3}
      register={register}
      errors={errors}
      control={control}
    />,
  ];

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className="bg-white flex-1 flex-col  gap-8 p-6 relative overflow-auto ">
      <form id="main-form" onSubmit={submitHandler} className="xs:pb-8">
        {formSection[tabIndex]}
      </form>

      <div className=" justify-between flex">
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
