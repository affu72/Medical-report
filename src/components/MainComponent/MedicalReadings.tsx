import Button from "../CustomComp/Button";
import { useFieldArray, useFormContext } from "react-hook-form";
import InputRHF from "../CustomComp/InputRHF";

export interface IMedicalReadings {
  readingName: string;
  readingValue: string;
  key: string;
}

const MedicalReadings = () => {
  const { control, getValues } = useFormContext();
  const { fields, remove, append } = useFieldArray({
    name: "medicalReadings",
    control,
  });

  console.log(fields.length);

  return (
    <div className="">
      {fields.map((reading, index) => (
        <div
          key={reading.id}
          className="px-4 rounded-md py-4 flex gap-4 items-center border-2"
        >
          <InputRHF
            placeholder="Reading Name"
            control={control}
            name={`medicalRecord.medicalReadings.${index}.readingName`}
          />

          <InputRHF
            placeholder="Reading Value"
            type="text"
            control={control}
            name={`medicalRecord.medicalReadings.${index}.readingValue`}
          />

          {fields.length === 1 || (
            <Button
              type="button"
              value="x"
              bgColor="bg-red-500"
              onClick={() => remove(index)}
            />
          )}
        </div>
      ))}

      <Button
        type="button"
        value="Add Anoher reading"
        bgColor="bg-blue-500"
        onClick={() => {
          // if (
          //   getValues().medicalRecord?.medicalReadings.at(-1).readingName ===
          //     "" ||
          //   getValues().medicalRecord?.medicalReadings.at(-1).readingValue ===
          //     null
          // )
          //   return;

          append({ readingName: "", readingValue: null });
        }}
      />
    </div>
  );
};

export default MedicalReadings;
