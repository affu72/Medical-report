import React, { useState } from "react";
import Input from "../MyComponents/Input";
import MedicineInput from "../MyComponents/MedicineInput";
import Button from "../MyComponents/Button";

export interface IMedicine {
  name: string;
  dose: string;
  type: string;
  quantity?: string;
}

// type propType = {
//   getData: (medicine: IMedicine[]) => void;
// };

const Medicines = () => {
  const [medicines, setMedicines] = useState<IMedicine[]>([
    { name: "", dose: "", type: "" },
  ]);

  const addMedicine = () => {
    setMedicines((prev) => [...prev, { name: "", dose: "", type: "" }]);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    index: number
  ) => {
    const { name, value } = e.target;
    const list = [...medicines];
    list[index][name as keyof IMedicine] = value;
    setMedicines(list);
  };

  const handleRemoveClick = (index: number) => {
    const list = [...medicines];
    list.splice(index, 1);
    setMedicines(list);
  };

  const handleClearClick = () => {
    setMedicines([{ name: "", dose: "", type: "" }]);
  };

  // const handleSaveClick = () => {
  //   getData(medicines);
  // };
  // console.log(medicines);

  return (
    <div>
      {medicines.map((medicine, index) => (
        <div key={index} className="flex items-center gap-2 xl:justify-between">
          <MedicineInput />

          <input
            type="text"
            placeholder="dose"
            className={`border-2 border-gray-300 py-2 px-4 rounded-md w-1/5 mt-6`}
          />

          {medicines.length !== 1 && (
            <Button
              type="button"
              value="x"
              margin={6}
              bgColor="red"
              onClick={() => handleRemoveClick(index)}
            />
          )}
        </div>
      ))}

      <div className="flex gap-4">
        <Button
          type="button"
          value="Add Medicine"
          bgColor="blue"
          onClick={addMedicine}
        />

        <Button
          type="button"
          bgColor="yellow"
          value="Clear All"
          onClick={handleClearClick}
        />

        {/* <span>Save</span> */}
      </div>
    </div>
  );
};

export default Medicines;
