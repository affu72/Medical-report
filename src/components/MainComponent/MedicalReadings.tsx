import Button from "../CustomComp/Button";
import { useFieldArray, useFormContext } from "react-hook-form";
import InputRHF from "../CustomComp/InputRHF";
import { toast } from "react-toastify";

export interface IMedicalReadings {
  readingName: string;
  readingValue: string;
}

const MedicalReadings = () => {
  const { control, getValues } = useFormContext();
  const { fields, remove, append } = useFieldArray({
    name: "medicalRecord.medicalReadings",
    control,
  });

  const isPrevFieldEmpty = (fields: Array<any>) => {
    if (fields?.length === 0) return false;
    return (
      fields.at(-1).readingName === "" ||
      fields.at(-1).readingValue === null ||
      fields.at(-1).readingValue === ""
    );
  };

  const notify = () => toast.error("Fill previous field first");

  return (
    <div>
      {fields.map((reading, index) => (
        <div key={reading.id} className="rounded-md flex gap-2 mb-2">
          <InputRHF
            placeholder="Reading Name"
            control={control}
            name={`medicalRecord.medicalReadings.${index}.readingName`}
            className="self-center"
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
              className="self-center"
            />
          )}
        </div>
      ))}

      <Button
        type="button"
        value="Add Anoher reading"
        bgColor="bg-blue-500"
        onClick={() => {
          if (isPrevFieldEmpty(getValues("medicalRecord.medicalReadings"))) {
            notify();
            return;
          }
          append({ readingName: "", readingValue: null });
        }}
      />
      <Button
        type="button"
        bgColor={"bg-red-500"}
        value="Clear All"
        onClick={() => remove()}
      />
    </div>
  );
};

export default MedicalReadings;
