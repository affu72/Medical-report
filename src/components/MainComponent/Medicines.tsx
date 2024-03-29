import Button from "../CustomComp/Button";
import { useFieldArray, useFormContext } from "react-hook-form";
import { toast } from "react-toastify";
import InputRHF from "../CustomComp/InputRHF";

const Medicines = () => {
  const { control, register, getValues } = useFormContext();

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

  return (
    <div className="flex flex-col gap-8 rounded-md outline-blue-500">
      {fields.map((medicine, index) => (
        <div key={medicine.id} className="rounded-md flex gap-2 h-9">
          <div className="flex w-full">
            <select
              className="border-2 border-gray-300 h-[2.9rem] py-2 rounded-l-md"
              {...register(`medicines.${index}.type`, {
                required: "Type Required",
              })}
            >
              <option value="" disabled>
                Type
              </option>
              <option value="Tablet">Tablet</option>
              <option value="Syrup">Syrup</option>
              <option value="Injection">Injection</option>
            </select>
            <div className="w-full">
              <InputRHF
                name={`medicines.${index}.name`}
                control={control}
                placeholder="Enter Medicine name"
                type="text"
                className="self-center border-l-0 rounded-l-none"
              />
            </div>
          </div>

          <InputRHF
            name={`medicines.${index}.dose`}
            control={control}
            placeholder="1 Tab daily"
            type="text"
            className="self-end"
          />

          {fields.length === 1 || (
            <Button
              type="button"
              value="X"
              bgColor="bg-red-500"
              onClick={() => remove(index)}
              className="self-start py-[9px] mt-[1px] text-white"
            />
          )}
        </div>
      ))}

      <div className="flex gap-4 mt-4">
        <Button
          className="text-white"
          type="button"
          value="Add Medicine"
          bgColor={"bg-blue-500"}
          onClick={() => {
            if (!isPrevFieldEmpty(getValues("medicines")))
              append({name: "", dose: "", type: "", id: 0});
            else {
              toast.error("Fill previous field first");
            }
          }}
        />

        {fields.length > 1 && (
          <Button
            type="button"
            bgColor={"bg-red-500"}
            value="Clear All"
            onClick={() =>
              remove(
                Array.from({length: fields.length - 1}, (_, index) => index + 1)
              )
            }
            className="text-white"
          />
        )}
      </div>
    </div>
  );
};

export default Medicines;
