import React, { KeyboardEventHandler } from "react";

import CreatableSelect from "react-select/creatable";

const components = {
  DropdownIndicator: null,
};

interface Option {
  readonly label: string;
  readonly value: string;
}

const createOption = (label: string) => ({
  label,
  value: label,
});

const Creatable: React.FC = () => {
  const [inputMedicalHistory, setInputMedicalHistory] = React.useState("");

  const [medicalHistory, setMedicalHistory] = React.useState<readonly Option[]>(
    []
  );

  const [inputSymptoms, setInputSymptoms] = React.useState("");

  const [symptoms, setSymptoms] = React.useState<readonly Option[]>([]);

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
        setInputSymptoms("");
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

  return (
    <>
      <div>
        <label>Medical History</label>
        <CreatableSelect
          components={components}
          inputValue={inputMedicalHistory}
          isClearable
          isMulti
          menuIsOpen={false}
          onChange={(newValue) => setMedicalHistory(newValue)}
          onInputChange={(newValue) => setInputMedicalHistory(newValue)}
          onKeyDown={handleKeyDown}
          placeholder="Type Medical history and press enter..."
          value={medicalHistory}
        />
      </div>

      <div>
        <label>Symptoms</label>
        <CreatableSelect
          components={components}
          inputValue={inputSymptoms}
          isClearable
          isMulti
          menuIsOpen={false}
          onChange={(newValue) => setSymptoms(newValue)}
          onInputChange={(newValue) => setInputSymptoms(newValue)}
          onKeyDown={handleKeySymptoms}
          placeholder="Type Symptoms and press enter..."
          value={symptoms}
        />
      </div>
    </>
  );
};

export default Creatable;
