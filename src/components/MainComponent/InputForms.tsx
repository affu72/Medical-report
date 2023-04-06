import { useEffect } from "react";
import Medicines, { IMedicine } from "./Medicines";
import MedicalRecord from "./MedicalRecord";
import MedicalBill, { IMedicalBill } from "./MedicalBill";
import PersonaDetails, { IPersonalData } from "./PersonaDetails";
import { useMyFormContext } from "../../Context/MyFormContext";
import Button from "../CustomComp/Button";
import { useForm, FormProvider } from "react-hook-form";
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
  const methods = useForm<IFormValue>({
    defaultValues: {
      medicines: [{ name: "", dose: "", id: 0, type: "" }],
      medicalBills: [{ billName: "", id: 0, billValue: null }],
      medicalRecord: {
        histories: [],
        symptoms: [],
      },
      personalDetails: {
        firstName: "",
        lastName: "",
        age: null,
        gender: "",
        mobile: "",
        address: "",
        city: "",
        state: "",
      },
    },

    mode: "onBlur",
    shouldFocusError: true,
  });

  const { tabClickHandler, handleBackClick, tabIndex } = useMyFormContext();

  const formSection = [
    <PersonaDetails key={0} />,
    <MedicalRecord key={1} />,
    <Medicines key={2} />,
    <MedicalBill key={3} />,
  ];

  useEffect(() => {
    methods.setFocus(`medicalBills.${0}.billName`);
    methods.setFocus(`medicines.${0}.name`);
  }, [methods, methods.setFocus]);

  return (
    <div className="bg-white flex-1 flex-col  gap-8 p-6 relative overflow-auto">
      <FormProvider {...methods}>
        <form
          id="main-form"
          onSubmit={methods.handleSubmit((data) => console.log(data))}
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
            <Button type="submit" value="preview" bgColor="bg-yellow-500" />
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default InputForms;
