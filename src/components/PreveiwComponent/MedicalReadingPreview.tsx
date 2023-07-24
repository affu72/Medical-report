import React from "react";
import { useFormContext } from "react-hook-form";
import { IMedicalReadings } from "../../ts/interfaces";

const MedicalReadingPreview = () => {
  const { watch } = useFormContext();

  const readings: IMedicalReadings[] = watch("medicalRecord.medicalReadings");

  return (
    <div>
      <h2 className="text-2xl font-bold ml-auto text-center mb-2">
        Medical Reading
      </h2>
      {readings?.map(reading => {
        return (
          <div key={reading.readingName} className="">
            <span className="font-semibold">{reading.readingName}: </span>
            <span>{reading.readingValue}</span>
          </div>
        );
      })}
    </div>
  );
};

export default MedicalReadingPreview;
