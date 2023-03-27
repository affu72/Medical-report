import React, { useContext } from "react";
import IOption from "../../ts/interfaces/Option";
import CreatableSelect from "react-select/creatable";
import { useFormContext } from "../../Context/FormContext";

const components = {
  DropdownIndicator: null,
};

const MedicalRecord = () => {
  const {
    inputMedicalHistory,
    setInputMedicalHistory,
    medicalHistories,
    setMedicalHistories,
    inputSymptoms,
    setInputSymptoms,
    symptoms,
    setSymptoms,
    handleKeyDown,
    handleKeySymptoms,
  } = useFormContext();

  const option: IOption[] = [
    { label: "Abdominal pain", value: "abdominal pain" },
    { label: "Blood in stool", value: "blood in stool" },
    { label: "Chest pain", value: "chest pain" },
    { label: "Constipation", value: "constipation" },
    { label: "Cough", value: "cough" },
    { label: "Diarrhea", value: "diarrhea" },
    { label: "Dizziness", value: "dizziness" },
    { label: "Fatigue", value: "fatigue" },
    { label: "Fever", value: "fever" },
    { label: "Headache", value: "headache" },
    { label: "Heart palpitations", value: "heart palpitations" },
    { label: "Joint pain", value: "joint pain" },
    { label: "Nausea and vomiting", value: "nausea and vomiting" },
    { label: "Shortness of breath", value: "shortness of breath" },
    { label: "Skin rash", value: "skin rash" },
    { label: "Sore throat", value: "sore throat" },
    { label: "Urinary problems", value: "urinary problems" },
    { label: "Vision problems", value: "vision problems" },
  ];

  return (
    <div className="xs:pb-8 space-y-4">
      <div>
        <label>Medical History</label>
        <CreatableSelect
          components={components}
          inputValue={inputMedicalHistory}
          isClearable
          isMulti
          menuIsOpen={false}
          onChange={(newValue) => {
            setMedicalHistories(newValue as IOption[]);
          }}
          onInputChange={(newValue) => {
            setInputMedicalHistory(newValue);
          }}
          onKeyDown={handleKeyDown}
          placeholder="Type Medical history and press enter..."
          value={medicalHistories}
        />
      </div>

      <div>
        <label>
          Symptoms{" "}
          <span className="text-sm">
            [ type to search or press enter to create new one ]
          </span>
        </label>
        <CreatableSelect
          inputValue={inputSymptoms}
          isClearable
          isMulti
          options={option}
          onChange={(newValue) => setSymptoms(newValue as IOption[])}
          onInputChange={(newValue) => {
            setInputSymptoms(newValue);
          }}
          onKeyDown={handleKeySymptoms}
          placeholder="Type to select or press enter to create..."
          value={symptoms}
        />
      </div>
    </div>
  );
};

export default MedicalRecord;
