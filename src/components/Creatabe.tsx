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
  const [medicalHistory, setInputValue] = React.useState("");

  const [symptoms, setSymptoms] = React.useState("");

  const [value, setValue] = React.useState<readonly Option[]>([]);

  const handleKeyDown: KeyboardEventHandler = (event) => {
    if (!medicalHistory) return;
    switch (event.key) {
      case "Enter":
      case "Tab":
        setValue((prev) => [...prev, createOption(medicalHistory)]);
        setInputValue("");
        event.preventDefault();
    }
  };

  return (
    <>
      <div>
        <label>Medical History</label>
        <CreatableSelect
          components={components}
          inputValue={medicalHistory}
          isClearable
          isMulti
          menuIsOpen={false}
          onChange={(newValue) => setValue(newValue)}
          onInputChange={(newValue) => setInputValue(newValue)}
          onKeyDown={handleKeyDown}
          placeholder="Type Medical history and press enter..."
          value={value}
        />
      </div>

      {/* <div>
        <label>Symptoms</label>
        <CreatableSelect
          components={components}
          inputValue={medicalHistory}
          isClearable
          isMulti
          menuIsOpen={false}
          onChange={(newValue) => setValue(newValue)}
          onInputChange={(newValue) => setInputValue(newValue)}
          onKeyDown={handleKeyDown}
          placeholder="Type Symptoms and press enter..."
          value={value}
        />
      </div> */}
    </>
  );
};

export default Creatable;
