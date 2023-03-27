import React, { useContext } from "react";
import IOption from "../../ts/interfaces/Option";
import CreatableSelect from "react-select/creatable";
import FormContext from "../../Context/FormContext";

const components = {
  DropdownIndicator: null,
};

const MedicalRecord = () => {
  const callBacks = useContext(FormContext)?.callBacks!;
  const recordValue = useContext(FormContext)?.medicalRecord!;

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

  console.log(recordValue.histories, recordValue.symptoms);

  return (
    <div className="xs:pb-8 space-y-4">
      <div>
        <label>Medical History</label>
        <CreatableSelect
          components={components}
          inputValue={recordValue.inputMedicalHistory}
          isClearable
          isMulti
          menuIsOpen={false}
          onChange={(newValue) => {
            callBacks.setMedicalHistory(newValue);
          }}
          onInputChange={(newValue) => {
            callBacks.setInputMedicalHistory(newValue);
          }}
          onKeyDown={callBacks.handleKeyDown}
          placeholder="Type Medical history and press enter..."
          value={recordValue.histories}
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
          inputValue={recordValue.inputSymptoms}
          isClearable
          isMulti
          options={option}
          onChange={(newValue) => callBacks.setSymptoms(newValue)}
          onInputChange={(newValue) => {
            callBacks.setInputSymptoms(newValue);
          }}
          onKeyDown={callBacks.handleKeySymptoms}
          placeholder="Type to select or press enter to create..."
          value={recordValue.symptoms}
        />
      </div>
    </div>
  );
};

export default MedicalRecord;
