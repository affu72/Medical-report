import React from "react";
import IOption from "../../ts/interfaces/Option";

interface PropMedicalRecord {
  optionsHistory: IOption[];
  optionSymptoms: IOption[];
}

const MedicalRecordPreview: React.FC<PropMedicalRecord> = ({
  optionsHistory,
  optionSymptoms,
}) => {
  return (
    <div className="flex flex-col gap-2 p-4">
      <div>
        <span className="font-bold">Medical history: </span>
        {optionsHistory.map((option, index) => (
          <span key={option.value + index} className="px-2 py-1">
            {option.value}
          </span>
        ))}
      </div>

      <div>
        <span className="font-bold">Known Symptoms: </span>
        {optionSymptoms.map((option, index) => (
          <span key={option.value + index} className="px-2 py-1">
            {option.value}
          </span>
        ))}
      </div>
    </div>
  );
};

export default MedicalRecordPreview;
