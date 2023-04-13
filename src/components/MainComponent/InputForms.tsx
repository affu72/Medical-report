import { useEffect } from "react";
import Medicines from "./Medicines";
import MedicalRecord from "./MedicalRecord";
import MedicalBill from "./MedicalBill";
import PersonaDetails from "./PersonaDetails";
import { useMyFormContext } from "../../Context/MyFormContext";
import Button from "../CustomComp/Button";
import { FieldValues, useFormContext } from "react-hook-form";
import SideBar from "../SideBar";
import PatientList from "../PatientList";
import { deafaultFormValue } from "../../ts/Contants";
import { toast } from "react-toastify";

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
    setFocus("personalDetails.firstName");
  }, [setFocus]);

  const submitFormHandler = (data: FieldValues) => {
    toast.success("Report has been successfully  saved");

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

    setIsFormOpen(false);
  };

  return (
    <>
      {!isFormOpen ? (
        <>
          <button
            onClick={() => setIsFormOpen(true)}
            className="bg-blue-700 py-5 text-white font-semibold shadow-lg rounded-md hover:bg-blue-900 transition-all duration-300 "
          >
            Add New Patient
          </button>
          <PatientList />
        </>
      ) : (
        <div className="bg-white flex-1 flex-col  gap-8 p-6 relative overflow-auto">
          <form
            id="main-form"
            onSubmit={handleSubmit(submitFormHandler)}
            className="xs:pb-8 h-full min-h-screen"
          >
            {formSection[tabIndex]}

            <div className="mt-12 flex gap-4">
              {tabIndex >= 1 && (
                <Button
                  type="button"
                  value="Back"
                  tabIndex={tabIndex}
                  bgColor={""}
                  onClick={handleBackClick}
                  className="text-black border-2 rounded-md"
                />
              )}

              {tabIndex < 3 && (
                <Button
                  type="button"
                  value="Next"
                  tabIndex={tabIndex}
                  onClick={tabClickHandler}
                  bgColor={"bg-yellow-500"}
                  className="text-white"
                />
              )}

              <Button
                type="submit"
                value="Save"
                bgColor="bg-blue-500"
                className="ml-auto text-white"
              />
            </div>
          </form>
          <SideBar />
        </div>
      )}
    </>
  );
};

export default InputForms;
