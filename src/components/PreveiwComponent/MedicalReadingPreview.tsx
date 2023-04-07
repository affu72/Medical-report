import React from "react";
import { useMyFormContext } from "../../Context/MyFormContext";

const MedicalReadingPreview = () => {
  const { patientData } = useMyFormContext();
  return (
    <div>
      <h2 className="text-xl font-semibold ml-auto">Medical Reading</h2>
      {patientData?.at(-1)?.medicalRecord.medicalReadings.map((reading) => {
        return (
          <div key={reading.readingName}>
            <span className="font-semibold">{reading.readingName}: </span>
            <span>{reading.readingValue}</span>
          </div>
        );
      })}
    </div>
  );
};

export default MedicalReadingPreview;
