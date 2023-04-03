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

type PropMedicines = {
  register: UseFormRegister<IFormValue>;
  errors: any;
  control: Control<IFormValue>;
};

const Medicines = ({ register, errors, control }: PropMedicines) => {
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
    <div>
      {fields.map((medicine, index) => (
        <div
          key={medicine.id}
          className="flex items-center gap-2 xl:justify-between space-y-4"
        >
          <div className="relative">
            <input
              type="text"
              placeholder="Medicine name..."
              {...register(`medicines.${index}.name`)}
              defaultValue={medicine.name}
              className={`border-2 border-gray-300 py-2 px-4 w-full rounded-md`}
            />
            <select
              aria-label="Select medicine type"
              className="absolute bottom-3.5 right-1 pl-4 py-2  h-10 border-l-0 border-gray-300 rounded-r-md pointer-events-auto text-slate-500 bg-transparent"
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
            className={`border-2 border-gray-300 py-2 px-4 rounded-md w-1/5 mt-6`}
            {...register(`medicines.${index}.dose`)}
            defaultValue={medicine.dose}
          />

          {fields.length === 1 || (
            <Button
              type="button"
              value="x"
              margin={6}
              bgColor="bg-red-500"
              onClick={() => remove(index)}
            />
          )}
        </div>
      ))}

      <div className="flex gap-4">
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
    </div>
  );
};

export default Medicines;
