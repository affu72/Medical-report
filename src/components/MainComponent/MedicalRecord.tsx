import React, { KeyboardEventHandler } from "react";
import IOption from "../../ts/interfaces/Option";
import CreatableSelect from "react-select/creatable";
import { IMedicalRecord } from "../../ts/interfaces/MedicalRecord";
const components = {
  DropdownIndicator: null,
};
interface Option {
  label: string;
  value: string;
}
const createOption = (label: string) => ({
  label,
  value: label,
});

interface PropMedicalRecord {
  getRecord: (data: IMedicalRecord[]) => void;
}

const MedicalRecord = ({ getRecord }: PropMedicalRecord) => {
  const [inputMedicalHistory, setInputMedicalHistory] = React.useState("");
  const [medicalHistory, setMedicalHistory] = React.useState<
    (Option | { label: string; value: string })[]
  >([]);

  const [inputSymptoms, setInputSymptoms] = React.useState("");

  const [symptoms, setSymptoms] = React.useState<
    (Option | { label: string; value: string })[]
  >([]);

  const handleKeyDown: KeyboardEventHandler = (event) => {
    if (!inputMedicalHistory) return;
    switch (event.key) {
      case "Enter":
      case "Tab":
        setMedicalHistory((prev) => [
          ...prev,
          createOption(inputMedicalHistory),
        ]);
        setInputMedicalHistory("");
        event.preventDefault();
    }
  };
  const handleKeySymptoms: KeyboardEventHandler = (event) => {
    if (!inputSymptoms) return;
    switch (event.key) {
      case "Enter":
      case "Tab":
        setSymptoms((prev) => [...prev, createOption(inputSymptoms)]);
        setInputSymptoms("");
        event.preventDefault();
    }
  };

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

  // console.log(medicalHistory);

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
            setMedicalHistory(
              newValue as (Option | { label: string; value: string })[]
            );
          }}
          onInputChange={(newValue) => {
            setInputMedicalHistory(newValue);
            getRecord(medicalHistory);
          }}
          onKeyDown={handleKeyDown}
          placeholder="Type Medical history and press enter..."
          value={medicalHistory}
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
          onChange={(newValue) =>
            setSymptoms(
              newValue as (Option | { label: string; value: string })[]
            )
          }
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
