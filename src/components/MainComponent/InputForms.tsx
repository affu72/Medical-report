import Medicines, { IMedicine } from "./Medicines";
import MedicalRecord from "./MedicalRecord";
import MedicalBill, { IMedicalBill } from "./MedicalBill";
import { FormEvent } from "react";
import PersonaDetails, { IPersonalData } from "./PersonaDetails";
import { useMyFormContext } from "../../Context/MyFormContext";
import Button from "../CustomComp/Button";
import { useForm } from "react-hook-form";
import IOption from "../../ts/Option";

interface IMedicalRecord {
  histories: IOption[];
  symptoms: IOption[];
}
export interface IFormValue {
  medicines: IMedicine[];
  personalDetails: IPersonalData;
  medicalBills: IMedicalBill[];
  medicalRecord: IMedicalRecord;
}

const InputForms = () => {
  const {
    setValue,
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IFormValue>({
    defaultValues: {
      medicines: [{ name: "", dose: "", id: 0, type: "" }],
      medicalBills: [{ billName: "", id: 0, billValue: "" }],
      medicalRecord: {
        histories: [{ label: "", value: "" }],
        symptoms: [{ label: "", value: "" }],
      },
    },
    shouldUnregister: false,
  });

  const { tabClickHandler, handleBackClick, tabIndex } = useMyFormContext();

  const formSection = [
    <PersonaDetails key={0} />,
    <MedicalRecord
      key={1}
      control={control}
      register={register}
      errors={errors}
      setValue={setValue}
    />,
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
    <div className="bg-white flex-1 flex-col  gap-8 p-6 relative overflow-auto">
      <form
        id="main-form"
        onSubmit={handleSubmit((data) => console.log(data))}
        className="xs:pb-8"
      >
        {formSection[tabIndex]}

        <div className="mt-12 flex justify-between">
          {tabIndex >= 1 && (
            <Button
              type="button"
              value="Back"
              tabIndex={tabIndex}
              bgColor={"bg-blue-300"}
              onClick={handleBackClick}
              className="mr-20"
            />
          )}

          {tabIndex < 3 && (
            <button
              type="submit"
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
      </form>
    </div>
  );
};

export default InputForms;
