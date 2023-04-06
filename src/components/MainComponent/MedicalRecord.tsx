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
  const [inputHistory, setInputHistory] = useState("");
  const [inputSymptom, setInputSymptom] = useState("");

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

  const keyDownHandler = (
    name: string,
    inputValue: string,
    setInputValue: Function,
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (!inputValue) return;

    switch (event.key) {
      case "Enter":
      case "Tab":
        const value = getValues(name);

        console.log("value", value);

        const newvalue = [...value, { label: inputValue, value: inputValue }];

        console.log(newvalue);

        setValue(name, newvalue);
        setInputValue("");
        event.preventDefault();
    }
  };

  return (
    <div className="xs:pb-8 space-y-4 ">
      <div>
        <label className="font-semibold">Medical History</label>

        <Controller
          control={control}
          name="medicalRecord.histories"
          render={({
            field: { onChange, value, name },
            formState: { errors },
          }) => (
            <CreatableSelect
              inputValue={inputHistory}
              components={components}
              isClearable
              isMulti
              menuIsOpen={false}
              onKeyDown={(event: React.KeyboardEvent<HTMLInputElement>) =>
                keyDownHandler(name, inputHistory, setInputHistory, event)
              }
              placeholder="Type Medical history and press enter..."
              onInputChange={(newValue) => {
                setInputHistory(newValue);
              }}
              onChange={onChange}
              value={value}
            />
          )}
        />
      </div>

      <div>
        <label className="font-semibold">Symptoms </label>
        <span className="text-sm">
          ( type to search or press enter to create new one )
        </span>
        <Controller
          control={control}
          name={"medicalRecord.symptoms"}
          render={({
            field: { onChange, onBlur, value, name },
            formState: { errors },
          }) => (
            <CreatableSelect
              inputValue={inputSymptom}
              isClearable
              isMulti
              options={option}
              onChange={onChange}
              onInputChange={(newValue) => {
                setInputSymptom(newValue);
              }}
              onKeyDown={(event: React.KeyboardEvent<HTMLInputElement>) =>
                keyDownHandler(name, inputSymptom, setInputSymptom, event)
              }
              placeholder="Type to select or press enter to create..."
              value={value}
            />
          )}
        />
      </div>
    </div>
  );
};

export default MedicalRecord;
