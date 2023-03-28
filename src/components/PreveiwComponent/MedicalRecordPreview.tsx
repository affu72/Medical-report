import React from "react";
import IOption from "../../ts/interfaces/Option";
import { useMyFormContext } from "../../Context/MyFormContext";

const MedicalRecordPreview = () => {
  const { medicalHistories, symptoms } = useMyFormContext();

  return (
    <div className="gap-2 p-6">
      <div className="break-words">
        <span className="font-bold">Medical history: </span>
        {medicalHistories.map((option, index) => (
          <span key={option.value + index} className="px-2 py-1">
            {option.value}
            {index < medicalHistories.length - 1 ? "," : ""}
          </span>
        ))}
      </div>

      <div className="break-words">
        <span className="font-bold">Known Symptoms: </span>
        {symptoms.map((option, index) => (
          <span key={option.value + index} className="px-2 py-1">
            {option.value}
            {index < symptoms.length - 1 ? "," : ""}
          </span>
        ))}
      </div>
    </div>
  );
};

export default MedicalRecordPreview;
