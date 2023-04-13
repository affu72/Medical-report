import Button from "../CustomComp/Button";
import { useFieldArray, useFormContext } from "react-hook-form";
import InputRHF from "../CustomComp/InputRHF";
import { toast } from "react-toastify";

export interface IMedicalBill {
  billName: string;
  billValue: number | null;
  id: string;
}

const MedicalBill = () => {
  const { control, getValues } = useFormContext();
  const { fields, remove, append } = useFieldArray({
    name: "medicalBills",
    control,
  });

  return (
    <div>
      {fields.map((bill, index) => (
        <div
          key={bill.id}
          // className="px-4 rounded-md py-4 flex gap-4 items-center border-2 h-20"
          className="rounded-md flex gap-2 h-18"
        >
          <InputRHF
            placeholder="Bill Name"
            control={control}
            name={`medicalBills.${index}.billName`}
          />

          <InputRHF
            placeholder="Bill Value"
            type="number"
            control={control}
            name={`medicalBills.${index}.billValue`}
          />

          {fields.length === 1 || (
            <Button
              type="button"
              value="x"
              bgColor="bg-red-500"
              onClick={() => remove(index)}
              className="text-white self-start py-2"
            />
          )}
        </div>
      ))}

      <Button
        className="text-white"
        type="button"
        value="Add Anoher Bill"
        bgColor="bg-blue-500"
        onClick={() => {
          if (
            getValues().medicalBills.at(-1).billName === "" ||
            getValues().medicalBills.at(-1).billValue === null
          ) {
            toast.error("Fill previous field first");
            return;
          }

          append({ billName: "", billValue: null });
        }}
      />
    </div>
  );
};

export default MedicalBill;
