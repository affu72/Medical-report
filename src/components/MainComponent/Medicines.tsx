import Button from "../CustomComp/Button";
import { useFieldArray, useFormContext } from "react-hook-form";

import FormError from "../CustomComp/FormError";

export interface IMedicine {
  id: string;
  type: string;
  name: string;
  dose: string;
  quantity?: string;
}

const Medicines = () => {
  const {
    control,
    register,
    formState: { errors },
    getValues,
  } = useFormContext();

  const { append, fields, remove } = useFieldArray({
    name: "medicines",
    control,
    keyName: "id",
  });

  const isPrevFieldEmpty = (fields: Array<any>) => {
    if (fields.length === 0) return false;
    return (
      fields.at(-1).name === "" ||
      fields.at(-1).type === "" ||
      fields.at(-1).dose === ""
    );
  };

  console.log();

  return (
    <div className="flex flex-col gap-8">
      {fields.map((medicine, index) => (
        <div className="xl:justify-between px-4 rounded-md py-4 flex items-center border-2 flex-wrap ">
          <div className="relative flex w-2/3 border-2 border-gray-300  rounded-md">
            <input
              type="text"
              placeholder="Medicine name..."
              {...register(`medicines.${index}.name`, {
                required: " Name Required",
              })}
              className={`py-2 px-4 w-full`}
            />

            <select
              aria-label="Select medicine type"
              className="absolute border-l-2 text-slate-500 bg-transparent outline-none inline-block right-0 bottom-1/2 translate-y-1/2 py-2 px-2"
              {...register(`medicines.${index}.type`, {
                required: "Type Required",
              })}
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
            className={`border-2 border-gray-300 py-2 px-4 rounded-md w-1/6`}
            {...register(`medicines.${index}.dose`, {
              required: "Dose Required",
            })}
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

          <FormError errors={errors} name={`medicines.${index}.name`} />
          <FormError errors={errors} name={`medicines.${index}.type`} />
          <FormError errors={errors} name={`medicines.${index}.dose`} />
        </div>
      ))}

      <div className="flex gap-4 mt-4">
        <Button
          type="button"
          value="Add Medicine"
          bgColor={"bg-blue-500"}
          onClick={() => {
            if (!isPrevFieldEmpty(getValues("medicines")))
              append({ name: "", dose: "", type: "", id: 0 });
          }}
        />

        <Button
          type="button"
          bgColor={"bg-yellow-500"}
          value="Clear All"
          onClick={() => remove()}
        />
      </div>
    </div>
  );
};

export default Medicines;
