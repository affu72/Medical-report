import { useEffect } from "react";
import Medicines, { IMedicine } from "./Medicines";
import MedicalRecord from "./MedicalRecord";
import MedicalBill, { IMedicalBill } from "./MedicalBill";
import PersonaDetails, { IPersonalData } from "./PersonaDetails";
import { useMyFormContext } from "../../Context/MyFormContext";
import Button from "../CustomComp/Button";
import { useFormContext } from "react-hook-form";
import IOption from "../../ts/Option";
import SideBar from "../SideBar";
import { IMedicalReadings } from "./MedicalReadings";
import PatientList from "../PatientList";
import { deafaultFormValue } from "../../ts/Contants";

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
  const { setFocus, handleSubmit, reset } = useFormContext();

  const {
    tabClickHandler,
    handleBackClick,
    tabIndex,
    patientDataHandler,
    isFormOpen,
    setIsFormOpen,
  } = useMyFormContext();

  const formSection = [
    <PersonaDetails key={0} />,
    <MedicalRecord key={1} />,
    <Medicines key={2} />,
    <MedicalBill key={3} />,
  ];

  useEffect(() => {
    setFocus(`medicalBills.${0}.billName`);
    setFocus(`medicines.${0}.name`);
  }, [setFocus]);

  return (
    <>
      {!isFormOpen ? (
        <>
          <button
            onClick={() => setIsFormOpen(true)}
            className="bg-blue-700 py-5 text-white font-semibold shadow-lg rounded-md hover:bg-blue-900 transition-all duration-300"
          >
            Add New Patient
          </button>
          <PatientList />
        </>
      ) : (
        <div className="bg-white flex-1 flex-col  gap-8 p-6 relative overflow-auto max-h-screen">
          <form
            id="main-form"
            onSubmit={handleSubmit((data) => {
              const uniquId =
                data.personalDetails.mobile +
                data.personalDetails.firstName +
                data.personalDetails.age;
              reset({ ...deafaultFormValue });
              patientDataHandler({
                medicalBills: data.medicalBills,
                personalDetails: data.personalDetails,
                medicalRecord: data.MedicalRecord,
                medicines: data.medicines,
                id: uniquId,
              });
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

              {/* <Button
                type="submit"
                value="preview"
                bgColor="bg-yellow-500"
                className="ml-auto"
              /> */}
            </div>
          </form>
          <SideBar />
        </div>
      )}
    </>
  );
};

export default InputForms;
