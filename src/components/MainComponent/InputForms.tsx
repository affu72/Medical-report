import { useEffect } from "react";
import Medicines, { IMedicine } from "./Medicines";
import MedicalRecord from "./MedicalRecord";
import MedicalBill, { IMedicalBill } from "./MedicalBill";
import PersonaDetails, { IPersonalData } from "./PersonaDetails";
import { useMyFormContext } from "../../Context/MyFormContext";
import Button from "../CustomComp/Button";
import { useForm, FormProvider } from "react-hook-form";
import IOption from "../../ts/Option";
import SideBar from "../SideBar";
import { IMedicalReadings } from "./MedicalReadings";

interface IMedicalRecord {
  histories: IOption[];
  symptoms: IOption[];
  medicalReadings: IMedicalReadings[];
}
export interface IFormData {
  medicines: IMedicine[];
  personalDetails: IPersonalData;
  medicalBills: IMedicalBill[];
  medicalRecord: IMedicalRecord;
  id: string;
}

const InputForms = () => {
  const methods = useForm<IFormData>({
    defaultValues: {
      medicines: [{ name: "", dose: "", id: "", type: "" }],
      medicalBills: [{ billName: "", id: "", billValue: null }],
      medicalRecord: {
        histories: [],
        symptoms: [],
        medicalReadings: [{ readingName: "", readingValue: "", key: "" }],
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

    mode: "all",
    shouldFocusError: true,
  });

  const { tabClickHandler, handleBackClick, tabIndex, patientDataHandler } =
    useMyFormContext();

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
    <>
      <div className="bg-white flex-1 flex-col  gap-8 p-6 relative overflow-auto max-h-screen">
        <FormProvider {...methods}>
          <form
            id="main-form"
            onSubmit={methods.handleSubmit((data) => {
              const uniquId =
                data.personalDetails.firstName +
                data.personalDetails.mobile +
                data.personalDetails.age;
              methods.reset();
              patientDataHandler({ ...data, id: uniquId });
            })}
            className="xs:pb-8 h-full"
          >
            {formSection[tabIndex]}

            <div className="mt-12 flex gap-4">
              {tabIndex >= 1 && (
                <Button
                  type="button"
                  value="Back"
                  tabIndex={tabIndex}
                  bgColor={"bg-blue-300"}
                  onClick={handleBackClick}
                  className=""
                />
              )}

              {tabIndex < 3 && (
                <Button
                  type="button"
                  value="Save & Next"
                  tabIndex={tabIndex}
                  onClick={tabClickHandler}
                  bgColor={"bg-blue-500"}
                />
              )}

              <Button
                type="submit"
                value="preview"
                bgColor="bg-yellow-500"
                className="ml-auto"
              />
            </div>
          </form>
          <SideBar />
        </FormProvider>
      </div>
    </>
  );
};

export default InputForms;
