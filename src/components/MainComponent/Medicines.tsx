import Input from "../CustomComp/Input";
import Button from "../CustomComp/Button";
import { useMyFormContext } from "../../Context/MyFormContext";
import { Control, UseFormRegister, useFieldArray } from "react-hook-form";
import { IFormValue } from "./InputForms";
import { getInputClassName } from "../../ts/Contants";

export interface IMedicine {
  id: number;
  type: string;
  name: string;
  dose: string;
  quantity?: string;
}

export type PropRHF = {
  register: UseFormRegister<IFormValue>;
  errors: any;
  control: Control<IFormValue>;
  setValue?: any;
};

const Medicines = ({ register, errors, control }: PropRHF) => {
  const { append, fields, remove } = useFieldArray({
    name: "medicines",
    control,
  });

  const {
    addMedicine,
    medicines,
    clearMedicineHandler,
    removeMedicineHandler,
    medicineInputChangeHandler,
  } = useMyFormContext();

  return (
    <>
      {fields.map((medicine, index) => (
        <div
          key={medicine.id}
          className="xl:justify-between px-4 rounded-md py-4 flex gap-4 items-center border-2"
        >
          <div className="relative flex w-full border-2 border-gray-300  rounded-md">
            <input
              type="text"
              placeholder="Medicine name..."
              {...register(`medicines.${index}.name`)}
              defaultValue={medicine.name}
              className={`py-2 px-4 w-full`}
            />

            <select
              aria-label="Select medicine type"
              className="absolute border-l-2 text-slate-500 bg-transparent outline-none inline-block right-0 bottom-1/2 translate-y-1/2 py-2 px-2"
              {...register(`medicines.${index}.type`)}
              defaultValue={medicine.type}
            >
              <option value="" disabled>
                Type
              </option>
              <option value="tablet">Tablet</option>
              <option value="syrup">Syrup</option>
              <option value="injection">Injection</option>
            </select>
          </div>

          <input
            type="text"
            placeholder="dose"
            className={`border-2 border-gray-300 py-2 px-4 rounded-md w-1/4`}
            {...register(`medicines.${index}.dose`)}
            defaultValue={medicine.dose}
          />

          {fields.length === 1 || (
            <Button
              type="button"
              value="x"
              bgColor="bg-red-500"
              onClick={() => remove(index)}
              className=""
            />
          )}
        </div>
      ))}

      <div className="flex gap-4 mt-4">
        <Button
          type="button"
          value="Add Medicine"
          bgColor={"bg-blue-500"}
          onClick={() => append({ name: "", dose: "", type: "", id: 0 })}
        />

        <Button
          type="button"
          bgColor={"bg-yellow-500"}
          value="Clear All"
          onClick={clearMedicineHandler}
        />
      </div>
    </>
  );
};

export default Medicines;
