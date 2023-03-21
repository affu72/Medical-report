import React, { useState } from "react";
import Input from "./MyComponents/Input";
import MedicineInput from "./MyComponents/MedicineInput";

export interface IMedicine {
  name: string;
  dose: string;
  type: string;
}

// type propType = {
//   getData: (medicine: IMedicine[]) => void;
// };

const Medicines = () => {
  const [medicines, setMedicines] = useState<IMedicine[]>([
    { name: "", dose: "", type: "" },
  ]);

  const addMedicine = () => {
    setMedicines([...medicines, { name: "", dose: "", type: "" }]);
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

  return (
    <div>
      {medicines.map((medicine, index) => (
        <div key={index}>
          <MedicineInput />

          <div className="flex items-center gap-8">
            <Input
              type="text"
              placeholder="Dose"
              name="dose"
              value={medicine.dose}
              // onChange={(e) => handleInputChange(e, index)}
            />
          </div>

          {medicines.length !== 1 && (
            <span
              className="remove-button button"
              // onClick={() => handleRemoveClick(index)}
            >
              Remove
            </span>
          )}
        </div>
      ))}

      <div className="flex gap-4">
        <span
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
          onClick={addMedicine}
        >
          Add medicine
        </span>
        <span onClick={handleClearClick}>Clear all</span>
        <span>Save</span>
      </div>
    </div>
  );
};

export default Medicines;
