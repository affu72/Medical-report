import React, { useState } from "react";
import Input from "../CustomComp/Input";

import Button from "../CustomComp/Button";

export interface IMedicine {
  id: number;
  type: string;
  name: string;
  dose: string;
  quantity?: string;
}

const Medicines = () => {
  const [medicines, setMedicines] = useState<IMedicine[]>([
    { name: "", dose: "", type: "", id: 0 },
  ]);

  const addMedicine = () => {
    setMedicines((prev) => [
      ...prev,
      { name: "", dose: "", type: "", id: prev[prev.length - 1]["id"] + 1 },
    ]);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    index: number
  ) => {
    const { name, value } = e.target;

    const list = [...medicines];

    list[index][name as "name" | "dose" | "type"] = value;

    setMedicines(list);
  };

  const handleRemoveClick = (index: number) => {
    setMedicines((prev) => prev.filter((medicine) => index !== medicine.id));
  };

  const handleClearClick = () => {
    setMedicines([{ name: "", dose: "", type: "", id: 0 }]);
  };

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
              onChange={(e) => handleInputChange(e, medicine.id)}
              value={medicine.name}
            />
            <select
              name="type"
              aria-label="Select medicine type"
              className="absolute bottom-5 right-1 pl-4 py-2 bg-white h-12 border-l-0 border-gray-300 rounded-r-md pointer-events-auto text-slate-500"
              value={medicine.type}
              onChange={(e) => handleInputChange(e, medicine.id)}
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
            onChange={(e) => handleInputChange(e, medicine.id)}
            value={medicine.dose}
          />

          {medicines.length !== 1 && (
            <Button
              type="button"
              value="x"
              margin={6}
              bgColor="red"
              onClick={() => handleRemoveClick(medicine.id)}
            />
          )}
        </div>
      ))}

      <div className="flex gap-4">
        <Button
          type="button"
          value="Add Medicine"
          bgColor={"blue"}
          onClick={addMedicine}
        />

        <Button
          type="button"
          bgColor={"yellow"}
          value="Clear All"
          onClick={handleClearClick}
        />
      </div>
    </div>
  );
};

export default Medicines;
