import IOption from "../../ts/Option";
import CreatableSelect from "react-select/creatable";
import { useMyFormContext } from "../../Context/MyFormContext";
import { option } from "../../ts/Contants";
import { Controller } from "react-hook-form";
import { PropRHF } from "./Medicines";

const components = {
  DropdownIndicator: null,
};

const MedicalRecord = ({ control, setValue }: PropRHF) => {
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
  } = useMyFormContext();

  return (
    <div className="xs:pb-8 space-y-4 ">
      <div>
        <label className=" font-semibold">Medical History</label>

        <Controller
          control={control}
          name="medicalRecord.histories"
          render={({ field }) => (
            <CreatableSelect
              components={components}
              isClearable
              isMulti
              menuIsOpen={false}
              onChange={(value) => console.log(value)}
              onInputChange={(value) => console.log(value)}
              onKeyDown={handleKeyDown}
              placeholder="Type Medical history and press enter..."
            />
          )}
        />
      </div>

      <div>
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
      </div>
    </div>
  );
};

export default MedicalRecord;
