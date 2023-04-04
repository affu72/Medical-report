import Button from "../CustomComp/Button";
import Input from "../CustomComp/Input";
import { useMyFormContext } from "../../Context/MyFormContext";
import { PropRHF } from "./Medicines";
import { useFieldArray } from "react-hook-form";

export interface IMedicalBill {
  billName: string;
  billValue: string;
  id: number;
}

const MedicalBill = ({ register, errors, control }: PropRHF) => {
  const { fields, remove, append } = useFieldArray({
    name: "medicalBills",
    control,
  });

  const { bills, setBills, handleAddBill } = useMyFormContext();

  const handlerMedicalBill = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { value, name } = event.target;

    const newBills = [...bills];

    newBills[index][name as "billName" | "billValue"] = value;

    setBills(newBills);
  };

  return (
    <div className="">
      {fields.map((bill, index) => (
        <div
          key={bill.id}
          className="px-4 rounded-md py-4 flex gap-4 items-center border-2"
        >
          <Input
            placeholder="Bill Name"
            value={bill.billName}
            {...register(`medicalBills.${index}.billName`)}
          />

          <Input
            placeholder="Bill Value"
            type="number"
            value={bill.billValue}
            {...register(`medicalBills.${index}.billValue`)}
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
        onClick={() => append({ billName: "", billValue: "", id: 0 })}
      />
    </div>
  );
};

export default MedicalBill;
