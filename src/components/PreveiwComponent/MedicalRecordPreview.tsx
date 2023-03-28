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
    <div className="gap-2 p-4">
      <div className="break-words">
        <span className="font-bold">Medical history: </span>
        {optionsHistory.map((option, index) => (
          <span key={option.value + index} className="px-2 py-1">
            {option.value}
          </span>
        ))}
      </div>

      <div className="break-words">
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
