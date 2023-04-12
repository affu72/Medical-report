import React from "react";
import { useFormContext } from "react-hook-form";
import { IMedicalReadings } from "../MainComponent/MedicalReadings";

const MedicalReadingPreview = () => {
  const { watch } = useFormContext();

  const readings: IMedicalReadings[] = watch("medicalRecord.medicalReadings");

  console.log(readings);

  return (
    <div>
      <h2 className="text-xl font-semibold ml-auto">Medical Reading</h2>
      {readings?.map((reading) => {
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
