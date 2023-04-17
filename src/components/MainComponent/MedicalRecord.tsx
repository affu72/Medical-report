import { useState } from "react";
import CreatableSelect from "react-select/creatable";
import { option } from "../../ts/Contants";
import { Controller, useFormContext } from "react-hook-form";
import MedicalReaings from "./MedicalReadings";

const MedicalRecord = () => {
  const [inputHistory, setInputHistory] = useState("");
  const [inputSymptom, setInputSymptom] = useState("");

  const { getValues, setValue, control } = useFormContext();

  const keyDownHandler = (
    name: string,
    inputValue: string,
    setInputValue: Function,
    event: any
  ) => {
    if (!inputValue) return;

    if (event.type === "keydown") {
      switch (event?.key) {
        case "Enter":
        case "Tab":
          const value = getValues(name);

          const newvalue = [...value, { label: inputValue, value: inputValue }];

          setValue(name, newvalue);
          setInputValue("");
          event?.preventDefault();
      }
    } else {
      const value = getValues(name);
      const newvalue = [...value, { label: inputValue, value: inputValue }];
      setValue(name, newvalue);
      setInputValue("");
      event?.preventDefault();
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
              components={{ DropdownIndicator: null }}
              isClearable
              isMulti
              menuIsOpen={false}
              styles={{
                control: (provided: any) => ({
                  ...provided,
                  border: "2px solid rgb(209 213 219)",
                }),
              }}
              onKeyDown={(event: React.KeyboardEvent<HTMLInputElement>) =>
                keyDownHandler(name, inputHistory, setInputHistory, event)
              }
              placeholder="Type Medical history and press enter..."
              onInputChange={(newValue) => {
                setInputHistory(newValue);
              }}
              onChange={onChange}
              value={value}
              onBlur={(event) => {
                keyDownHandler(name, inputHistory, setInputHistory, event);
              }}
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
              styles={{
                control: (provided: any) => ({
                  ...provided,
                  border: "2px solid rgb(209 213 219)",
                }),
              }}
              onChange={onChange}
              onInputChange={(newValue) => {
                setInputSymptom(newValue);
              }}
              onKeyDown={(event: React.KeyboardEvent<HTMLInputElement>) =>
                keyDownHandler(name, inputSymptom, setInputSymptom, event)
              }
              placeholder="Type to select or press enter to create..."
              value={value}
              onBlur={(event) => {
                keyDownHandler(name, inputSymptom, setInputSymptom, event);
              }}
            />
          )}
        />
      </div>
      <br />
      <div>
        <label className="font-semibold mb-0">Medical Reading</label>
        <MedicalReaings />
      </div>
    </div>
  );
};

export default MedicalRecord;
