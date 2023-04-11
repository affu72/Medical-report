import React, { useState } from "react";
import { useMyFormContext } from "../Context/MyFormContext";
import {
  RiEdit2Line,
  RiDeleteBack2Line,
  RiDownload2Line,
} from "react-icons/ri";
// import { useFormContext } from "react-hook-form";
import { IFormData } from "./MainComponent/InputForms";
import { useFormContext } from "react-hook-form";

const PatientList = () => {
  let {
    patientData,
    deletePatientDataHandler,
    setIsNavbarOpen,
    setIsFormOpen,
  } = useMyFormContext();

  const { reset } = useFormContext();

  const [searchValue, setSearchValue] = useState("");

  const editFormHandler = (e: any) => {
    const index = e.currentTarget.tabIndex;
    reset({ ...patientData?.at(index) });

    setIsFormOpen(true);
    setIsNavbarOpen(false);
  };

  //search patient
  const isIncluded = (patient: IFormData) => {
    const name =
      patient.personalDetails.firstName + patient.personalDetails.lastName;

    return name.includes(searchValue?.charAt(0).toLocaleUpperCase());
  };

  patientData = patientData?.filter((patient) => isIncluded(patient))!;

  return (
    <>
      <div className="flex justify-center">
        <input
          autoFocus={true}
          className="rounded-2xl py-2 border-2 border-gray-500 box-border text-center"
          placeholder="Search"
          onChange={(e) => setSearchValue(e.target.value)}
          type="text"
          value={searchValue}
        />
      </div>
      <ul className="mt-12 flex flex-col gap-2">
        {patientData?.map((patient, index) => (
          <li
            key={
              patient.personalDetails.mobile + patient.personalDetails.firstName
            }
            className="flex justify-between px-4 py-4 border-b-2 border-gray-400 bg-white text-2xl align-middle w-full"
          >
            <span>
              {`${patient.personalDetails.firstName}
                ${patient.personalDetails.lastName}`}
            </span>

            <div className="flex gap-6">
              <button type="button" onClick={editFormHandler} tabIndex={index}>
                {<RiEdit2Line size={"22px"} />}
              </button>
              <button type="button">
                {<RiDownload2Line size={"22px"} tabIndex={index} />}
              </button>
              <button
                type="button"
                onClick={deletePatientDataHandler}
                tabIndex={index}
              >
                <RiDeleteBack2Line size={"22px"} />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default PatientList;
