import IOption from "../../ts/Option";
import CreatableSelect from "react-select/creatable";
import { useMyFormContext } from "../../Context/MyFormContext";
import { option } from "../../ts/Contants";
import { Controller } from "react-hook-form";
import { PropRHF } from "./Medicines";
import { getValue } from "@testing-library/user-event/dist/utils";
import { useState } from "react";

const components = {
  DropdownIndicator: null,
};

const MedicalRecord = ({ control, setValue, register, getValues }: PropRHF) => {
  const [inputValue, setInputValue] = useState("");

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
  } = useMyFormContext();

  const createOption = (label: string) => ({
    label,
    value: label,
  });

  const handleKeySymptoms = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (!inputValue) return;

    switch (event.key) {
      case "Enter":
      case "Tab":
        const value = getValues("medicalRecord.symptoms");

        const newvalue = [...value, { label: inputValue, value: inputValue }];

        console.log(newvalue);

        setValue("medicalRecord.symptoms", newvalue);
        setInputValue("");
        event.preventDefault();
    }
  };

  return (
    <div className="xs:pb-8 space-y-4 ">
      {/* <div>
        <label className="font-semibold">Medical History</label>

        <CreatableSelect
          inputValue={inputMedicalHistory}
          components={components}
          isClearable
          isMulti
          menuIsOpen={false}
          onKeyDown={handleKeyDown}
          placeholder="Type Medical history and press enter..."
          onInputChange={(newValue) => setInputMedicalHistory(newValue)}
          onChange={(newValue) => setMedicalHistories(newValue as IOption[])}
          value={medicalHistories}
        />
      </div> */}

      {/* <div>
        <label className="font-semibold">Symptoms </label>
        <span className="text-sm">
          ( type to search or press enter to create new one )
        </span>
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
      </div> */}

      <Controller
        control={control}
        name="medicalRecord.symptoms"
        render={({
          field: { onChange, onBlur, value },
          formState: { errors },
        }) => (
          <CreatableSelect
            inputValue={inputValue}
            isClearable
            isMulti
            options={option}
            onChange={onChange}
            onInputChange={(newValue) => {
              setInputValue(newValue);
            }}
            onKeyDown={handleKeySymptoms}
            placeholder="Type to select or press enter to create..."
            value={value}
          />
        )}
      />
    </div>
  );
};

export default MedicalRecord;
