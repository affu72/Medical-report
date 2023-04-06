import Button from "../CustomComp/Button";
import { useFieldArray, useFormContext } from "react-hook-form";
import InputRHF from "../CustomComp/InputRHF";

export interface IMedicalBill {
  billName: string;
  billValue: number | null;
  id: number;
}

const MedicalBill = () => {
  const { control, getValues } = useFormContext();
  const { fields, remove, append } = useFieldArray({
    name: "medicalBills",
    control,
  });

  return (
    <div className="">
      {fields.map((bill, index) => (
        <div
          key={bill.id}
          className="px-4 rounded-md py-4 flex gap-4 items-center border-2"
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
            />
          )}
        </div>
      ))}

      <Button
        type="button"
        value="Add Anoher Bill"
        bgColor="bg-blue-500"
        onClick={() => {
          if (
            getValues().medicalBills.at(-1).billName === "" ||
            getValues().medicalBills.at(-1).billValue === null
          )
            return;

          append({ billName: "", billValue: null, id: 0 });
        }}
      />
    </div>
  );
};

export default MedicalBill;
