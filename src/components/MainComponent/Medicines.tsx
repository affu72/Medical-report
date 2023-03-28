import Input from "../CustomComp/Input";
import Button from "../CustomComp/Button";
import { useMyFormContext } from "../../Context/MyFormContext";

export interface IMedicine {
  id: number;
  type: string;
  name: string;
  dose: string;
  quantity?: string;
}

const Medicines = () => {
  const {
    addMedicine,
    medicines,
    clearMedicineHandler,
    removeMedicineHandler,
    medicineInputChangeHandler,
  } = useMyFormContext();

  console.log(medicines);

  return (
    <div>
      {medicines.map((medicine) => (
        <div
          key={medicine.id}
          className="flex items-center gap-2 xl:justify-between space-y-4"
        >
          <div className="relative">
            <Input
              type="text"
              id="medicine-name"
              name="name"
              placeholder="Enter medicine name..."
              label="Medicine Name"
              onChange={(e) => medicineInputChangeHandler(e, medicine.id)}
              value={medicine.name}
            />
            <select
              name="type"
              aria-label="Select medicine type"
              className="absolute bottom-5 right-1 pl-4 py-2 bg-white h-10 border-l-1 border-gray-300 rounded-r-md pointer-events-auto text-slate-500 outline-none"
              value={medicine.type}
              onChange={(e) => medicineInputChangeHandler(e, medicine.id)}
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
            name="dose"
            type="text"
            placeholder="dose"
            className={`border-2 border-gray-300 py-2 px-4 rounded-md w-1/5 mt-6`}
            onChange={(e) => medicineInputChangeHandler(e, medicine.id)}
            value={medicine.dose}
          />

          {medicines.length !== 1 && (
            <Button
              type="button"
              value="x"
              margin={6}
              bgColor="bg-red-500"
              onClick={() => removeMedicineHandler(medicine.id)}
            />
          )}
        </div>
      ))}

      <div className="flex gap-4">
        <Button
          type="button"
          value="Add Medicine"
          bgColor={"bg-blue-500"}
          onClick={addMedicine}
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
